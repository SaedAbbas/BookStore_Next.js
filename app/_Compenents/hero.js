import React from 'react';
import { FaBookOpen } from "react-icons/fa6";


const Hero = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
            <FaBookOpen className='mx-auto text-8xl bg-teal-500 dark:bg-transparent dark:border-4 border-teal-500 mb-3 px-4 py-3 text-white rounded-3xl'/>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-800 dark:text-gray-100">
          Read, listen, discover.
            <strong className="font-extrabold mt-2 text-teal-500 dark:text-teal-400 sm:block">
                All in one app.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-600 dark:text-gray-200">
          Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks. Browse curated collections and get personalized recommendations. Share your books with up to five family members.* All with no subscription or monthly commitment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm bg-teal-500 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-teal-600 dark:hover:bg-teal-400 focus:ring-3 focus:ring-teal-300 dark:focus:ring-teal-600 focus:outline-none sm:w-auto transition-colors duration-200"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full border  rounded-sm px-12 py-3 text-sm font-medium text-teal-500 hover:bg-teal-400 dark:text-teal-400 shadow-sm hover:text-white  focus:ring-3 focus:ring-teal-300 dark:focus:ring-teal-600 focus:outline-none sm:w-auto transition-colors duration-200"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;