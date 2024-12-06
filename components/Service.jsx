'use client'

import { services } from "@/utils/services"
import Image from 'next/image';

const Service = () => {

  return (
    <div className='m-3'>
      <div className='grid grid-cols-4'>{
        services.map((item, index) => {
          <div key={index}
            className='w-[292px] h-[124px] rounded-2xl'
          >
            <Image 
              src={item.image} 
              alt={item.title}
              className='w-full h-full'
              />
            <p>{item.title}</p>
          </div>
        })
        }</div>
    </div>
  )
}

export default Service