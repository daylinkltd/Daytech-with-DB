import connectDB from "@/src/libs/db";
import Blog from "@/src/models/Blog";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
  const {slug} = params;
  const { newTitle: title, newDescription: description, newContent: content, newPublishedAt: publishedAt, newImage: image, newTags: tags, newAuthor: author} = await request.json();
  await connectDB();
  const filter = { slug }; // Create query object to filter by slug
  const update =  {title, description, content, publishedAt, image, tags, author};
  const updatedBlog = await Blog.findOneAndUpdate(filter, update, { new: true });
  if (!updatedBlog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 }); // Handle not found case
  }
  return NextResponse.json({ message: "Blog Updated ", updatedBlog }, { status: 200 });
}

export async function GET(request, {params}) {
  const {slug} = params;
  await connectDB();
  const blog = await Blog.findOne({slug: slug});
  return NextResponse.json({blog }, {status: 200})
}
