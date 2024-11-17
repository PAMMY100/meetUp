import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { stringify } from "postcss";


export async function GET (request) {
  try {
    await connectDB();

    const users = await User.find();

    if (!users) {
      return new NextResponse(JSON.stringify({message: "no users found"}), {status: 400});
    }

    return new NextResponse(JSON.stringify({message: "users found", users}), {status: 200})

  } catch (error) {
    return new NextResponse(JSON.stringify({message: "failed to fetch all users"}), {status: 500})
  }
}