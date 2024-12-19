'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import React from 'react';
import Hero from '@/components/Hero'
import Sponsor from '@/components/Sponsor'
import PopularService from '@/components/PopularService';
import OutstandingFeatures from '@/components/OutstandingFeatures';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';


const Home = () => {

  const {data: session, status: sessionStatus} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      router.push('/dashboard')
    }
  }, [sessionStatus, router])


  return (
    <div>
        <Hero />
        <Sponsor />
        <PopularService />
        <OutstandingFeatures />
        <Categories />
        <Footer />
    </div>
  )
}

export default Home