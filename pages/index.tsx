import React from 'react';
import NavBar from "../components/NavBar";
import Link from 'next/link';

const Index = ({ posts }) => {
  return (<>
    <NavBar />
    <div>
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Best blog around
              here <span className="text-primary dark:text-white">MY-BLOG.</span></h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores
              quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link href='/blogs' className='bg-violet-900/50 hover:bg-violet-900 font-bold py-2 px-4 rounded'> Start Reading
              </Link>
              <Link href='/about' className='bg-blue-100/50 hover:bg-blue-200/50 py-2 px-4 rounded-sm'>Learn More
              </Link>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Reliable information</h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="flex flex-wrap intro">
            <div className="image">
                <img src="../NoImage.png" alt="image"></img>
            </div>
            <div className="text-xlg w-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis omnis, fugit rem quasi ducimus!
            </div>
        </section>
    </div>
  </>
  );

};

export default Index;