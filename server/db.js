const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/streamdev";
const ConnecttoMongoDB = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("StreamDev Connection Succesful!");
  });
};
module.exports = ConnecttoMongoDB;
