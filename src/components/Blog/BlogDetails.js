import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
import getBlog from "@/src/libs/getBlog";
// import ViewCounter from "./ViewCounter";

const BlogDetails = async ({slug}) => {

  const {blog, error} = await getBlog(slug);
  const tagUrl = `http://localhost:3003/categories/${slug}`
  if (error) {
    // Handle error, display message or redirect
    return <div>Error fetching blog content</div>;
  }
  return (
    <div className="px-2  md:px-10 bg-dark dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
{blog?.publishedAt && (
  <time className="m-3">
    {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
  </time>
)}

{blog?.publishedAt && (
  <time className="m-3">
    {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
  </time>
)}

      {/* <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span> */}
{blog?.readingTime && (
  <div className="m-3">{blog.readingTime.text}</div>
)}

{blog?.tags && blog.tags[0] && (
  <Link href={tagUrl} className="m-3">
    #{blog.tags[0]}
  </Link>
)}

    </div>
  );
};

export default BlogDetails;
