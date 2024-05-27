import React from "react";
import Category from "./Category";
import getTags from "@/src/libs/getTags";

const Categories = async () => {
  const {tags} = await getTags()
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {tags.map((cat) => (
        <Category
          key={cat.slug} // Assuming category names are unique identifiers
          link={`http://localhost:3003/categories/${slug}`}
          name={cat.name}
          active={currentSlug === cat.slug}
        />
      ))}
    </div>
  );
};

export default Categories;
