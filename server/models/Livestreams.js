const mongoose = require("mongoose");
const { Schema } = mongoose;
const date = new Date("<YYYY-mm-ddTHH:MM:ss>");
const LiveStream = new Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzuGvSdLLmAgWiCTgUD-6-7GCA_t35cM4o7w3WQXq2w&s",
  },
  datetime: {
    type: String,
    default: date,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Array,
    default: ["init"],
  },
  created_by: {
    type: String,
    required: true,
  },
  donations: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("livestream", LiveStream);
