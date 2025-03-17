"use client"
import React, { useState } from "react";

const Faq = () => {
  // حالة لتتبع جميع العناصر المفتوحة (مصفوفة)
  const [openItems, setOpenItems] = useState([]);

  // بيانات الأكورديون
  const items = [
    { title: "What is Apple Books?", content: "Apple Books is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks and even get personalized recommendations. If you can’t find the app on your device, use the search function or look for Apple Books in the App Store." },
    { title: "How much does Apple Books cost?", content: "The Apple Books app is free and there is no subscription. Audiobooks and ebooks are priced individually, and thousands of free audiobooks and ebooks are available. You can also sample audiobooks and ebooks for free while you browse." },
    { title: "Can I play audiobooks on my devices?", content: "Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch, Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth speaker from your iPhone." },
    { title: "What is Apple Books?", content: "Apple Books is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks and even get personalized recommendations. If you can’t find the app on your device, use the search function or look for Apple Books in the App Store." },
    { title: "How much does Apple Books cost?", content: "The Apple Books app is free and there is no subscription. Audiobooks and ebooks are priced individually, and thousands of free audiobooks and ebooks are available. You can also sample audiobooks and ebooks for free while you browse." },
    { title: "Can I play audiobooks on my devices?", content: "Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch, Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth speaker from your iPhone." },
  ];

  // دالة لتبديل حالة الفتح/الإغلاق لكل عنصر
  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      // إذا كان العنصر مفتوحًا، أغلقه (إزالته من المصفوفة)
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      // إذا كان مغلقًا، افتحه (أضفه إلى المصفوفة)
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-6/10 ">
      <h1 className="text-3xl text-center mt-10 mb-8 font-extrabold sm:text-5xl text-gray-800 dark:text-gray-100">
        Questions? Answers.
      </h1>
        {items.map((item, index) => (
          <div key={index} className="mb-2">
            {/* عنوان العنصر */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left p-4 text-xl bg-white rounded-lg shadow-md focus:outline-none flex justify-between items-center"
            >
              <span className="font-medium">{item.title}</span>
              <span>{openItems.includes(index) ? "−" : "+"}</span>
            </button>
            {/* المحتوى */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? "max-h-40 p-4" : "max-h-0"
              } bg-gray-50 rounded-b-lg`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
