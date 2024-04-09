import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import AI from '../../public/aug.png';
// import Enrol from './Enrol'

const Header = () => {
  return (
    <div className='header mt-10'>
        <div className='container flex flex-col-reverse justify-around md:flex-row px-6 mx-auto pt-10 space-y-0 md:space-y-0'>
            <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                <h1 className='max-w-md text-white text-4xl lg:text-6xl mt-6 pt-10 font-bold text-center md:text-5xl md:text-left head_text'>USING THE <span className='text-cyan-500'> NEXT GENERATION</span> TECHNOLOGY
                </h1>
                <p className="max-w-sm text-center text-white md:text-left">
                 We build the future you desire with the right technology.
                </p>
                <div className="flex justify-center md:justify-start">
              <Link className='py-2 px-3 text-black font-bold bg-cyan-500 hover:animate-bounce rounded-md hover:bg-cyan-300' href={'/enrol'}>  Get Started</Link> 
                </div>
            </div>
            <div className='md:w-1/2'>
                <Image className='w-[800px] animate-pulse'  src={AI} alt="header" />
                {/* <Enrol/> */}
            </div>
        </div>
    </div>
  )
}

export default Header