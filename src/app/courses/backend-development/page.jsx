import React from 'react';
import Image from 'next/image';
import Enroll from '../../../components/Enrol'
import Studentbtn from '../../../components/Studentbtn';
import BE from '../../../../public/be.png'

const ThingsToLearn = [
    {
      title: "NODE JS ",
      desc: "The second text to map"
    },
    {
      title: "MONGO DB",
      desc: "The second text to map"
    },
    {
      title: "EXPRESS",
      desc: "The second text to map"
    },
    
]

const Page = () => {
  return (
    <>
    <div className='h-full'>
        <div className='container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center'>
            <div className='rounded-lg py-3'>
                <Image className='w-[300px] p-5' src={BE} alt="Book"/>
                <p className='text-center text-xl font-bold'>Backend Engineering</p>
                <p className='text-center text-cyan-800 text-xl py-3 font-bold'>#40,000</p>
                <p className='text-center text-xl font-bold'>Duration: 3 Months</p>
            </div>
            <div>
                <h1 className='mt-5 text-l font-semibold'>Submit Your Request or Get a Quick Response on <br/> Whatsapp</h1>
             <Studentbtn/>
                <Enroll/>
            </div>
        </div>
        <p className='text-center text-2xl font-bold mt-10'>What To Learn</p>
      <div>
        <div className='container mx-auto'>
          <div className='flex justify-start items-start flex-wrap'>
            {ThingsToLearn.map((item, index)=> (
              <div className='bg-slate-100 w-full sm:w-[300px] h-[100px]rounded-lg m-2 px-4 py-5 mb-3' key={index}>
                <p>{item.title}</p>
                <p className='text-sm text-slate-500'>{item.desc}</p>
              </div>
            ))}
          </div>
          {/* <div> 
            <Image src={Book}></Image>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Page