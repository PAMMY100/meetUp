import Image from 'next/image'
import React from 'react'
import { analysisArrow, direction } from '@/app/assets/icon'
import { carouselItems } from '@/utils/carouselItems'
import Carousel from './Carousel'

const PopularService = () => {

  return (
    <div className='mt-2'>
      <div>
        <div>
          <h1>Most Popular Service</h1>
          <Image src={analysisArrow} alt='analysis arrow'/>
        </div>
        <div>
          <button>View All</button>
          <Image src={direction} alt='direction arrow'/>
        </div>
      </div>
      <Carousel items={carouselItems} />
    </div>
  )
}

export default PopularService