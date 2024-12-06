"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { nextArrow } from '@/app/assets/icon';

const Carousel = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % items.length)
  }


  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className='p-8 relative'>
      <div className='flex overflow-x-auto gap-6 px-8 py-4'>
        {items.map((item, index) => (
          <div 
            key={index}
            className={`relative
             rounded-lg overflow-hidden snap-center w-[280px] h-[323px] bg-gradient-to-b from-[#92A3FF] to-[#7C91FF]`}
            >
              <div
                // className={`p-4 rounded-lg text-center w-[280px] h-[323px] bg-gradient-to-b from-${item.from} to-${item.to}`}
                className="relative w-full h-full"
                
              >
                <Image 
                  src={item.image}
                  alt={item.title}
                  className='opacity-55 object-cover w-full h-full'
                />
                <div className='flex flex-col justify-center align-middle items-center absolute bottom-[40%] left-[30%] text-white text-lg font-semibold'>
                  <Image src={item.icon} alt={item.title} />
                  <h2 className="mt-4 text-xl font-semibold text-white">
                {item.title}</h2>
                </div>
              </div>
          </div>
        ))}
      </div>
      {/* Navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-9 top-1/2 transform -translate-y-1/3 bg-white py-2 px-4 rounded-[50%]"
      >
        <Image src={nextArrow} className='rotate-180' alt='direction arrow' />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-9 top-1/2 transform -translate-y-1/2 bg-white py-2 px-4 rounded-[50%]"
      >
        <Image src={nextArrow} alt='direction arrow' />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-6 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel