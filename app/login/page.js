'use client'
import React from 'react'
import { Input, Card } from '@material-tailwind/react'
import Link from 'next/link'
import { useState } from 'react'
import bgImage from '@/public/images/bgimage.svg'
import Image from 'next/image'
import { letter, password, fbLogo, ggLogo } from '../assets/icon'

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target; 

    setUserData(prev => ({
      ...prev,
      [name] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='flex '>
        <div style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '832px',
        }}>
          <div className='text-white flex flex-col justify-between h-full p-5'>
            <h3 className='text-2xl font-bold'>ReacH</h3>
            <div className='font-dmSans flex flex-col align-middle mx-auto gap-4 items-center text-center w-[500px] h-[264px]'>
              <h1 className='text-5xl font-bold'>Hello! Welcome to ReacH.</h1>
              <p className='text-2xl'>Don't Have an account? Sign Up</p>
              <Link className='text-2xl font-bold bg-transparent text-center p-2 border-2 border-[#501794] ring-[#3E70A1] hover:bg-gradient-to-r hover:from-[#501794] hover:to-[#8344ce] hover:border-none h transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer rounded w-[200px] h-[52px]' href='/register'>Sign Up</Link>
            </div>
            <div className='font-poppins'>
              <h1 className='text-5xl font-bold mb-2'>LOGIN UP IN TO YOUR</h1>
              <h1 className='text-5xl font-bold text-gradient bg-gradient-to-r from-[#7234ba] to-[#8344ce] mb-2'>ADVENTURE!</h1>
            </div>
          </div>
        </div>
        <div className='w-[500px] mx-auto h-screen p-4 text-white bg-[#180434] font-poppins'>
        <Card color="transparent" shadow={false}>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-white'>
            <div>
              <h2 className='text-3xl font-bold mb-5'> Hello Again!</h2>
              <p>Welcome Back</p>
            </div>

            <div>
              <label>Email</label>
              <div className='flex gap-2 items-center mt-2 border border-[#050209] rounded-md w-full max-w-sm mx-auto'>
                <Image src={letter} alt='email icon'/>
                <Input 
                  name='email' 
                  id='email' 
                  type='email'
                  placeholder='email@example.com'
                  value={userData.email} 
                  onChange={handleChange} 
                  className='w-full px-4 py-2 bg-[#261046] text-[#A4A4A4] outline-none border-none rounded-lg'
                  />
              </div>
              
            </div>

            <div>
              <label>Password</label>
              <div className='flex gap-2 items-center mt-2 border border-[#050209] rounded-md w-full max-w-sm mx-auto'>
                <Image src={password} alt='password icon'/>
                <Input 
                  name='password' 
                  id='password' 
                  type='password'
                  placeholder='password'
                  value={userData.password} 
                  onChange={handleChange} 
                  className='w-full px-4 py-2 bg-[#261046] text-[#A4A4A4] outline-none border-none rounded-lg'
                  />
              </div>
            </div>
              <button type='submit' className='mb-3 custom-button text-[43px]'>Login</button>
          </form>
          <hr />
          <div className='mt-3 flex flex-col gap-2'>
            <p>Or continue with</p>
            <div className='flex gap-2'>
              <button className='bg-[#3B2063] text-white flex gap-2 w-[200px] h-[45px] items-center  px-4 rounded-lg'><Image className='ml-7' src={ggLogo} alt='google Icon'/> Google</button>
              <button className='bg-[#3B2063] text-white flex gap-2 w-[200px] items-center h-[45px] p-2 rounded-lg'><Image className='ml-7' src={fbLogo} alt='facebook Icon'/> Facebook</button>
            </div>
            <p className='text-xs'>By registering you with our <span className='text-[#9D5CE9]'>Terms and Conditions</span></p>
          </div>
        </Card>
      </div>
    </div>
    
  )
}

export default Login