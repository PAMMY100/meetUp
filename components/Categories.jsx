import React from 'react'
import Service from './Service'
import freelance from '@/public/images/freelanceService.png';
import Image from 'next/image';
import { services } from "@/utils/services"

const Categories = () => {
  return (
    <div className='bg-[#D9D9D9] p-10'>
      <h1 className='font-poppins font-semibold text-3xl'>Here are Something You'd Need</h1>
      <div>
        <Service services={services} />
      </div>
      <div className='h-[410px] w-full bg-[#00ADB5] flex justify-between align-middle p-8'>
        <div className='flex flex-col justify-center align-middle gap-10'>
          <h1 className='font-serif text-4xl font-bold'>Freelance Service At Your</h1>
          <p className='font-beauRivage text-4xl'>Fingertips!</p>
        </div>
        <Image src={freelance} alt="a man with laptop"/>
      </div>
    </div>
  )
}

export default Categories