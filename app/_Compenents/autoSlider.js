import Image from "next/image";
import React from "react";

const Bestselling = [
    {src : '/assets/book1.png' , title : 'Nuclear War' ,author:'Rebecca Yarros'},
    {src : '/assets/book2.png' , title : 'Convication' ,author:'Prince Harry'},
    {src : '/assets/book3.png' , title : 'Hillbilly Elegy' ,author:'Jennette McCurdy'},
    {src : '/assets/book4.png' , title : 'Harry Poter' ,author:'Matthew Perry'},
    {src : '/assets/book5.png' , title : 'Irome Flame' ,author:'Britney Spears'},
    {src : '/assets/book6.png' , title : 'Audio Book 05' ,author:'Colleen Hoover'},
]

const AutoSlider = () => {
  return (
    <div className="flex ml-4 space-x-4 mt-12 overflow-hidden animate-swipe">
        {
            Bestselling.map(({src,title,author},index) => (
                <article key={index} className="overflow-hidden cursor-pointer flex flex-shrink-0 flex-col dark:shadow-gray-700/25">
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
