import React from 'react';
import Link from 'next/link';


const Navbar = () => {

  return (
    <div className='flex gap-7 p-6 align-middle'>
        <div className="font-poppins flex justify-between align-middle gap-5 w-[80%]">
          <h1 className="text-2xl font-bold">ReacH</h1>
          <nav>
            <ul className="flex justify-between gap-3">
              <li>
                <Link href="/job-application">Find Work</Link>
              </li>
              <li>
                <Link href="/hire-talent">Find Talents</Link>
              </li>
              <li>
                <Link href="/why-reach">Why <span className='text-[#9C4DF4] font-bold'>ReacH</span></Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between gap-6">
          <Link href="/login">
            <button className="w-[92px] h-[27px] bg-[#2A2F33] rounded-[10px] text-xs">Login</button>
          </Link>
          <Link href="/register">
            <button className="w-[92px] h-[27px] bg-[#9C4DF4] rounded-[10px] text-xs">Sign Up</button>
          </Link>
        </div>
      </div>

  )
}

export default Navbar