import Image from 'next/image'
import firstPic from "@/public/images/firstPic.png";
import secondPic from "@/public/images/secondPic.png";
import thirdPic from "@/public/images/thirdPic.png"

const OutstandingFeatures = () => {
  return (
    <div className='bg-[#180c34] flex gap-10 font-poppins p-20 text-white'>
      <div className='z-10 flex flex-col gap-2 ml-5 mr-20'>
        <h1 className='text-[#2E41EB] text-2xl text-center w-[345px]'>Discover Our Outstanding Features</h1>
        <div className='w-[402px] h-[160px] bg-[#182434] opacity-50 p-4'>
          <h2 className='font-bold'>Heading 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eius nemo? magnam esse labore explicabo molestias delectus dignissimos fugit.</p>
        </div>
        <div className='w-[402px] h-[160px] bg-[#183454] opacity-50 p-4'>
          <h2 className='font-bold'>Heading 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eius nemo? magnam esse labore explicabo molestias delectus dignissimos fugit.</p>
        </div>
        <div className='w-[402px] h-[160px] bg-[#402464] p-4'>
          <h2 className='font-bold'>Heading 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eius nemo? magnam esse labore explicabo molestias delectus dignissimos fugit.</p>
        </div>
      </div>
      <div className='flex relative w-[700px] mt-44 px-10'>
        <Image className='absolute -left-[40%] w-[393.52px] h-[368px]' src={firstPic} alt='a man shaking hand'/>
        <Image className='z-10 absolute -left-2 -top-[120px] w-[268px] h-[530px]' src={secondPic} alt='A man typing'/>
        <Image className='absolute right-16 w-[260px] h-[408.71px]' src={thirdPic} alt='A man writting'/>
      </div>
    </div>
  )
}

export default OutstandingFeatures