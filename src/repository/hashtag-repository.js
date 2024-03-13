const Hashtag = require("../models/hashtag.js");
class HashtagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    const tag = await Hashtag.findById(id);
    return tag;
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  findByName = async (titleList) => {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.error("Error in findByName function:", error);
      return { error: "An error occurred while fetching data" };
    }
  };

  async destroy(id) {
    try {
      const response = await Hashtag.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagRepository;
