import connectDB from "@/src/libs/db";
import Tag from "@/src/models/Tag";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
  const {slug} = params;
  const { newName: name, newDescription: description} = await request.json();
  await connectDB();
  const filter = { slug }; // Create query object to filter by slug
  const update =  {name, description};
  const updatedTag = await Tag.findOneAndUpdate(filter, update, { new: true });
  if (!updatedTag) {
    return NextResponse.json({ message: "Tag not found" }, { status: 404 }); // Handle not found case
  }
  return NextResponse.json({ message: "Tag Updated", updatedTag }, { status: 200 });
}

export async function GET(request, {params}) {
  const {slug} = params;
  await connectDB();
  const tag = await Tag.findOne({slug: slug});
  return NextResponse.json({tag }, {status: 200})
}
