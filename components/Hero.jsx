import React, { useEffect } from 'react';
import Image from 'next/image';
import { search, traders } from '@/app/assets/icon';
import { useState } from 'react';
import { toast } from 'react-toastify';
import bgImage from '@/public/images/bgimage.svg';
import Navbar from './Navbar';

const Hero = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [load, setLoading] = useState(false);


  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 2000)
  
      return () => clearTimeout(timer); // Cleanup previous timer
    }, [load])


  const handleSearch = async () => {
    if (!query) {
      toast.error("Please enter a search term");
      return;
    }

    const res = await fetch(`/api/search?query=${query}`);
    const data = await res.json();

    if (res.statusCode === 200) {
        setResult(data)
    } else {
      toast.error(data?.message)
    }
  }


  return (
    <div style={{
      backgroundImage: `url(${bgImage.src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      color: 'white',
      overflowX: 'hidden',
      transition: "opacity 0.5s ease-in-out",
    }}
    >
      {load && (
        <>
            <Navbar />
      <div className='flex justify-between gap-2 font-poppins p-8'>
            <div className='flex flex-col justify-between gap-3'>
              <h3 className='w-[498px] h-[236px] text-[50px] leading-[60px]'>Connect with Top Professionals for Your Projects</h3>
              <div className='flex align-middle'>
                <input 
                  type='text'
                  placeholder='Search For any Service...'
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  className='w-[447px] h-[65px] bg-[#D9D9D9] text-black focus:outline-none focus:ring-0 focus:border-none border-none text-xl font-semibold placeholder-black p-3'
                />
                <button onClick={handleSearch} className='bg-[#9C4DF4] w-[89px] h-[65px] px-5'><Image src={search} alt='search icon'/></button>
              </div>
              <p>No recruiters, no boundaries. Just top talent on top</p>
            </div>
            <div>
              <Image src={traders} className='w-[478px] h-[326]' alt='two people transacting' />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Hero