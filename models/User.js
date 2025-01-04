import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String, 
    required: [true, "please enter a valid email"],
    unique: true,
  }, 
  password: {
    type: String, 
    required: false
  },
  profilePicture: {
    type: String,
    default: '', //URL to profile picture
  },
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User', //ref to other users
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true,
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;