import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Number,
      required: true
    },
    author: {
      type: String,
      required: true,
    },
    mainImage: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: false
    },
    likes: {
      type: [String],
      required: false
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;