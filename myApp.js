const express = require("express");
const app = express();
const path = require("path");

// Challenge 1
// console.log("Hello World");

// Challenge 2
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// Challenge 3
const absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

// Challenge 4
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
