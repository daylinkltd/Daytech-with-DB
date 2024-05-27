'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const EditBlogForm = ({ slug, title, description, content,  publishedAt, tags, image, author}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newContent, setNewContent] = useState(content);
  const [newPublishedAt, setNewPublishedAt] = useState(publishedAt); // Set default published date
  const [newTags, setNewTags] = useState(tags);
  const [newImage, setNewImage] = useState(image);
  const [newAuthor, setNewAuthor] = useState(author);

  // const processedTags = newTags.trim().split(",");

  const [error, setError] = useState(null); // State for error message
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors on submit
    try {
      const url = `http://localhost:3003/api/blogs/${slug}`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newTitle,
          newDescription,
          newContent,
          newImage, // Use image state variable directly
          newPublishedAt,
          newAuthor, // Replace with your name (consider storing user data for dynamic author field)
          newTags,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json(); // Parse error JSON (if available)
        setError(errorData?.message || 'Failed to update blog'); // User-friendly message
        return; // Handle error gracefully (display error)
      }

      router.refresh(); // Optional refresh (consider redirecting instead)
      router.push('/dashboard/blogs'); // Redirect to homepage
    } catch (error) {
      console.error('Error updating topic:', error);
      setError('An unexpected error occurred'); // Generic error message
    }
  };

  return (
    <>
    <h1 className='text-lg items-center pt-4 px-12'>Edit Blog </h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-8 '>
      <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add Topic'/>
      <textarea onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add Description'/>
      <textarea onChange={(e) => setNewContent(e.target.value)} value={newContent} type="text" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add content'/>
      <input onChange={(e) => setNewPublishedAt(e.target.value)} value={newPublishedAt} type="date" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add Published date'/>
      <input onChange={(e) => setNewImage(e.target.value)} value={newImage} type="text" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add Image Link'/>
      <input onChange={(e) => setNewTags(e.target.value)} value={newTags} type="text" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add Tags' disabled/>
      <input onChange={(e) => setNewAuthor(e.target.value)} value={newAuthor} type="text" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add Author' disabled/>
    <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit  '>Update Blog</button>
    {error && <p className='text-red-500'>{error}</p>}
  </form>
  </>
  )
}

export default EditBlogForm;
