import React from 'react'
import Image from 'next/image'
import JoinusBtn from '../../components/Joinus';
import Joinus from '../../../public/joinus.png';

const Join = () => {
  return (
    <div className='bg-orange-100'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto pt-10 space-y-0 md:space-y-0 justify-between'>
            <div className='flex flex-col mb-10 space-y-12 md:w-1/2'>
                <h2 className='max-w-md lg:text-xl border-b-2 pb-5 border-black mt-2 pt-10 text-center md:text-xl md:text-left'>
                    <span className='text-2xl font-bold pb-5'>The Team</span> <br/>
                    The Resplendent Team shares a common trait: audacity. We are a collective of daring pioneers who fearlessly challenge the status quo. We constantly push boundaries, defy limits, and pursue extraordinary achievements. Our team represents a vibrant blend of diverse talents and backgrounds, collaborating harmoniously to innovate and impact the world.
                </h2>
                <div className="flex justify-center md:justify-start">
                    <JoinusBtn/>
                </div>
            </div>
            <div className='md:w-1/2'>
                <Image className='w-[450px]' src={Joinus} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Join