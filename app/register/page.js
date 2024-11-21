'use client'
import React from 'react'
import { useState } from 'react'
import { Input, Card } from '@material-tailwind/react'
import Link from 'next/link'
import Image from 'next/image'
import uName from '@/public/icons/name.svg'
import letter from '@/public/icons/Letter.svg';
import password from '@/public/icons/password.svg';
import bgImage from '@/public/images/bgimage.svg';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
   const {name, value} = e.target;
   setFormData(prev => ({
    ...prev,
    [name]: value
   }))
  }

  const handleSubmit = (e) => {

  }

  return (
    <div className='flex flex-row font-poppins'>
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
            <p className='text-2xl'>Already Have an account? Login Here</p>
            <Link className='text-2xl font-bold bg-transparent text-center p-2 border-2 border-[#501794] ring-[#3E70A1] hover:bg-gradient-to-r hover:from-[#501794] hover:to-[#8344ce] hover:border-none h transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer rounded w-[200px] h-[52px]' href='/login'>Login In</Link>
          </div>
          <div className='font-poppins'>
            <h1 className='text-5xl font-bold mb-2'>SIGN UP IN TO YOUR</h1>
             <h1 className='text-5xl font-bold text-gradient bg-gradient-to-r from-[#7234ba] to-[#8344ce] mb-2'>ADVENTURE!</h1>
          </div>
        </div>
      </div>
      <div className='w-[500px] mx-auto h-full py-3.5 px-6 gap-2 bg-[#180434] text-white font-poppins'>
        <Card color="transparent" shadow={false}>
          <h2 className='text-white text-[57.71px] font-bold mb-5'>SIGN UP </h2>
          <form className='flex flex-col  text-[#A4A4A4] gap-4' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username' className=''>Username</label>
                <div className='flex gap-2 items-center mt-2 border border-[#050209] rounded-md w-full max-w-sm mx-auto'>
                  <Image src={uName} alt='username Icon' />
                  <Input 
                    name='username' 
                    id='username' 
                    type='text' 
                    className='w-full px-4 py-2 bg-[#261046] text-[#A4A4A4] outline-none border-none rounded-lg'
                    placeholder='Username'
                    onChange={handleChange} 
                    value={formData.username}
                    />
                </div>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <div className='flex gap-2 items-center mt-2 border border-[#050209] rounded-md w-full max-w-sm mx-auto'>
                  <Image src={letter} alt='email Icon' />
                  <Input 
                    name='email' 
                    id='email' 
                    type='email' 
                    className='w-full px-4 py-2 bg-[#261046] text-[#A4A4A4] outline-none border-none rounded-lg'
                    placeholder='email@example.com'
                    onChange={handleChange} 
                    value={formData.email}
                    />
                </div>
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <div className='flex gap-2 items-center mt-2 border border-[#050209] rounded-md w-full max-w-sm mx-auto'>
                  <Image src={password} alt='password Icon' />
                  <Input 
                    name='password' 
                    id='password' type='password' onChange={handleChange} 
                    value={formData.password}
                    placeholder='Password'
                    className='w-full px-4 py-2 bg-[#261046] text-[#A4A4A4] outline-none border-none rounded-lg'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <div className='flex gap-2 items-center mt-2 border border-[#050209] rounded-md w-full max-w-sm mx-auto'>
                  <Image src={password} alt='password Icon' />
                  <Input 
                    name='confirmPassword' 
                    id='confirmPassword' 
                    type='password' 
                    onChange={handleChange} 
                    value={formData.confirmPassword}
                    placeholder='confirm password'
                    className='w-full px-4 py-2 bg-[#261046] text-[#A4A4A4] outline-none border-none rounded-lg'
                  />
                </div>
              </div>
              <button type='submit' className='mb-3 custom-button text-[43px]'>Signup</button>
              {/* <span className='text-white'>
                    {""}
                    Already have an account? {""}
                    <Link className="text-center text-blue-500 hover:underline mt-2" href="/login">Login</Link>
                  </span> */}
            </form>
        </Card>
      </div>
    </div>
  )
}

export default Register