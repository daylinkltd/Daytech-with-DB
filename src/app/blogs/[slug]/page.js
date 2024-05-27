import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderHTMLWithTailwind from "@/src/components/Blog/RenderMdx";
import RenderMdx from "@/src/components/Blog/RenderMdx";

import Tag from "@/src/components/Elements/Tag";
import getBlog from "@/src/libs/getBlog";
import siteMetadata from "@/src/utils/siteMetaData";
import Image from "next/image";

const blog = await getBlog;

export async function generateMetadata({params}) {
  const {slug} = params;
  const blog = await getBlog(slug);

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: blog.publishedAt,
      images: blog.image?.[0], // Access first image if it's an array
      authors: blog.author,
    },
    twitter: {
      card: "summary_large_image",
      site: siteMetadata.siteUrl,
      title: blog.title,
      description: blog.description,
      images: blog.image?.[0], // Access first image if it's an array
    },
  }
}


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": blog?.title || "Daytech", // Ensure blog and blog.title are defined
  "description": blog?.description || "Default Description", // Ensure blog and blog.description are defined
  "image": blog?.image?.map(imageUrl => new URL(imageUrl, siteMetadata.siteUrl).toString()) || [], // Handle image array and construct full URLs
  "datePublished": blog?.publishedAt ? new Date(blog.publishedAt).toISOString() : null, // Ensure blog and blog.publishedAt are defined and convert to valid ISO string
  "dateModified": blog?.updatedAt ? new Date(blog.updatedAt).toISOString() : blog?.publishedAt ? new Date(blog.publishedAt).toISOString() : null, // Ensure blog is defined and either blog.updatedAt or blog.publishedAt is defined, and convert to valid ISO string
  "author": [{
    "@type": "Company",
    "name": blog?.author ? [blog.author] : siteMetadata.author,
    "url": siteMetadata.twitter,
  }]
};

export default async function BlogPage({params}) {
  const {slug} = params;
  const {blog, error} = await getBlog(slug); // Destructure potential error
  const tagUrl = `http://localhost:3003/categories/${slug}`

  if (error) {
    // Handle error, display message or redirect
    return <div>Error fetching blog content</div>;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
      <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <Tag
              name={(blog?.tags ?? [])[0]} // Ensure blog.tags is defined before accessing its elements
              link={(tagUrl)} // Provide a default link if tags are undefined or empty
              className="px-6 text-sm py-2"
            />

            {blog?.title && (
              <h1
                className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
              >
                {blog.title}
              </h1>
            )}

          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          {blog?.image && (
            <Image
              src={blog.image}
              placeholder="blur"
              blurDataURL="data:image/png;base64,..."  // Replace with your generated blurDataURL
              alt={blog.title}
              width={blog.image.width || 300}
              height={blog.image.height || 300}
              className="aspect-square w-full h-full object-cover object-center"
              priority
              sizes="100vw"
            />
          )}
      </div>
      <BlogDetails blog={blog} slug={params.slug} />
      <div className="grid grid-cols-12 gap-y-8 md:gap-2 lg:gap-4 sxl:gap-8 mt-8 px-5 md:px-10 ">
          <div className="col-span-12 md:col-span-12 lg:col-span-3 ">

            <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-20 w-auto max-h-[30vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              {blog?.toc && (
                <ul className="mt-4 font-in text-base">
                  {blog.toc.map((heading) => {
                    return (
                      <li key={`#${heading.slug}`} className="py-1">
                        <a
                          href={`#${heading.slug}`}
                          data-level={heading.level}
                          className="data-[level=two]:pl-0  data-[level=two]:pt-2
                        data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40
                        data-[level=three]:pl-4
                        sm:data-[level=three]:pl-6
                        flex items-center justify-start"
                        >
                          {heading.level === "three" ? (
                            <span className="flex w-1 h-1 rounded-full bg-dark dark:bg-light mr-2">
                              &nbsp;
                            </span>
                          ) : null}
                          <span className="hover:underline">{heading.text}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </details>
            <div className="sticky pt-4 top-96 w-auto max-h-[100vh] overflow-hidden overflow-y-auto">

            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-6 ">
            <RenderHTMLWithTailwind content={blog.content} />
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-3 p-4 sticky top-20 w-auto max-h-[130vh] overflow-hidden overflow-y-auto">
            {/* <ads id="container-5af06826decfa4976df535908ca17636"></ads> */}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-8 md:gap-2 lg:gap-4 sxl:gap-8 mt-8 px-5 md:px-10 ">
          <div className="col-span-12 md:col-span-12 lg:col-span-3">
            {/* <ads dangerouslySetInnerHTML={{
                __html: `
                <script type="text/javascript">
                atOptions = {
                  'key' : 'faf4d67a8231258d849699936d907a01',
                  'format' : 'iframe',
                  'height' : 250,
                  'width' : 300,
                  'params' : {}
                };
                document.write('<scr' + 'ipt type="text/javascript" src="//consolationgratitudeunwise.com/faf4d67a8231258d849699936d907a01/invoke.js"></scr' + 'ipt>');
              </script>
              `
              }} /> */}
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-3">

          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-3">

          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-3">

          </div>
        </div>
        {/* <RelatedPostsSection relatedPosts={relatedPosts} /> */}
    </article>
    </>
  )
}
