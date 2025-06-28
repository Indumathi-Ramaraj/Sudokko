const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

//app
const app = express();

//middlewares
app.use(morgan("dev")); // in development mode
app.use(bodyParser.json());
app.use(cookieParser());
// cors
app.use(cors());

//routes
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the Sudoku API",
    time: Date().toString(),
  });
});

//port
const PORT = process.env.PORT || 8000;

//server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});