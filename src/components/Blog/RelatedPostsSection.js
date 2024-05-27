import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";

const RelatedPostsSection = ({ relatedPosts }) => {
  return (
    <section className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h2 className="mt-6 text-center underline font-semibold text-2xl md:text-4xl lg:text-5xl">Related Posts</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {relatedPosts.map((post, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            
          </article>
        ))}
      </div>
      {/* Include the ad container provided by the ad network */}
    </section>
  );
};

export default RelatedPostsSection;
