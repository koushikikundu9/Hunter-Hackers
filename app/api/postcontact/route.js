import {Contact} from "@/lib/model/contact";
import { mongoURl } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req) {
  await mongoose.connect(mongoURl);

  try {
    if (mongoose.connection.readyState === 0) {
          await mongoose.connect(mongoURl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("✅ MongoDB connected");
        }
  } catch (error) {
    console.error("DB fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}

/*export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json(); // Parse the request body

    const { name, email, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const newUser = await Contact.create({ name, email,message });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}*/