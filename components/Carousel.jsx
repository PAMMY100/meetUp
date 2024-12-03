"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const Carousel = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % items.length)
  }


  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
  }

  return (
    <div>
      <div>
        {items.map((item, index) => (
          <div 
            key={index}
            className={`flex-shrink-0 w-full transition-transform duration-500 transform ${
              index === currentIndex ? "translate-x-0" : "-translate-x-full"
            }`}
            >
              <div
                className="p-4 rounded-lg text-center"
                style={{ backgroundColor: item.bgColor }}
              >
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className='mx-auto'
                />
                <h2 className="mt-4 text-2xl font-semibold text-white">
                {item.title}</h2>
              </div>
          </div>
        ))}
      </div>
      {/* Navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel