const Tweet = require("../models/tweet");
class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    const tweet = await Tweet.findById(id);
    return tweet;
    try {
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

  async destroy(id) {
    const tweet = await Tweet.findByIdRemove(id);
    return tweet;
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    const tweet = await Tweet.find().skip(offset).limit(limit);
    return tweet;
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;
