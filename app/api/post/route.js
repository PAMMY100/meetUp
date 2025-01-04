import connectDB from "@/config/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import Feed from "@/models/Feed";


export async function handler(req, res) {
  await connectDB();
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized"}), {status: 401})
  }
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { content, media } = req.body;

        if (!content) {
          return new NextResponse(JSON.stringify({message: "Content is required"}), {status: 400})
        }

        const newPost = await Feed.create({
          user: session.user.id,
          content,
          media
        })

        return NextResponse(JSON.stringify({message: "feed posted successfuly"}, newPost), {status: 201})
      } catch (error) {
        return NextResponse(JSON.stringify({message: "Internal Server Error"}), {status: 500})
      }

    case 'GET':
      try {
        const post = await Feed.findOne()
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

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
  }
}