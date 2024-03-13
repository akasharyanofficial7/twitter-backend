const express = require("express");
const mongoose = require("mongoose");
// const connect = require("./config/database");
const dotenv = require("dotenv");
const Tweet = require("./src/models/tweet");
const {
  TweetRepository,
  HashtagRepository,
} = require("./src/repository/index.js");

const TweetService = require("./src/services/tweet-services.js");
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

  // let repo = new HashtagRepository();
  // let response = await repo.findByName(["music", "trend"]);

  // console.log(response);
  // response = response.map((tag) => tag.title);
  // console.log(response);

  const service = new TweetService();
  const tweet = service.create({
    content: "this is my first #code  and #fun tweet  #ssong #laluu",
  });
});
