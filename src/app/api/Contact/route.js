import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "../../../../models/User";

export async function POST(req) {
  try {
    await connectDB();

    const { first_name, last_name, phone, message, email } = await req.json();

    if (!first_name || !last_name || !phone || !message || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 400 }
      );
    }

    const newUser = new User({
      first_name,
      last_name,
      phone,
      message,
      email,
    });

    await newUser.save();

    console.log(" New user created:", newUser.email);

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
    
  } catch (error) {
    console.error(" Error creating user:", error);
    return NextResponse.json(
      { error: "Something went wrong", details: error.message },
      { status: 500 }
    );
  }
}