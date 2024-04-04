import React from 'react';
import Image from 'next/image';
import Enroll from '../../../components/Enrol'
import Studentbtn from '../../../components/Studentbtn';
import JS from '../../../../public/js.png'

const ThingsToLearn = [
    {
      title: "Basic css styling",
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
   
    
]

const Page = () => {
  return (
    <>
    <div className='h-full'>
        <div className='container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center'>
            <div>
                <Image className='w-[350px] p-5' src={JS} alt="Book"/>
                <p className='text-center text-2xl font-bold'>Introduction To JavaScript</p>
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