import mongoose from "mongoose";
import { Schema } from "mongoose";


const feedSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
    maxlength: 500,
  },
  media: [{
    type: String, //URLS of images or videos
  }],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  comments: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    }
  }]
})

const Feed = mongoose.model('Feed', feedSchema);
module.exports = Feed;