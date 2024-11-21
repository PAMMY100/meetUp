import { NextResponse } from "next/server";
import User from "@/models/User";
import Feed from "@/models/Feed";
import connectDB from "@/config/db";
import { Types } from "mongoose";


export const GET = async (request, {params}) => {
  try {
    await connectDB()
    
    // Extract the ID from the request URL
    const id = params.id;

    console.log(id)

    if (!id || !Types.ObjectId.isValid(id)) {
      return NextResponse.json({message: "No user id Provided"}, {status: 404})
    }


    const post = await Feed.findById(new mongoose.Types.ObjectId(id))
    .populate('username profilePicture')
    .populate({
      path: 'comment.user',
      select: 'username profilePicture'
    })

    if (!post) {
      return NextResponse.json({message: "Post not found"}, {status: 400})
    }

    return  NextResponse.json({message: "post found successfully", post}, {status: 200});

  } catch (error) {
    return NextResponse.json({message: "error fetching post", error: error.message}, {status: 500})
  }
}