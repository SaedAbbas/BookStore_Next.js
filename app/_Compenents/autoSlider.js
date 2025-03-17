import Image from "next/image";
import React from "react";

const AutoSlider = ({images,duration}) => {
  return (

         <div className="flex ml-4 space-x-4 mt-12 animate-swipe hover:[animation-play-state:paused]" style={{animationDuration:`${duration}s`}}>
        {
            [...images,...images,...images].map(({src,title,author},index) => (
                <article key={index} className="cursor-pointer flex flex-shrink-0 flex-col dark:shadow-gray-700/25">
                    <Image
                        alt=""
                        width={195}
                        height={195}
                        src={src}
                        className="rounded-xl "
                    />

                    <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                    {title}
                    </h3>
                    <h2 className="text-gray-400">{author}</h2>
                </article>
            ))
        }

    </div>

  );
};

export default AutoSlider;
