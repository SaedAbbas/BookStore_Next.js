'use client'

import React from 'react'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const MobileImages = [
  { src: '/assets/phone1.png', title: 'Audio Book 01', speed: 30 },
  { src: '/assets/phone2.png', title: 'Audio Book 02', speed: 15 },
  { src: '/assets/phone3.png', title: 'Audio Book 03', speed: 30 },
  { src: '/assets/phone4.png', title: 'Audio Book 04', speed: 15 },
  { src: '/assets/phone5.png', title: 'Audio Book 05', speed: 30 },
]

const MobileGallery = () => {
  return (
    <ParallaxProvider>
      <div className="flex flex-wrap gap-6 justify-center items-center overflow-hidden h-auto max-w-[1600px] mx-auto px-4 py-10">
        {MobileImages.map(({ src, title, speed }, index) => (
          <Parallax key={index} speed={speed}>
            <Image
              src={src}
              alt={title}
              width={278}
              height={576}
              className="rounded-[40px] w-[160px] sm:w-[200px] md:w-[220px] lg:w-[250px] xl:w-[278px] h-auto transition-all duration-300"
            />
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  )
}

export default MobileGallery
