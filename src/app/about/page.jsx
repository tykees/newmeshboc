import React from 'react'
import Image from 'next/image'
// import CEO from '../../../public/ceo.png';
import Link from 'next/link';
import AboutImg from '../../../public/about.jpg';

const About = () => {
  return (
    <>
    <div className='bg_about mt-10 pt-10'>
    <div className=''>
        <div className='container mx-auto flex flex-col md:flex-row justify-around items-center h-[200px]'>
            <p className='text-4xl px-5 text-cyan-400 head_text'>Our journey began in 2021…</p>
            <p className='max-w-[600px] text-cyan-300 px-5'> 
            <p className='font-semibold text-cyan-300 text-xl pt-5 head_text'>Where we started</p>
          </p>
        </div>
        <div className='mt-10'>
          <Image src={AboutImg} alt="Students"/>
        </div>
        <div className='container text-white px-5 mx-auto'>
          <p className='text-white'> We provide end-to-end software development, quality assurance, and support services to a wide range of clients, established and startups at various stages of development.</p>
        </div>
        <div className='container px-5 mt-20 mx-auto flex flex-col-reverse md:flex-row justify-around items-start'>
            <div className='text-white'>
            <p >Meshboc is a full-service development and quality assurance firm that specializes in developing time-sensitive and creative, mobile, and web applications. We provide technical knowledge, excellent engineering talent, rigorous best practices, a commitment to protecting client's intellectual property. 
            <br/>
            <br/>
            Meshboc has successfully delivered well over to many of clients. Among our customers are large corporations, dynamic startups, blockchain communities, tech companies, digital innovators, financial services providers, and publishers.
            </p>
            
         <p className='mt-5'>
         We've perfected a simple, cost-effective method for engaging and exiting development and quality assurance processes at the correct time and with the necessary resources. Our broad experience has given us the ability to create quick, cost-effective solutions that integrate smoothly with product and business strategy, infrastructure analysis, architecture, UX design, rapid development, blockchain development (smart-contracts), functional QA and many more.</p>
            </div>
            {/* <Image className='w-[400px]' src={CEO} alt=""/> */}

        </div>
        <div className=' px-10 bg-cyan-500 mt-20 py-10 flex flex-col justify-center items-center text-white text-2xl'>
            <p className='mb-5 pb-5 text-center head_text'>&quot;Software development is not just about writing code; it's about crafting solutions that shape the future.&quot;.</p>
            <p className='text-sm'>Femi Michael Balogun</p>
            <p className='text-left text-sm'>CEO</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default About