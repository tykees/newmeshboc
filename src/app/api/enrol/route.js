import mongoose from "mongoose";
import connectDB from '@/app/lib/mongodb';
import Enrol from "../models/enrol";
// import Enrol from "@/app/models/enrol"
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    name,
    email,
    phone,
    subject,
    medium,
  } = await req.json();

  try {
    await connectDB();
    await Enrol.create({
        name,
        email,
        phone,
        subject,
        medium,
    });

    return NextResponse.json({
      msg: ["Sent successfully!"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList)
      return NextResponse.json({ msg: errorList });
    } 
    else {
      return NextResponse.json({ msg: [error.message] });
    }
  }
}
