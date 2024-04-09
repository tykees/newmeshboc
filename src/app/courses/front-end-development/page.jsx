import React from 'react';
import Image from 'next/image';
import Enroll from '../../../components/Enrol'
import Studentbtn from '../../../components/Studentbtn';
import FE from '../../../../public/fe.png'

const ThingsToLearn = [

    {
      title: "HTML Basics",
      desc: "Learn the basic structure of a web page and see how you can help a web browser understand your content"
    },
    {
      title: "CSS styling",
      desc: "Style your web pages with CSS to create visually appealing and responsive designs"
    },
    {
      title: "JavaScript",
      desc: "Add interactivity and dynamic content to your web pages using JavaScript"
    },
    {
      title: "Responsive Design",
      desc: "Create web pages that look great on any device with responsive design techniques"
    },
    {
      title: "DOM manipulation",
      desc: "Learn how to manipulate the Document Object Model (DOM) to dynamically update web page content"
    },
    {
      title: "React JS",
      desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components"
    },
    {
      title: "Tailwind CSS",
      desc: "Rapidly build modern websites without ever leaving your HTML."
    },
    {
      title: "NEXT JS",
      desc: "Next.js enables you to create high-quality web applications with the power of React components"
    },
    {
      title: "TYPESCRIPT",
      desc: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
    },
  
    
]

const Page = () => {
  return (
    <>
    <div className='h-full'>
        <div className='container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center'>
            <div className='rounded-lg py-3'>
                <Image className='w-[300px] p-5' src={FE} alt="Book"/>
                <p className='text-center text-xl font-bold'>Front End Engineering</p>
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
              <div className='bg-slate-100 w-full sm:w-[300px] max-h-[120px] rounded-lg m-2 px-4 py-5 mb-3' key={index}>
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