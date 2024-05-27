import Link from "next/link";
import RemoveBtn from "./RemoveTag";
import {HiPencilAlt} from "react-icons/hi"

const getTags = async () => {
  try {
    const res = await fetch(`http://localhost:3003/api/tags`, { cache: 'no-store'} )

    if (!res.ok){
      throw new Error("Failed to Fetch tags")
    }
    return res.json();
  } catch (error) {
    console.log("Error Loading tags: ", error)
  }
};

export default async function TagList() {
  const {tags} = await getTags();
  return (
    <>
      {tags.map((b) => (
        <div key={b.slug} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div >
            <h1>Slug: {b.slug}</h1>
            <h2 className="font-bold text-2xl">Title: {b.name}</h2>
            <div>Description: {b.description}</div>
          </div>
          <div className="flex gap-2">
            <Link href={`/dashboard/tags/editTag/${b.slug}`}>
            <HiPencilAlt size={24}/> </Link>
            <RemoveBtn id={b._id}/>
          </div>
        </div>
      ))}
    </>
  )
}
