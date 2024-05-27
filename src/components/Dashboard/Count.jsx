"use client"

import { useEffect, useState } from "react";

const Count = ({ title, endpoint }) => {
  const [count, setCount] = useState("0"); // Use null as initial state

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        // Check if data is an object with a "blogs" property
        if (typeof data === 'object' && data.blogs !== undefined) {
          setCount(data.blogs.length);
          return;
        }
        if (typeof data === 'object' && data.tags !== undefined) {
          setCount(data.tags.length);
          return;
        }

        // Handle unexpected data structure (optional)
        console.error("Unexpected data structure for endpoint:", endpoint);
      } catch (error) {
        console.error("Error fetching count for endpoint:", endpoint, error);
      }
    };

    fetchCount(); // Call fetchCount on initial render

    // Ensure cleanup function for potential side effects
    return () => {
      // Add any cleanup logic here (e.g., clearing timers)
    };
  }, [endpoint]); // Run effect whenever endpoint changes

  return (
    <div className="border border-slate-500  bg-white dark:bg-dark text-black dark:text-white rounded-lg p-10  px-20">
      <p className="text-center text-5xl pb-2">{count}</p>
      <h3 className="font-extrabold">{title}</h3>
    </div>
  );
};

export default Count;
