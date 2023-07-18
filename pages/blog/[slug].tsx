import { useRouter } from 'next/router';
import Head from 'next/head';
import PortableText from "react-portable-text";
import NavBar from '../../components/NavBar';
import { client } from '../../client';
import imageUrlBuilder from '@sanity/image-url';
const Post = ({ blog, profile }) => {
  const router = useRouter();
  const builder = imageUrlBuilder(client);
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="//post" />
      <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <meta name="theme-color" content="#5540af" />
      <meta property="og:site_name" content="blog-sanity" />
      <link rel="canonical" href="//post" />
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
      <title>{blog.title}</title>
    </Head>
    <NavBar />
    <div>
      <div>
        <div className="container py-6 md:py-10">
          <div className="mx-auto max-w-4xl">
            <div className="">
              <h1
                className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                {blog.title}
              </h1>
              <div className="flex items-center pt-5 md:pt-10">
                <div className="pl-5">
                  <span className="block font-body text-xl font-bold text-grey-10">By : {blog.author.title}</span>
                  <span className="block font-body text-xl font-bold text-grey-10">Date : {blog.createdAt}</span>
                </div>
              </div>
            </div>
            <div className='group relative'>
              <div style={{ "backgroundImage": `url(${builder.image(blog.blogimage).blur(50).url() || './assets.NoImage.png'})` }}
                className=" h-52 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span 
                className=" text-gray-700 font-medium absolute rounded-full right-0 bottom-0 mr-1 mb-1 block bg-gray-100/50 bg-auto px-2 py-2 text-sm md:text-base cursor-pointer">{blog.metadesc}</span>
              </div>
            </div>

            <div className="prose max-w-none pt-8">
              <PortableText
                content={blog.content}
                projectId='process.env.NEXT_PUBLIC_SANITY_PROJECT_ID'
                dataset="production"
                serializers={{
                  h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                  li: ({ children }) => <li className="special-list-item">{children}</li>,
                }} />
            </div>
            <div className="mt-10 flex justify-between border-t border-lila py-12">
              <a href="/" className="flex items-center">
                <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                <span
                  className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Home</span>
              </a>
              <a href="/blogs" className="flex items-center">
                <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Blogs</span>
                <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
              </a>
            </div>
            <div
              className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
              <div className="w-3/4 text-lg font-extrabold sm:w-2/5 lg:w-1/4 xl:w-1/5">
                Aurthor
              </div>
              <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                {blog.author.title}
                </h3>
                <p
                  className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                  {blog.author.about}
                </p>
                <div className="flex items-center justify-center pt-5 md:justify-start">
                  <a href="/">
                    <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2023. All right reserved, blog-sanity.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="/">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog, profile
    }
  };
};