const express = require("express");
const app = express();
const ConnecttoMongoDB = require("./db");
ConnecttoMongoDB();
const cors = require("cors");

const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);

var io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
const Livestreams = require("./models/Livestreams");
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/auth", require("./routes/auth"));
app.use("/livestream", require("./routes/livestream"));
app.use("/aiml", require("./routes/aiml"));
io.on("connection", (socket) => {
  socket.on("message", async (cid,message) => {
    try {
      const user=await Livestreams.findById(cid);
      await user.comments.push(message);
      await user.save();
      io.emit(message,cid); 
    } catch (error) {
      console.error("Error adding comment:", error);
      io.emit(error);
    }
  });
  socket.on("code",async(cid,url)=>{
    try {
      //will take from the python module here using url and send ahead.....
      //i will dockerize it and then the created file will be prettiered
      //if i can know exactly the language of the file then i can build this pretty hard.....
      io.emit(cid,text); 
    } catch (error) {
      console.error("Error adding comment:", error);
      io.emit(error);
    }
  })
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
app.listen(5000,()=>{
  console.log('StreamDev')
})