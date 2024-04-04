import React from 'react';
import Image from 'next/image';
import Enroll from '../../../components/Enrol'
import Studentbtn from '../../../components/Studentbtn';
import Fullstack from '../../../../public/fullstack.png'

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
      desc: "The second text to map"
    },
    {
      title: "Tailwind CSS",
      desc: "The second text to map"
    },
    {
      title: "NEXT JS",
      desc: "The second text to map"
    },
    {
      title: "TYPESCRIPT",
      desc: "The second text to map"
    },
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
            <div>
                <Image className='w-[350px] p-5' src={Fullstack} alt="Book"/>
                <p className='text-center text-2xl font-bold'>Full Stack Engineering</p>
            </div>
            <div>
                <h1 className='mt-5 text-l font-semibold'>Submit Your Request or Get a Quick Response on <br/> Whatsapp</h1>
             <Studentbtn/>
                <Enroll/>
            </div>
        </div>
        <p className='text-center text-2xl font-bold mt-10'>What To Learn</p>
      <div>
        <div className=''>
          <div className='flex justify-start items-start flex-wrap'>
            {ThingsToLearn.map((item, index)=> (
              <div className='bg-slate-100 w-[150px] rounded-lg m-2 px-4 py-5 mb-3' key={index}>
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