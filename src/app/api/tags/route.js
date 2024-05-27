import connectDB from "@/src/libs/db"
import Tag from "@/src/models/Tag";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {name, slug, description, count} = await request.json();
  await connectDB()
  await Tag.create ({name, slug, description, count})
  return NextResponse.json({message: "Tag Created "}, {status: 201 })
}


export async function GET() {
  await connectDB();
  const tags = await Tag.find();
  return NextResponse.json ({tags})
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectDB();
  await Tag.findByIdAndDelete(id);
  return NextResponse.json({message: "Tag Deleted"}, {status: 200 })
}
