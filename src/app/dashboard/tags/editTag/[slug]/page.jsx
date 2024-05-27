import EditTagForm from "@/src/components/Dashboard/EditTagForm";



const getTagBySlug = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3003/api/tags/${slug}`, {cache: "no-store",})

    if(!res.ok) {
      throw new Error("Failed to fetch tag")
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export default  async function  EditTag({params}) {
  const {slug} = params;
  const {tag} = await getTagBySlug(slug);
  const {name, description} = tag;
  return (
    <>
      <h1 className="p-8">Dashboard → Edit Tag → {slug}</h1>
      <EditTagForm
      slug={slug}
      name={name}
      description={description}
      />
    </>
  )
}

