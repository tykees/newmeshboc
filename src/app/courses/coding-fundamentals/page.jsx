import React from 'react';
import Image from 'next/image';
import Enroll from '../../../components/Enrol'
import Studentbtn from '../../../components/Studentbtn';
import Fundamentals from '../../../../public/fundamentals.png'

const ThingsToLearn = [
    {
      title: "Basic HTML structure",
      desc: "Learn the basic structure of a web page and see how you can help a web browser understand your content"
    },
    {
      title: "Text formatting",
      desc: "Add style to your content with text formatting options like bold, italics, strikethrough, colors, etc."
    },
    {
      title: "Pictures",
      desc: "A picture is worth a thousand words. Learn how to add images to your pages"
    },
    {
      title: "Forms and frames",
      desc: "Use forms to capture user information"
    },
    {
      title: "Cloth",
      desc: "Make your own artwork using Canvas to render 2D shapes and patterns"
    },
    {
      title: "API Queries",
      desc: "Select, sort, and identify data in a database using SQL queries."
    },
    {
      title: "If and Else statements",
      desc: "Start shaping the flow and purpose of your program with if and else conditional statements"
    },
    {
      title: "Functions",
      desc: "Keep your code efficient and manageable by using built-in functions and your own custom functions"
    },
    {
      title: "Headings, paragraph",
      desc: "The second text to map"
    },
    {
      title: "Elements and Attributes",
      desc: "Discover some of the most useful elements and attributes. Use them to create different information formats"
    },
    {
      title: "Lists and tables",
      desc: "Display more complex data using lists and tables"
    },
    {
      title: "Audio and video elements",
      desc: "Bring your pages to life using audio and video elements"
    },
    {
      title: "Tables",
      desc: "Create tables by adding, updating, and deleting data."
    },
    {
      title: "Variables",
      desc: "Use variables to help your program store data"
    },
    {
      title: "Lists",
      desc: "Create and operate with lists to store multiple items in a single variable. This means you can handle more types of data"
    },
    
]

const Page = () => {
  return (
    <>
    <div className='h-full'>
        <div className='container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center'>
            <div>
                <Image className='w-[350px] p-5' src={Fundamentals} alt="Book"/>
                <p className='text-center text-2xl font-bold'>Coding Fundamentals</p>
                <p>Master all the coding skills you need to build websites, write programs, and operate databases. You'll learn how to build websites from scratch in HTML, get certified in SQL, the international standard language for databases, and specialize in Python, the world's fastest-growing programming language . No prior coding experience is necessary.</p>
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