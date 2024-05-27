"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";


const AddTag = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !slug ) {
      alert("Please fill in the required fields: Name, Description, Slug");
      return;
    }

    try {
      const res = await fetch("http://localhost:3003/api/tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          slug,
          description,
        }),
      });

      if (res.ok) {
        router.push("/dashboard/tags");
      } else {
        throw new Error("Failed to create tag");
      }
    } catch (error) {
      console.error(error);
      // Display user-friendly error message on the form (optional)
    }
  };
  return (
    <>
    <h1 className="p-8">Dashboard → Tags → Add Tag</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 pt-3 px-8'>
        <input
          onChange={(e) => setSlug(e.target.value)}
          value={slug}
          type="text"
          className='bg-light dark:bg-dark px-8 py-2'
          placeholder='Slug without space'
        />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className='bg-light dark:bg-dark px-8 py-2 '
          placeholder='Title'
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className='bg-light dark:bg-dark px-8 py-2'
          placeholder='Add Description'
        />
        <button type="submit" className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Tag</button>
      </form>
    </>
  )
}

export default AddTag
