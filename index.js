const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/database");
const dotenv = require("dotenv");

const Tweet = require("./models/tweet");
dotenv.config();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("mongodb is connected ");
  })
  .catch((error) => {
    console.log(error, " we got server error");
  });
const app = express();

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // await connect();
  // console.log("mongodb is connected");

  const tweet = await Tweet.create({
    content: " LALU",
    userEmail: "ajhg@gmail.com",
  });

  console.log(tweet);
});
