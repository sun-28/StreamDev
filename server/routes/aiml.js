const express = require("express");
const app = express.Router();
const Checkuser = require("../middleware/CheckUser");
const { exec } = require("child_process");

function runImage(url) {
  console.log(url);
  return new Promise((resolve, reject) => {
    const dockerRunCommand = `docker run -i my-ml-app`;
    const child = exec(
      dockerRunCommand,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
          return;
        }
        resolve(stdout);
      },
    );
    child.stdin.write(url);
    child.stdin.end();
  });
}

async function followerfetch(url) {
  return new Promise((resolve, reject) => {
    let scriptOutput = "";

    const pythonProcess = spawn("python", [`./ml/merge.py`, url]);

    pythonProcess.stdout.on("data", (data) => {
      scriptOutput += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Error from Python script: ${data}`);
      reject(data);
    });

    pythonProcess.on("close", (code) => {
      if (code === 0) {
        resolve(scriptOutput);
      } else {
        reject(`Python script exited with code ${code}`);
      }
    });
  });
}
app.post("/ml-transcript", Checkuser, async (req, res) => {
  try {
    // if (!req.checker) {
    //   return res.send({
    //     success: false,
    //     message: "User not found.",
    //   });
    // }
    const followers = await runImage(req.body.url);
    return res.send({ success: 1, followers });
  } catch (error) {
    return res.send({ success: 0, error: error });
  }
});

module.exports = app;
