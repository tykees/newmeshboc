import React from 'react'
import Image from 'next/image'
import JoinusBtn from '../../components/Joinus';
import Joinus from '../../../public/joinus.png';

const Join = () => {
  return (
    <div className='bg-orange-100 mt-10'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto pt-10 space-y-0 md:space-y-0 justify-between'>
            <div className='flex flex-col mb-10 space-y-12 md:w-1/2'>
                <p className='max-w-md lg:text-xl border-b-2 pb-5 border-black mt-2 pt-10 text-center md:text-xl md:text-left'>
                <span className='text-xl font-bold pb-5 head_text'>The Team</span> <br/> 
                    <p>The Resplendent Team shares a common trait: audacity. We are a collective of daring individuals who fearlessly challenge the status quo. We constantly push boundaries, and pursue extraordinary achievements.</p>
                    <br/>
                    <span className='text-xl font-bold pb-5 head_text'>Long term goals</span> <br/> 
                    <p>In the long run rendering free tutoring services to those who are less privileged through the help of NGOs and zealous resplendent helpers.</p>
                    <p>
                    <br/>
                    <span className='text-xl font-bold pb-5 head_text'>Extra role:</span> <br/> 
                    Giving back, by going to schools, teaching kids how not to struggle, creating awareness on the basic necessities to life, choosing a career... e.t.c through lively  presentations by an exquisitely trained team of Resplendent tutors.
                    If this appeals to you as a tutor? Sign up</p>
                </p>
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