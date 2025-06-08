import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  user:    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  caption: { type: String, maxLength: 300 },
  image:   { type: String }, // URL to image
  likes:   [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [commentSchema],
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;
