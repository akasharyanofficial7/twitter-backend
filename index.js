import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import Tweet from "./src/models/tweet.js";
// import { TweetRepository, HashtagRepository } from "./src/repository/index.js";
import TweetService from "./src/services/tweet-services.js";

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

  const service = new TweetService();
  const tweet = await service.create({
    content: "this is  a my first  #BOOK BANK  aur sare #DOST ",
  });
});
