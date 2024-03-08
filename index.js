const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
