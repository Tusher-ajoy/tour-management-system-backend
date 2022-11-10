const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());

const packageRoute = require("./routes/package.route");

app.get("/", (req, res) => {
  res.send("Route is working YaY!!");
});

//posting to db
app.use("/api/v1/tours", packageRoute);

module.exports = app;
