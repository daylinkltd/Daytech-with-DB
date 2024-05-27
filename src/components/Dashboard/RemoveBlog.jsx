"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}) {
  const router = useRouter();
  const removeBlog = async() => {
    const confirmed = confirm('Are you sure??');

    if (confirmed) {
      const url = `http://localhost:3003/api/blogs?id=${id}`;
      const res = await fetch(url,
      {
        method: "DELETE"
      });

      if(res.ok){
        router.refresh();
      }
    }
  }

  return (
    <button onClick={removeBlog} className="text-red-400">
      <HiOutlineTrash size={24}/>
    </button>
  )
}
