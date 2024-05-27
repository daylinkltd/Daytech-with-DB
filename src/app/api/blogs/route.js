import connectDB from "@/src/libs/db"
import Blog from "@/src/models/Blog";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {title, slug, description, content, publishedAt, updatedAt, author, tags, image} = await request.json();
  await connectDB()
  await Blog.create ({title, slug, description, content, publishedAt, updatedAt, author, tags, image})
  return NextResponse.json({message: "Blog Created "}, {status: 201 })
}


export async function GET() {
  await connectDB();
  const blogs = await Blog.find();
  return NextResponse.json ({blogs})
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({message: "Blog Deleted"}, {status: 200 })
}


// export async function DELETE(request) {
//   const slug = request.nextUrl.searchParams.get('slug');
//   await connectDB(); // Assuming you have a function to establish a database connection
//   try {
//     const deletedBlog = await Blog.findOneAndDelete({ slug });

//     if (!deletedBlog) {
//       // No matching blog post found, return a 404 Not Found response
//       return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
//     }

//     // Blog post deleted successfully, return a 200 OK response
//     return NextResponse.json({ message: 'Blog post deleted' }, { status: 200 });
//   } catch (error) {
//     console.error('Error deleting blog post:', error);
//     // Handle other potential errors (e.g., database connection issues)
//     return NextResponse.json({ message: 'Error deleting blog post' }, { status: 500 });
//   }
// }
