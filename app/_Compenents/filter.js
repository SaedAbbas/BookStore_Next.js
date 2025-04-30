"use client";
import React, { useState } from "react";

const Filter = () => {
  const [active, setActive] = useState(1);

  const filters = [
    "Bestselling Audiobooks",
    "New & Trending Ebooks",
    "Fan-Favorite Audiobooks",
  ];

  return (
    <div className="text-center max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-800 dark:text-gray-500">
        A library you’ll want
        <br />
        <strong className="font-extrabold mt-2 text-teal-500 dark:text-teal-400 sm:block">
          to get lost in.
        </strong>
      </h1>

      <p className="mt-4 sm:text-xl text-gray-600 dark:text-gray-500">
        Browse our global catalog featuring millions of bestsellers, new
        releases, and classics — with new audiobooks and ebooks added every
        week.
      </p>

      <ul className="flex justify-center items-center flex-wrap mt-10 border-2 border-teal-700 dark:bg-gray-800 p-2 rounded-2xl sm:rounded-full gap-3 max-sm:flex-col">
        {filters.map((filter, index) => (
          <li
            key={index}
            onClick={() => setActive(index)}
            className={`px-4 py-2 font-semibold rounded-full cursor-pointer transition duration-200 ${
              active === index
                ? "bg-black text-white dark:bg-teal-500 dark:text-white"
                : "text-black dark:text-white hover:bg-teal-500 hover:text-white"
            }`}
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
