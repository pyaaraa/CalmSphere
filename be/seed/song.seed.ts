import mongoose from "mongoose";
import MediaItem from "../src/models/media.model";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  await MediaItem.insertMany([
    {
      title: " ",
      artist: " ",
      duration: 0,
      url: " ",
      type: ""
    },
    {
      title: "",
      artist: "",
      duration: 0,
      url: " ",
      type: " "
    }
  ]);

  process.exit();
};

run();
