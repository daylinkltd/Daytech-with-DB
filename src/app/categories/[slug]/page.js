import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import Search from "@/src/components/Elements/search";
import allBlogs from "@/src/libs/allBlogs";
import { cx } from "@/src/utils";
import { description } from "@/src/utils/siteMetaData";
import { format } from "date-fns";

import Image from "next/image";
import Link from "next/link";

const getTags  = async(slug) => {
try{
  const url = process.env.APIBLOGS
  const res = await fetch(`http://localhost:3003/api/tags/${slug}`,{cache: "no-store"})
  if(!res.ok)
    {
      throw new Error("No data Fetched  ")
    }
  return res.json();

}catch(error){
  throw new Error(error);
}
}

const getAllTags = async() => {
  try{
      const tags = await fetch('http://localhost:3003/api/tags',{cache:"no-store"})
      return tags.json()
  }catch(error)
  {
      throw new Error(error)
  }
}

const getBlogs = async () => {
  try{
    const response = await fetch(`http://localhost:3003/api/blogs`,{cache:"no-store"})
    return response.json()
  }catch(error)
  {
    throw new Error(error)
  }
}

const CategoryPage = async ({ params }) => {
  const {blogs} = await getBlogs()
  const {slug} = params;
  const filteredBlogs = blogs.filter((item) => {
    return item.tags.some((tag) => tag.toLowerCase().includes(slug.toLowerCase()));
  });

  
  const tag = await getTags(slug)
  const {tags}  = await getAllTags();

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <div className="grid grid-cols-12 justify-center w-full">
          <div className="col-span-8">
          <h1 className="hidden md:block mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{slug}</h1>
          </div>
          <div className="col-span-12 md:col-span-4">
          <Search blogs={blogs}/>
          </div>
        </div>
        <span className="mt-2 inline-block">
          {tags.description}
        </span>
      <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
        {tags.map((item,index) => (
            <Link href={`/categories/${item.slug}`} key={index}>
              <div className={cx(
        "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2 ",
        "bg-light text-dark dark:bg-dark dark:text-light"
      )} key={index}>
                    {item.name}
              </div>
            </Link>
        ))}
        </div>
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {filteredBlogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <div className="group flex flex-col items-center text-dark dark:text-light">
      <a href={`/blogs/${blog.slug}`} className="h-full rounded-xl overflow-hidden">
        <Image
          src={blog.image}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
          alt={blog.title}
          width={blog.image.width || 300}
          height={blog.image.height || 300}
          className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </a>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        <a href={`/blogs/${slug}`} className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </a>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
