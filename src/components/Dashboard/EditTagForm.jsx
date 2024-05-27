'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const EditTagForm = ({ slug, name, description, }) => {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);


  // const processedTags = newTags.trim().split(",");

  const [error, setError] = useState(null); // State for error message
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors on submit
    try {
      const url = `http://localhost:3003/api/tags/${slug}`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newName,
          newDescription,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json(); // Parse error JSON (if available)
        setError(errorData?.message || 'Failed to update tag'); // User-friendly message
        return; // Handle error gracefully (display error)
      }

      router.refresh(); // Optional refresh (consider redirecting instead)
      router.push('/dashboard/tags'); // Redirect to homepage
    } catch (error) {
      console.error('Error updating Tag:', error);
      setError('An unexpected error occurred', error); // Generic error message
    }
  };

  return (
    <>
    <h1 className='text-lg items-center pt-4 px-12'>Edit Tag </h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-8 '>
      <input onChange={(e) => setNewName(e.target.value)} value={newName} type="text" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add Tag'/>
      <textarea onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text" className='bg-light dark:bg-dark px-8 py-2' placeholder='Add Description'/>
    <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit  '>Update Tag</button>
    {error && <p className='text-red-500'>{error}</p>}
  </form>
  </>
  )
}

export default EditTagForm;
