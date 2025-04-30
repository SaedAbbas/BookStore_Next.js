"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [openItems, setOpenItems] = useState([]);

  const items = [
    {
      title: "What is Apple Books?",
      content:
        "Apple Books is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks and even get personalized recommendations. If you can’t find the app on your device, use the search function or look for Apple Books in the App Store.",
    },
    {
      title: "How much does Apple Books cost?",
      content:
        "The Apple Books app is free and there is no subscription. Audiobooks and ebooks are priced individually, and thousands of free audiobooks and ebooks are available. You can also sample audiobooks and ebooks for free while you browse.",
    },
    {
      title: "Can I play audiobooks on my devices?",
      content:
        "Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch, Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth speaker from your iPhone.",
    },
  ];

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 dark:text-white sm:text-5xl mb-12">
          Questions? Answers.
        </h2>

        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleItem(index)}
              className="w-full bg-white dark:bg-gray-800 text-left p-5 rounded-xl shadow-md dark:shadow-none transition-all duration-300 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.title}
              </span>
              <span className="text-teal-500 dark:text-teal-400 text-lg">
                {openItems.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out bg-gray-50 dark:bg-gray-700 px-5 rounded-b-xl text-gray-700 dark:text-gray-200 ${
                openItems.includes(index) ? "max-h-96 py-4" : "max-h-0 py-0"
              }`}
            >
              <p className="text-base leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
