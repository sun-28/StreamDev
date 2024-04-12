const mongoose = require("mongoose");
require('dotenv');
dotenv.config();
const mongoURI = `${processs.env.ATLAS_DB}/streamdev`;
const ConnecttoMongoDB = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("StreamDev Connection Succesful!");
  });
};
module.exports = ConnecttoMongoDB;
