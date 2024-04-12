const express = require("express");
const app = express.Router();
const Checkuser = require("../middleware/CheckUser");
const Livestream = require("../models/Livestreams");
const Users = require("../models/Users");
const date = new Date("<YYYY-mm-ddTHH:MM:ss>");
const redis = require("redis");
const redisClient = redis.createClient({ url: process.env.REDIS });

app.post("/create", Checkuser, async (req, res) => {
  if (!req.checker) {
    //provide  name of livestream && created by
    return res.send({
      success: false,
      message: "User not found.",
    });
  } else {
    try {
      const response = await Livestream.create({
        name: req.body.name,
        created_by: req.user_id,
      });
      const resp = await Users.findById(req.user_id);
      resp.livestreams.push(response._id);
      await resp.save();
      return res.send({ success: true, response });
    } catch (error) {
      return res.send({ success: false, message: error });
    }
  }
});

app.post("/subscribe", Checkuser, async (req, res) => {
  if (!req.checker) {
    //provide  creatorid && subscribed by id
    return res.send({
      success: false,
      message: "User not found.",
    });
  } else {
    try {
      const response = await Livestream.findById(req.body.creatorid);
      response.subscribers++;
      response.save();
      const resp = await Users.findById(req.body.subscriber);
      resp.subscribed.push(req.body.creatorid);
      await resp.save();
      return res.send({ success: true, message: "Succesful" });
    } catch (error) {
      return res.send({ success: false, message: error });
    }
  }
});

app.post("/like", Checkuser, async (req, res) => {
  if (!req.checker) {
    //provide  livestream id && liker id
    return res.send({
      success: false,
      message: "User not found.",
    });
  } else {
    try {
      const response = await Livestream.findById(req.body.stream_id);
      response.likes++;
      response.save();
      const resp = await Users.findById(req.body.liker);
      resp.likedstreams.push(req.body.stream_id);
      await resp.save();
      return res.send({ success: true, message: "Succesful" });
    } catch (error) {
      return res.send({ success: false, message: error });
    }
  }
});

app.post("/comment", Checkuser, async (req, res) => {
  if (!req.checker) {
    //provide  livestream id && comment && commenter name
    return res.send({
      success: false,
      message: "User not found.",
    });
  } else {
    const amount = req.body.amount === null ? 0 : req.body.amount;
    try {
      await redisClient.connect();
      await client.lpush(
        response._id,
        JSON.stringify({
          name: req.body.name,
          commenter_id: req.body.commenter,
          comment: req.body.comment,
          donation: amount,
          datetime: date,
        }),
      );
      await redisClient.quit();
      return res.send({ success: true, message: "Commented!" });
    } catch (error) {
      return res.send({ success: false, message: error });
    }
  }
});

app.get("/quit-livestream/:id", Checkuser, async (req, res) => {
  if (!req.checker) {
    //provide livestream id
    return res.send({
      success: false,
      message: "User not found.",
    });
  }
  try {
    //redis data goes into mogo
    const response = await Livestream.findById(req.params.id);
    await redisClient.connect();
    await client.lrange(req.params.id, 0, -1, (err, reply) => {
      if (err) {
        return res.send({ success: false, message: err });
      } else {
        const comments = reply.map((comment) => JSON.parse(comment));
        response.comments = comments;
      }
    });
    await redisClient.quit();
    await response.save();
    return res.send({
      success: true,
      message: "Livestream exited sucessfully.",
    });
  } catch (error) {
    return res.send({ success: false, message: error });
  }
});

app.get("/fetchcomments/:id", Checkuser, async (req, res) => {
  //provide livestream id in params
  if (!req.checker) {
    return res.send({
      success: false,
      message: "User not found.",
    });
  }
  try {
    client.lrange(req.params.id, 0, -1, (err, reply) => {
      if (err) {
        console.error(err);
      } else {
        const comments = reply.map((comment) => JSON.parse(comment));
        return res.send({ success: 1, comments });
      }
    });
  } catch (error) {
    return res.send({ message: error, success: 0 });
  }
});
module.exports = app;
