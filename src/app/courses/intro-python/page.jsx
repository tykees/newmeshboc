import React from 'react';
import Image from 'next/image';
import Enroll from '../../../components/Enrol'
import Studentbtn from '../../../components/Studentbtn';
import Python from '../../../../public/python.png'

const ThingsToLearn = [
    {
      title: "Variables",
      desc: "Variables are containers for storing data values."
    },
    {
      title: "Data Types",
      desc: "Python supports various data types such as integers, floats, strings, booleans, lists, tuples, dictionaries, etc. "
    },
    {
      title: "Control Structures",
      desc: "Control structures like if statements, loops (for and while), and conditional statements (if-else) are used to control the flow of execution in a Python program.."
    },
    {
      title: "Functions",
      desc: "Functions are blocks of reusable code that perform a specific task."
    },
    {
      title: "Lists",
      desc: "Lists are ordered collections of items that can contain elements of different data types."
    },
    {
      title: "Tuples",
      desc: "Tuples are similar to lists but are immutable, meaning their elements cannot be changed after creation."
    },
    {
      title: "Dictionaries",
      desc: "Dictionaries are unordered collections of key-value pairs."
    },
    {
      title: "Strings",
      desc: "They support various operations such as concatenation, slicing, and formatting."
    },
   
    
]

const Page = () => {
  return (
    <>
    <div className='h-full'>
        <div className='container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center'>
            <div className='rounded-lg py-3'>
                <Image className='w-[300px] p-5' src={Python} alt="Book"/>
                <p className='text-center text-xl font-bold'>Introduction To Python</p>
                <p className='text-center text-cyan-800 text-xl py-3 font-bold'>#10,000</p>
                <p className='text-center text-xl font-bold'>Duration: 2 Weeks</p>
                <p></p>
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
              <div className='bg-slate-100  w-full sm:w-[300px] min-h-[150px]  rounded-lg m-2 px-4 py-5 mb-3' key={index}>
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