import EditBlogForm from "@/src/components/Dashboard/EditBlogForm";



const getBlogBySlug = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3003/api/blogs/${slug}`, {cache: "no-store",})

    if(!res.ok) {
      throw new Error("Failed to fetch blog")
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export default  async function  EditBlog({params}) {
  const {slug} = params;
  const {blog} = await getBlogBySlug(slug);
  const {title, description, content, publishedAt, image, tags, author} = blog;
  return (
    <>
      <h1 className="p-8">Dashboard → Edit Blog → {slug}</h1>
      <EditBlogForm
      slug={slug}
      title={title}
      description={description}
      content={content}
      publishedAt={publishedAt}
      image={image}
      tags={tags}
      author={author}
      />
    </>
  )
}

