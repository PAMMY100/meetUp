"use client"
import React from 'react'
import { signOut } from 'next-auth/react'
const page = () => {


  // const handleSignout = () => {
  //   signOut({callbackUrl: '/login'})
  // }

  return (
    <div>
      <button className='bg-red-500 text-white px-4 py-2' onClick={() => signOut()}>signOut</button>
    </div>
  )
}

export default page