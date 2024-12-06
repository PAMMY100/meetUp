import Image from 'next/image'
import React from 'react'
import { analysisArrow, direction } from '@/app/assets/icon'
import Carousel from './Carousel'
import { carouselItems } from '@/utils/carouselItems'


const PopularService = () => {

  return (
    <div className='bg-[#301454] text-white font-poppins p-4 h-[500px]'>
      <div className='flex justify-between'>
        <div className='flex justify-center gap-3 align-middle items-center ml-10'>
          <h1 className='text-4xl font-bold'>Most Popular Service</h1>
          <Image src={analysisArrow} alt='analysis arrow'/>
        </div>
        <div className='flex gap-4 justify-center items-center'>
          <button>View All</button>
          <Image src={direction} alt='direction arrow'/>
        </div>
      </div>
      <Carousel items={carouselItems} />
    </div>
  )
}

export default PopularService