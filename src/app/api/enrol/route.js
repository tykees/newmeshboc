import { NextResponse } from "next/server";
import connectDB from '../../lib/mongodb'; // Make sure the path is correct
import Enrol from '../models/enrol';

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



export async function GET(req) {
  try {
    await connectDB();
    const enrolments = await Enrol.find({}).exec();

    return NextResponse.json(enrolments);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function handleRequest(req) {
  switch (req.method) {
    case 'POST':
      return POST(req);
    case 'GET':
      return GET(req);
    default:
      return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
  }
}

export default async function handler(req, res) {
  return handleRequest(req);
}