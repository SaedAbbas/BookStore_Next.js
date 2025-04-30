'use client'

import React from 'react'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'


const MobileImages = [
    {src : '/assets/phone1.png' , title : 'Audio Book 01' , speed:30},
    {src : '/assets/phone2.png' , title : 'Audio Book 02' , speed:15},
    {src : '/assets/phone3.png' , title : 'Audio Book 03' , speed:30},
    {src : '/assets/phone4.png' , title : 'Audio Book 04' , speed:15},
    {src : '/assets/phone5.png' , title : 'Audio Book 05' , speed:30},
]

const MobileGallery  = () => {
  return (
    <ParallaxProvider>
        <div className='flex gap-10 flex-wrap mx-auto justify-center align-middle overflow-hidden h-[38rem] max-w-[1600px]'>
            {MobileImages.map(({src,title,speed},index) => (
               <Parallax key={index} speed={speed}> <Image  src={src} alt={title} width={278} height={576} className='rounded-[50px]' /> 
               </Parallax>
            ))}
        
        </div>
    </ParallaxProvider>
  )
}

export default MobileGallery 
