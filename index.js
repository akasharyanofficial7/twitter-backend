import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import service from "./src/services/tweet-services.js";
import apiRoutes from "./src/routes/index.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

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

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});

// let response = new service();
// await response.create({ content: "this is a #book " });
