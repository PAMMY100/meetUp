import { NextResponse } from "next/server";
import User from "@/models/User";
import Feed from "@/models/Feed";
import connectDB from "@/config/db";
import { Types } from "mongoose";


export const GET = async (req, res) => {
  try {
    connectDB()
    const post = await Feed.find()
    .populate('user', 'username profilePicture')
    .populate({
      path: 'comments.user',
      select: 'username profilePicture', //Select fields for comment authors
    })
    .sort({createdAt: -1})
    .exec();

    return new NextResponse(JSON.stringify({message: "feeds successfully loaded", post}), {status: 200});
    
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Failed to load feed", error: error.message}), {status: 500})
  }
}


export const POST = async (request) => {
  try {
    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    // Parse the request body
    const { content, media } = await request.json();


    // Validate userId
    if (!userId || !Types.ObjectId.isValid(userId)) {
       return new NextResponse(JSON.stringify({message: "Invalid userId"}), {status: 400})
    }

    //connect to the Database
    await connectDB()

    // Check if the user exists in the database
    const user = await User.findById(userId);
    
    if (!user) {
      return NextResponse(JSON.stringify({message: "User not found"}), {status: 400})
    }

    
    // Validate input
    if (!(content || media)) {
      return new NextResponse(JSON.stringify({message: "Please provide a content or media"}), {status: 400})
    }

    // Create a new feed post
    const newPost = new Feed({
      user: userId,
      content,
      media,
    });

    // Save the post to the database
    await newPost.save();

    return NextResponse.json(
      { message: "Post successfully created", newPost },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error posting feed", error: error.message },
      { status: 500 }
    );
  }
};
