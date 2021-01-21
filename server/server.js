const express = require("express");
const app = express();
const path = require("path");
const port = process.env.EXPPORT || 3000;
//console.log(port);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "public", "index.html"));
});

const server = app.listen(port, (err) => {
  if (err) {
    console.log("server cannot listen");
    return;
  }
  console.log(
    `[EXPRESS@${server.address().address}:${
      server.address().port
    }] Online and listening`
  );
});
