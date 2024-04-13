const express = require("express");
const app = express.Router();
const Checkuser = require("../middleware/CheckUser");
const Livestream = require("../models/Livestreams");
const Users = require("../models/Users");
const date = new Date("<YYYY-mm-ddTHH:MM:ss>");
const Livestreams = require("../models/Livestreams");

app.post("/create", Checkuser, async (req, res) => {
  if (!req.checker) {
    console.log('final')
    return res.send({
      success: false,
      message: "User not found.",
    });
  } else {
    try {
      const response = await Livestream.create({
        name: req.body.name,
        created_by: req.user_id,
        description:req.body.description
      });
      const resp = await Users.findById(req.user_id);
      resp.wallet=req.body.wallet;
      resp.livestreams_id.push(response._id);
      await resp.save();
      return res.send({ success: true, response });
    } catch (error) {
      const err=error.toString();
      return res.send({ success: false, message: err });
    }
  }
});

app.get("/subscribe/:creatorid", Checkuser, async (req, res) => {
  if (!req.checker) {
    // provide  creatorid
    return res.send({
      success: false,
      message: "User not found.",
    });
  } else {
    try {
      const response = await Users.findById(req.params.creatorid);//subscribed_by
      const response1=await Users.findById(req.user_id);//subscribed_to
      if(response.subscribed_by.get(req.user_id)){
        response.subscribed_by.set(req.user_id,false);
        response1.subscribed_to.set(req.params.creatorid,false);
        response.total_subscribers--;
      }else{
        response.subscribed_by.set(req.user_id,true);
        response1.subscribed_to.set(req.params.creatorid,true);
        response.total_subscribers--;
      }
      return res.send({ success: true, message: "Succesful" });
    } catch (error) {
      const err=error.toString();
      return res.send({ success: false, message: err });
    }
  }
});

app.get("/like/:stream_id", Checkuser, async (req, res) => {
  if (!req.checker) {
    //provide  livestream id && liker id
    return res.send({
      success: false,
      message: "User not found.",
    });
  } else {
    try {
      const response  = await Livestream.findById(req.params.stream_id);
      if(response.likes.get(req.user_id)===true){
        response.likes.set(req.user_id,false);
        response.total_likes--;
      }else{
        response.likes.set(req.user_id,true);
        response.total_likes++;
      }
      response.save();
      return res.send({ success: true, message: "Succesful" });
    } catch (error) {
      console.log(error)
      return res.send({ success: false, message: error });
    }
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
      const ls=await Livestreams.findById(req.params.id);
      return res.send({success:1,comments:ls.comments});
    } catch (error) {
      const err=error.toString()
      return res.send({ message: error, success: 0 });
    }
  });

  app.get("/fetchwallet/:id",async(req,res)=>{
    try {
      
    const response=await Livestream.findById(req.params.id);
    const repo=await Users.findById(response.created_by);
    return res.send({success:1,wallet:repo.wallet});
    } catch (error) {
      const err=error.toString();
      res.send({success:0,message:err});
    }
  })
module.exports = app;
