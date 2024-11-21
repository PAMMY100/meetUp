'use client'
import React from 'react'
import { Input, Button, Card } from '@material-tailwind/react'
import Link from 'next/link'
import { useState } from 'react'

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
    <div className='w-[400px] h-[385px] p-4'>
      <Card color="transparent" shadow={false}>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div>
            <h2 className='text-3xl font-bold mb-5'> Hello Again!</h2>
            <p>Welcome Back</p>
          </div>

          <div>
            <label>Email</label>
            <Input name='email' id='email' type='email' value={userData.email} onChange={handleChange} />
          </div>

          <div>
            <label>Password</label>
            <Input name='password' id='password' type='password' value={userData.password} onChange={handleChange} />
          </div>

          <div className='flex justify-between'>
            <Button type='submit'>Login</Button>
            <span>
                  {""}
                  Do not have an account? {""}
                  <Link className="text-center text-blue-500 hover:underline mt-2" href="/register">Register</Link>
                </span>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Login