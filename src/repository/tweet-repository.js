import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";
class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(id) {
    try {
      const tweetWithComments = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweetWithComments;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweets = await Tweet.find().skip(offset).limit(limit);
      return tweets;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
