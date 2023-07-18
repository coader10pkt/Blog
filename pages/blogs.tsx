import React from 'react';
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import { client } from '../client';
const Blogs = ({ blogs, profile }) => {
  const builder = imageUrlBuilder(client);
  useEffect(() => { }, []);
  return (<>
    <div>
      <div className="bg-grey-50 my-12" id="blog">
        <div className="container mx-auto py-4 md:py-20">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Blog Sanity</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Read all the blogs hereat our blogs page.</p>
          </div>
          <div className="mx-auto grid w-full grid-cols-1 gap-3 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {blogs.map((item) => {
              return <>
                <article>
                  <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
                    <div>
                      <div style={{ "backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/NoImage.png'})` }}
                        className="group relative h-52 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                        <span
                          className="absolute inset-0 block rounded-sm bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat y-10 "></span>
                        <span
                          className=" text-gray-900 font-medium title-font absolute left-0 bottom-0 mr-4 mb-16 block bg-white rounded-sm px-6 py-2 text-center font-body text-sm uppercase md:text-base cursor-pointer">{item.title}
                        </span>
                        <span className=" text-gray-700 font-medium absolute rounded-full right-0 bottom-0 mr-1 mb-1 block bg-gray-100/50 bg-auto px-2 py-2 text-sm md:text-base cursor-pointer">{item.metadesc}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              </>;
            })}
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blogs, profile
    }
  };
}