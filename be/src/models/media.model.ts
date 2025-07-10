import mongoose, { Schema } from "mongoose";

const MediaSchema: Schema = new Schema({
    title: { type: String, required: true },
    artist: String,
    duration: Number,
    url: { type: String, required: true },
    type: {
      type: String,
      enum: ["song", "meditation"],
      required: true
    },
    tags: [String],
    createdAt: { type: Date, default: Date.now }
});
  
const MediaModel = mongoose.model("Media", MediaSchema);

export default MediaModel;