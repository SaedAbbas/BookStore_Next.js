import React from 'react'

const Filter = () => {
  return (
    <div className='text-center  max-w-90/100 mx-auto'>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-800 dark:text-gray-100">
          A library you’ll want<br/>
            <strong className="font-extrabold mt-2 text-teal-500 dark:text-teal-400 sm:block">
            to get lost in.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-600 dark:text-gray-200">
          Browse our global catalog featuring millions of bestsellers, new releases, and classics — with new audiobooks and ebooks added every week.          </p>

        <ul className='flex justify-center rounded-2xl sm:rounded-full bg-gray-200 w-fit mx-auto p-2 max-sm:flex-col max-sm:space-y-5 max-sm:text-center dark:text-white space-x-4 mt-8'>
            <li className='bg-black  text-white px-3 font-semibold py-1 transition duration-150 ease-in-out max-sm:w-full   cursor-pointer rounded-full'>Bestselling Audiobooks</li>
            <li className='hover:bg-black text-black hover:text-white px-3 font-semibold py-1 transition duration-150 ease-in-out max-sm:w-full   cursor-pointer rounded-full'>New & Trending Ebooks</li>
            <li className='hover:bg-black text-black hover:text-white px-3 font-semibold py-1 transition duration-150 ease-in-out max-sm:w-full   cursor-pointer rounded-full'>Fan-Favorite Audiobooks</li>
        </ul>
   
    </div>
  )
}

export default Filter
