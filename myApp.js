const express = require("express");
const app = express();
require("dotenv").config();

// Challenge 7
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
};

app.use(logger);

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

// Challenge 5 => Challenge 6
app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

// Challenge 8
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

// Challenge 9
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

module.exports = app;
