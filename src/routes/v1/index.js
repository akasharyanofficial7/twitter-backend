import express from "express";
import { createTweet } from "../../controller/tweet-controller.js";
const router = express.Router();

router.post("/tweets", createTweet);

export default router;
