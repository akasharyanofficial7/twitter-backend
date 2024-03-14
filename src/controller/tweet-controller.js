import TweetService from "../services/tweet-services.js";
const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      success: true,
      message: " successfully created new tweet",
      data: response,
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: " something went wrong",
      data: {},
      error: error,
    });
  }
};
