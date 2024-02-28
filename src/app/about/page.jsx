import React from 'react'
import Image from 'next/image'
import Group from '../../../public/groupnobg.png';
import Whitney from '../../../public/Whitney.png';


const About = () => {
  return (
    <>
    <div className='bg_about mt-10 pt-10'>
    <div className=''>
        <div className='container mx-auto flex flex-col md:flex-row justify-around items-center h-[200px]'>
            <p className='text-4xl px-5'>Our journey began in 2017…</p>
            <p className='max-w-[600px] px-5'>Resplendent tutors enterprise came into existence by November 2017. It`&apos;`s name Resplendent is to refurbish (bring out the beauty of education making it new and better) especially here in Nigeria.</p>

        </div>
        <div className='container px-5 mt-20 mx-auto flex flex-col-reverse md:flex-row justify-around items-start'>
            <div>
            <p >Our tutors are highly trained, disciplined and knowledgeable teachers who give their best as they yearn for knowledge and disseminate knowledge the best way possible. Our interest in tutoring sprung up from our desire to affect lives positively; the lives of those who struggle with learning and the vast populace to delve deeper in learning beyond the basics.
            </p>
            
         <p className='mt-5'>
              To be able to change the narrative of education being done in a stringent unappealing way, to a fun, impactful and interesting way- like a delicious meal, we will be adding a little spice to education and rendering the service of deciphering issues or problems children face in schools. We render consultancy services for free to families who call on us.  </p>

              <p className='mt-5'>
              In the long run rendering free tutoring services to those who are less privileged through the help of NGOS and our generous sacrifice. <br/>
              <br/>
              In giving back to the society, going to schools in creating awareness on the basic necessities to life, choosing a career... e.t.c through lively  presentations by an exquisitely trained team of Resplendent tutors, more or less a PET project.  </p>
            </div>
            <Image className='w-[400px]' src={Group} alt=""/>

        </div>
        <div className=' px-10 bg-blue-600 mt-20 py-10 flex flex-col justify-center items-center text-white text-2xl'>
            <p className='mb-5 pb-5'>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laborum. Exercitationem et blanditiis tempore veritatis. Quibusdam impedit sed voluptas rem&quot;.</p>

            <p className='mt-5 pt-5'>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores possimus, debitis mollitia nostrum architecto blanditiis temporibus voluptates veniam ratione.&quot;</p>
            <p className='text-sm pt-6'>Whiney Alexander</p>
            <p className='text-left text-sm'>Founder</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default About