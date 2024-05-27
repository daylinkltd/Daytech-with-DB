"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Dashboard/Navbar";
import TagRadioButtons from "@/src/components/Dashboard/TagRadioButtons";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString()); // Set default published date
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !slug || !content || !publishedAt) {
      alert("Please fill in the required fields: Title, Description, Slug, Content, and Published Date.");
      return;
    }

    // Basic validation for Google Drive image URL format (can be improved)
    const imageRegex = /^https:\/\/drive\.google\.com\/uc\?export=view&id=[A-Za-z0-9\-_]+$/;
    if (!imageRegex.test(image)) {
      alert("Please enter a valid Google Drive image URL.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3003/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug,
          description,
          content,
          image, // Use image state variable directly
          publishedAt,
          author: "Daytech", // Replace with your name (consider storing user data for dynamic author field)
          tags: selectedTags, // Empty tags array initially (add tags functionality if needed)
        }),
      });

      if (res.ok) {
        router.push("/dashboard/blogs");
      } else {
        throw new Error("Failed to create blog post");
      }
    } catch (error) {
      console.error(error);
      // Display user-friendly error message on the form (optional)
    }
  };

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/tags");
        const data = await response.json();
        setTags(data.tags.map(tag => tag.name));
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);
  return (
    <>
    <h1 className="p-8">Dashboard → Blogs → Add Blog</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 pt-3 px-8'>
        <input
          onChange={(e) => setSlug(e.target.value)}
          value={slug}
          type="text"
          className='bg-light dark:bg-dark px-8 py-2'
          placeholder='Slug without space'
        />
        <input
          onChange={(e) => setPublishedAt(e.target.value)}
          value={publishedAt}
          type="date"
          className='bg-light dark:bg-dark px-8 py-2'            placeholder='Date'
        />
        <div className="flex  justify-start">
          <h1 className="px-5"> Select Tags (categories): </h1>
          <TagRadioButtons
            tags={tags}
            selectedTags={selectedTags}
            onChange={setSelectedTags}
          />
        </div>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
          className='bg-light dark:bg-dark px-8 py-2'
          placeholder='Directly paste the gdrive image link here'
        />
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          type="text"
          className='bg-light dark:bg-dark px-8 py-2'
          placeholder='content in Mdx'
        />
        <button type="submit" className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Blog</button>
      </form>
    </>
  )
}

export default AddBlog
