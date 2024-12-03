import connectDB from "@/config/db";
import Feed from "@/models/Feed";
import User from "@/models/User";
import { NextResponse } from "next/server";



export const GET = async (req, res) => {

  //connect to DB
  await connectDB();

  const { query } = req.query;

  console.log(req.query);
  //verify query is valid
  if (!query || query.trim() === '') {
    return NextResponse(JSON.stringify({message: "Search query cannot be empty"}), {status: 400});
  }

  try {

    const [userResults, feedResults] = await Promise.all([
      //Search in User collection
      User.find({
        $or: [
          {username: {$regex: query, $options: "i"}},
          {email: {$regex: query, $options: "i"}}
        ],
      }).select("username email profilePicture"),
      
      //Search in Feeds collection
      Feed.find({
        $or: [
          {content: {$regex: query, $options: "i"}},
          {"comments.content": {$regex: query, $options: "i"}},
        ],
      })
      .populate("user", "username profilePicture")
      .select("content media comments user"),
    ])

    const combinedResults = {
      users: userResults,
      feeds: feedResults,
    }

    if (!userResults.length && !feedResults.length) {
      return NextResponse(JSON.stringify({message: "No results found"}), {status: 404});
    }

    return NextResponse(JSON.stringify({message: "item found successfully"}, combinedResults), {status: 200})


  } catch (error) {
    return NextResponse(JSON.stringify({ message: "Internal server error " + error.message}), {status: 500})
  }
}