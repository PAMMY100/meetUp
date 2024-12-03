import React from 'react'
import Image from 'next/image'
import { microsoft, meta, ggLogo, netflix } from '@/app/assets/icon'

const Sponsor = () => {

  return (
    <div className='h-[129px] font-poppins flex gap-2 bg-[#d9d9d9] mx-auto justify-center align-middle p-4'>
      <h3 className='font-bold text-xl p-9'>Trusted by:</h3>
      <div className='flex gap-2'>
        <div className='flex justify-center align-middle '>
          <Image src={microsoft} alt='microsoft-icon' />
          <p className='text-center mx-2 py-10'>Microsoft</p>
        </div>
        <div className='flex justify-center align-middle '>
          <Image src={meta} alt='meta-icon'/>
          <p className='text-center mx-2 py-10'>Meta</p>
        </div>
        <div className='flex justify-center align-middle '>
          <Image src={ggLogo} alt='google'/>
          <p className='text-center mx-2 py-10'>Google</p>
        </div>
        <div className='flex justify-center align-middle '>
          <Image src={netflix} alt='netflix'/>
          <p className='text-center mx-2 py-9'>Netflix</p>
        </div>
      </div>
    </div>
  )

}

export default Sponsor