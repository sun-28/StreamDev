const express = require("express");
const app = express();
const ConnecttoMongoDB = require("./db");
ConnecttoMongoDB();
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));

app.listen(5000, () => {
  console.log("StreamDev");
});
