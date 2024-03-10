const Hashtag = require("./models/hashtag");
class HashtagRepository {
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
}
