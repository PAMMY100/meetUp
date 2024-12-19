import React from 'react'
import { iconFb, iconLinkdin, iconTwitter } from '@/app/assets/icon'
import Image from 'next/image'

const categories = [
  "All Courses",
  "Marketing",
  "Graphic Design",
  "Web",
  "Writing",
  "Business",
  "Video & Photography",
  "Programs"
]

const about = [
  "Our Instructors",
  "Our Courses",
  "Terms of Service",
  "Reach Policy",
]

const support = [
  "FAQ",
  "Contact Support",
  "Forum"
]


const Footer = () => {
  return (
    <div className='bg-[#F7F7F7] h-[446px] w-full flex justify-between align-middle p-[44px] font-poppins'>
      <div>
        <h3 className='text-[#959595]'>Categories</h3>
        {categories.map((categories, index) => <p key={index} className='py-3'>{categories}</p>)}
      </div>
      <div>
        <h3 className='text-[#959595]'>About</h3>
        {about.map((about, index) =><p key={index} className='py-3'>{about}</p>)}
      </div>
      <div>
        <h3 className='text-[#959595]'>Support</h3>
        {support.map((support, index) => <p key={index} className='py-3'>{support}</p>)}
      </div>
      <div>
        <h3 className='text-[#959595] mb-3'>Share</h3>
        <div className='flex gap-2 mb-3'>
          <Image src={iconFb} className='h-[30px] w-[30px]' alt='facebook Icon'/>
          <Image src={iconLinkdin} className='h-[30px] w-[30px]' alt='linkdin Icon'/>
          <Image src={iconTwitter} className='h-[30px] w-[30px]' alt='twitter ion'/>
        </div>
        <p className='text-lg mb-3'>Suggest a course</p>
        <p className='text-lg mb-3'>Become an affiliate</p>
      </div>
    </div>
  )
}

export default Footer