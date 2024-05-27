import BlogList from "@/src/components/Dashboard/BlogList";
import Link from "next/link";


export default function Blog() {
  return(
    <>
      <div className="p-8">
        <div className="flex justify-between">
          <h1 className="">Dashboard → Blogs</h1>
          <Link href={'/dashboard/blogs/addBlog'} className="bg-dark dark:bg-white text-white dark:text-dark rounded-lg p-2 px-4 font-extrabold">+</Link>
        </div>
        <BlogList/>
      </div>
    </>
  )
}
