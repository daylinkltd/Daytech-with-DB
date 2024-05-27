import TagList from "@/src/components/Dashboard/TagList";
import Link from "next/link";


export default function Tag() {
  return(
    <>
      <div className="p-8">
      <div className="flex justify-between">
          <h1 className="">Dashboard → Tags</h1>
          <Link href={'/dashboard/tags/addTag'} className="bg-dark dark:bg-white text-white dark:text-dark rounded-lg p-2 px-4 font-extrabold">+</Link>
        </div>
        <TagList/>
      </div>
    </>
  )
}
