const express = require("express");
const app = express.Router();
const jwt = require("jsonwebtoken");
const uniqueness = require("../middleware/uniquecheck");
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.post("/signup", uniqueness, async (req, res) => {
  if (req.checker) {
    return res.send({
      success: false,
      message: "User already exists using phone/mail.",
    });
  } else {
    try {
      const obj = req.body;
      obj.password = await bcrypt.hash(obj.password, saltRounds);
      await User.create(obj);
      return res.send({ success: true, message: "Succesful" });
    } catch (error) {
      console.log(error);
      return res.send({ success: false, error });
    }
  }
});

app.post("/login", async (req, res) => {
  try {
    const { id, pw } = req.body;
    const users = await User.find({ $or: [{ email: id }, { phone: id }] });
    const user_detail = users.length !== 0 ? users[0] : null;
    if (user_detail === null) {
      return res.send({ s: false, error: "No Such User found!" });
    }
    const comparing = await bcrypt.compare(pw, user_detail.password);
    if (!comparing) {
      return res.send({ success: false, error: "Credentials do not match!" });
    }
    let privateKey = "YOUR_PRIVATE_KEY"; //did not put in env for dev purpose
    const ids = user_detail._id.toString();
    const token = await jwt.sign(ids, privateKey);
    return res.send({ success: true, token, user_detail });
  } catch (error) {
    return res.send({ success: false, error: "Please try Again later!" });
  }
});

module.exports = app;
