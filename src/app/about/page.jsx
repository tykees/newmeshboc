import React from 'react'
import Image from 'next/image'
import Group from '../../../public/groupnobg.png';
import Link from 'next/link';
import Whitney from '../../../public/Whitney.png';
import AboutImg from '../../../public/about.jpg';

const About = () => {
  return (
    <>
    <div className='bg_about mt-10 pt-10'>
    <div className=''>
        <div className='container mx-auto flex flex-col md:flex-row justify-around items-center h-[200px]'>
            <p className='text-4xl px-5 head_text'>Our journey began in 2017…</p>
            <p className='max-w-[600px] px-5'> 
            <p className='font-semibold text-xl pt-5 head_text'>Where we started</p>
            
            Resplendent tutors enterprise came into existence by November 2017. It&apos;s name Resplendent is to refurbish (bring out the beauty of education making it new and better) especially here in Nigeria.</p>
        </div>
        <div className='mt-10'>
          <Image src={AboutImg} alt="Students"/>
        </div>
        <div className='container px-5 mx-auto'>
          <h2 className='text-xl font-semibold mt-5 pt-5 head_text'>Long term goals</h2>
          <p> In the long run rendering free tutoring services to those who are less privileged through the help of NGOs and zealous resplendent helpers. </p>
        </div>
        <div className='container px-5 mt-20 mx-auto flex flex-col-reverse md:flex-row justify-around items-start'>
            <div>
            <p >Our tutors are highly trained, disciplined and knowledgeable teachers who give their best as they yearn for knowledge and disseminate knowledge the best way possible. 
            <br/>
            <br/>
            <p className='font-semibold text-xl head_text'>Why tutoring?</p>
            Our interest in tutoring sprung up from our desire to affect lives positively; the lives of those who struggle with learning and the vast populace to delve deeper in learning BEYOND THE BASICS.
            </p>
            
         <p className='mt-5'>
         <p className='font-semibold text-xl head_text head_text'>Let&quot;s get more interesting</p>
         To be able to change the narrative of education being done in a stringent unappealing way, to a fun, impactful and interesting way- like a delicious meal, we will be adding a little spice to education and rendering the service of deciphering issues or problems children face on schools. We render consultancy services for free to families who call on us.
        Education is fun with us  </p>
            </div>
            <Image className='w-[400px]' src={Group} alt=""/>

        </div>
        <div className=' px-10 bg-blue-600 mt-20 py-10 flex flex-col justify-center items-center text-white text-2xl'>
            <p className='mb-5 pb-5 text-center head_text'>&quot;In my years of tutoring, I discovered that lack of confidence is the cause of many failures which comes from an overload of proof that you cannot do it. To change that, one proof that you can do it is needed which will lead to many other proofs hence building confidence and invariably success.&quot;.</p>
            <p className='text-sm'>Whiney Alexander</p>
            <p className='text-left text-sm'>Founder</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default About