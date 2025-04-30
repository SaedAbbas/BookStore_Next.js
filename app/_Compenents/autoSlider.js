import Image from "next/image";
import React from "react";

const AutoSlider = ({ images, duration }) => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div
        className="flex ml-4 space-x-4 mt-12 animate-swipe hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...images, ...images, ...images].map(({ src, title, author }, index) => (
          <article
            key={index}
            className="cursor-pointer flex flex-shrink-0 flex-col dark:shadow-gray-700/25 min-w-[180px] sm:min-w-[200px] md:min-w-[240px]"
          >
            <Image
              alt=""
              width={240}
              height={240}
              src={src}
              className="rounded-xl object-cover w-full h-auto"
            />

            <h3 className="mt-0.5 text-base sm:text-lg text-gray-900 dark:text-white">
              {title}
            </h3>
            <h2 className="text-sm text-gray-400">{author}</h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
