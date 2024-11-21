'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import React from 'react'

const Home = () => {
  const {data: session, status: sessionStatus} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      router.push('/dashboard')
    }
  }, [sessionStatus, router])

  return (
    <div>Home</div>
  )
}

export default Home