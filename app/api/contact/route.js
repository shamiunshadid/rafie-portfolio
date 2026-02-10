import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";

import { NextResponse } from "next/server";

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } =
    await req.json();
  // console.log("firstname:", firstname)
  // console.log("lastname:", lastname)
  // console.log("email:", email)
  // console.log("phone:", phone)
  // console.log("message:", message)

  // return NextResponse.json({msg: ["Hi from contact route js"]})

  try {
    await connectDB();
    await Contact.create({
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    });
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      // console.log(errorList)

      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: "Unable to send message" });
    }
  }
}
