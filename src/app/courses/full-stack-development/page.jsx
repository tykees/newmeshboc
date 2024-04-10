import React from 'react';
import Image from 'next/image';
// import Enroll from '../../../components/Enrol'
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
      desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components."
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
      desc: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
    },
    {
      title: "NODE JS ",
      desc: "open-source, cross-platform JavaScript runtime environment that lets developers create servers"
    },
    {
      title: "MONGO DB",
      desc: "MongoDB is a source-available, cross-platform, document-oriented database program"
    },
    {
      title: "EXPRESS",
      desc: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js."
    },
    
]

const Page = () => {
  return (
    <>
    <div className='h-full'>
        <div className='container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center'>
            <div className='rounded-lg py-3'>
                <Image className='w-[300px] p-5' src={Fullstack} alt="Book"/>
                <p className='text-center text-xl font-bold'>Full Stack Engineering</p>
                <p className='text-center text-cyan-800 text-xl py-3 font-bold'>#60,000</p>
                <p className='text-center text-xl font-bold'>Duration: 3 Months</p>
            </div>
            <div>
                <h1 className='mt-5 text-l font-semibold pl-2 py-3'>Get a Quick Response on <br/> Whatsapp</h1>
             <Studentbtn/> 
                {/* <Enroll/> */}
            </div>
        </div>
        <p className='text-center text-2xl py-3 font-bold mt-10'>What To Learn</p>
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
        </div>
      </div>
    </div>
    </>
  )
}

export default Page