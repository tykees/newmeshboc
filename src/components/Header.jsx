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
                <h1 className='max-w-md text-white text-4xl lg:text-6xl mt-6 pt-10 font-bold text-center md:text-5xl md:text-left head_text'>USING THE NEXT GENERATION TECHNOLOGY
                </h1>
                <p className="max-w-sm text-center text-white md:text-left">
                 We build the future you desire with the right technology.
                </p>
                <div className="flex justify-center md:justify-start">
              <Link href={'/enrol'}>   <a href="#" className="py-2 px-5 pt-2 text-black font-bold bg-cyan-500 hover:animate-bounce rounded-lg baseline hover:bg-cyan-300">Get Started</a> </Link> 
                </div>
            </div>
            <div className='md:w-1/2'>
                <Image className='w-[800px]' src={AI} alt="header" />
                {/* <Enrol/> */}
            </div>
        </div>
    </div>
  )
}

export default Header