"use client";
import Link from 'next/link';
import { useState } from 'react';

function Search({ blogs }) {
  const [value, setValue] = useState("");
  const result = blogs.filter((item) => item.title && item.title.toLowerCase().includes(value.toLowerCase()));

  return (
    <>
      <input 
        onChange={(e) => setValue(e.target.value)} 
        value={value} 
        className="w-full h-12 rounded-full border-2 border-solid border-dark dark:border-light bg-light text-dark dark:bg-dark dark:text-light" 
        placeholder="Search" 
      />
      <div className=''>
        {value.length > 0 && result.map((item) => (
            <Link href={`/blogs/${item.slug}`} key={item.id}> 
          <div  className="p-2 px-4 py-2 rounded-lg border-2 border-solid border-dark dark:border-light bg-light text-dark dark:bg-dark dark:text-light">
            {item.title}
          </div>
            </Link>
        ))}
      </div>
    </>
  );
}

export default Search;
