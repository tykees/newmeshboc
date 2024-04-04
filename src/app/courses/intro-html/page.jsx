import React from 'react';
import Image from 'next/image';
import Enroll from '../../../components/Enrol'
import Studentbtn from '../../../components/Studentbtn';
import HTMLImg from '../../../../public/html.png'

const ThingsToLearn = [
    {
      title: "Basic HTML structure",
      desc: "Learn the basic structure of a web page and see how you can help a web browser understand your content"
    },
    {
      title: "Headings, paragraphs",
      desc: "Make your document easy to read and SEO-friendly by adding headings and paragraphs "
    },
    {
      title: "Text formatting",
      desc: "Add style to your content with text formatting options like bold, italics, strikethrough, colors, etc."
    },
    {
      title: "Elements and Attributes ",
      desc: "Discover some of the most useful elements and attributes. Use them to create different information formats"
    },
    {
      title: "Pictures",
      desc: "A picture is worth a thousand words. Learn how to add images to your pages "
    },
    {
      title: "Lists and tables",
      desc: "TDisplay more complex data using lists and tables"
    },
    {
      title: "Forms and frames ",
      desc: "Use forms to capture user information"
    },
    {
      title: "Audio and video elements ",
      desc: "Bring your pages to life using audio and video elements "
    },
    {
      title: "Canvas",
      desc: "Create your own artwork using Canvas to render 2D shapes and patterns"
    },
    
]

const Page = () => {
  return (
    <>
    <div className='h-full'>
        <div className='container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center'>
            <div>
                <Image className='w-[350px] p-5' src={HTMLImg} alt="Book"/>
                <p className='text-center text-2xl font-bold'>Introduction To HTML</p>
                <p>HTML is at the heart of every web page. It&apos;s beginner-friendly and knowing the basics is useful for anyone working in digital design, marketing, content and more. If you are interested in front-end web development, this course is a great place to start! You don&apos;t need any previous coding experience, and we have plenty of other courses for you to expand your knowledge once you&apos;re done, including CSS and JavaScript.</p>
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