import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bycrpt from "bcryptjs"

export async function POST(request) {
  const {username, email, password, confirmPassword} = await request.json();


  if (password !== confirmPassword) {
    return new NextResponse(JSON.stringify({message: "password does not match"}), {status: 400})
  }

  await connectDB()
  const existingUser = await User.findOne({email});

  if (existingUser) {
    return new NextResponse(JSON.stringify({message: "user already exists"}), {status: 400})
  }

  const hashPassword = await bycrpt.hash(password, 10)

  const newUser = await new User({email, password: hashPassword, username});

  try {
    
    await newUser.save();
    return new NextResponse(JSON.stringify("User successfully registered....", newUser), {status: 201});

  } catch (err) {
    return new NextResponse({message: err.message}, {status: 500})
  }
} 