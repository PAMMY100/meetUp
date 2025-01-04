import Image from 'next/image'
import React from 'react'
import { searchIcon, notificationIcon, favIcon, messageIcon,Order, buyerIcon } from '@/app/assets/icon'

const Header = () => {
  return (
    <>
      <div className=" p-6 w-[80%] mx-auto h-[112px] bg-[#160430] font-poppins flex justify-between gap-3 items-center text-white">
        <h1 className='font-beauRivage'>Reach</h1>
        <div>
          <input
            type='text' 
            placeholder="Search For Freelancers or Services"
            className=""
          />
          <button><Image src={searchIcon} alt='search Icon'/></button>
        </div>
        <div className='flex gap-2'>
          <Image src={notificationIcon} alt='notification Icon'/>
          <Image src={favIcon} alt='favorite Icon'/>
          <Image src={messageIcon} alt='message Icon'/>
        </div>
        <div className='flex gap-3 items-center'>
          <button className='flex gap-2 border'><Image src={Order} alt='order icon'/> Order</button>
          <button className='flex gap-2 border'><Image src={buyerIcon} alt='Buyer icon'/>Buyer</button>
        </div>
      </div>
    </>
  )
}

export default Header