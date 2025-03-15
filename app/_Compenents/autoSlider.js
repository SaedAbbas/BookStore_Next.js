import Image from "next/image";
import React from "react";

const book1 = "/assets/book1.png";
const book2 = "/assets/book2.png";
const book3 = "/assets/book3.png";
const book4 = "/assets/book4.png";
const book5 = "/assets/book5.png";
const book6 = "/assets/book6.png";

const AutoSlider = () => {
  return (
    <div className="flex ml-4 space-x-4 mt-12 overflow-hidden animate-swipe">
      <article className="overflow-hidden flex flex-shrink-0 flex-col dark:shadow-gray-700/25">
        <Image
          alt=""
          width={195}
          height={195}
          src={book1}
          className="rounded-xl "
        />

        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          Atomic Habits
        </h3>
        <h2 className="text-gray-400">James Clear</h2>
      </article>
      <article className="overflow-hidden flex flex-shrink-0 flex-col dark:shadow-gray-700/25">
        <Image
          alt=""
          width={195}
          height={195}
          src={book2}
          className="rounded-xl "
        />

        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          Atomic Habits
        </h3>
        <h2 className="text-gray-400">James Clear</h2>
      </article>
      <article className="overflow-hidden flex flex-shrink-0 flex-col dark:shadow-gray-700/25">
        <Image
          alt=""
          width={195}
          height={195}
          src={book3}
          className="rounded-xl "
        />

        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          Atomic Habits
        </h3>
        <h2 className="text-gray-400">James Clear</h2>
      </article>
      <article className="overflow-hidden flex flex-shrink-0 flex-col dark:shadow-gray-700/25">
        <Image
          alt=""
          width={195}
          height={195}
          src={book4}
          className="rounded-xl "
        />

        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          Atomic Habits
        </h3>
        <h2 className="text-gray-400">James Clear</h2>
      </article>
      <article className="overflow-hidden flex flex-shrink-0 flex-col dark:shadow-gray-700/25">
        <Image
          alt=""
          width={195}
          height={195}
          src={book5}
          className="rounded-xl "
        />

        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          Atomic Habits
        </h3>
        <h2 className="text-gray-400">James Clear</h2>
      </article>
      <article className="overflow-hidden flex flex-shrink-0 flex-col dark:shadow-gray-700/25">
        <Image
          alt=""
          width={195}
          height={195}
          src={book6}
          className="rounded-xl "
        />

        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          Atomic Habits
        </h3>
        <h2 className="text-gray-400">James Clear</h2>
      </article>
    </div>
  );
};

export default AutoSlider;
