const mongoose = require("mongoose");
const { Schema } = mongoose;

const Userschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  livestreams_id: {
    type: Array, //stores the livestreams
    default: ["init"],
  },
  subscribers: {
    type: Number,
    default: 0,
  },
  subscribed: {
    type: Array, //stores the creator ids, member has stored
    default: ["init"],
  },
  likedstreams: {
    type: Array,
    default: ["init"],
  },
  donations: {
    type: Array,
    default: ["init"],
  },
});
module.exports = mongoose.model("user", Userschema);
