const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [200, "tweet can not be more than 200 word"],
    },
    //   hashtags: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Hashtag",
    //     },
    //   ],
    // },
    // { timestamps: true }

    userEmail: {
      type: String,
    },
  },

  { timestamps: true }
);
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
