import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Education from '../../public/school.png';

const Header = () => {
  return (
    <div className='header mt-10'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto pt-10 space-y-0 md:space-y-0 justify-between'>
            <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                <h1 className='max-w-md text-4xl lg:text-6xl mt-6 pt-10 font-bold text-center md:text-5xl md:text-left'>Your Path to Unending Growth
                </h1>
                <p className="max-w-sm text-center text-dark md:text-left">
                 Resplendent Tutors help you improve the aptitudes you need to build and grow.
                </p>
                <div className="flex justify-center md:justify-start">
              <Link href={'/enrol'}>   <a href="#" className="p-3 px-6 pt-2 text-white bg-blue-600 hover:animate-bounce rounded-lg baseline hover:bg-blue-400">Get Started</a> </Link> 
                </div>
            </div>
            <div className='md:w-1/2'>
                <Image className='w-[800px]' src={Education} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header