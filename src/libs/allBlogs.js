const allBlogs = async () => {
  try {
    const res = await fetch(`http://localhost:3003/api/blogs`, {cache: "no-store"});

    if(!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    // Handle error, potentially return a default value
  }
};


export default allBlogs;
