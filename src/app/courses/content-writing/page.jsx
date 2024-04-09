import React from 'react';
import Image from 'next/image';
import Enroll from '../../../components/Enrol'
import Studentbtn from '../../../components/Studentbtn';
import CW from '../../../../public/cw.png'

const ThingsToLearn = [
    {
      title: "Understanding Your Audience",
      desc: "Tailoring your content to resonate with your audience ensures it's engaging and relevant."
    },
    {
      title: "Clarity and Conciseness",
      desc: "Effective content communicates its message clearly and concisely."
    },
    {
      title: "SEO Basics",
      desc: "Search Engine Optimization (SEO) techniques help your content rank higher in search engine results."
    },
    {
      title: "Headline Writing",
      desc: "A compelling headline grabs readers' attention and entices them to read further."
    },
    {
      title: "Structuring Content",
      desc: "Organize your content into clear sections with descriptive headings and subheadings."
    },
    {
      title: "Storytelling",
      desc: "Incorporating storytelling elements into your content helps captivate and engage readers emotionally."
    },
    {
      title: "Grammar and Language Skills",
      desc: "Strong grammar and language skills are essential for effective communication."
    },
    {
      title: "Research Skills",
      desc: "Conduct thorough research to gather accurate and credible information for your content."
    },
    {
      title: "Call-to-Action (CTA)",
      desc: "Every piece of content should have a clear call-to-action that prompts readers to take the desired action."
    },
    {
      title: "Editing and Proofreading",
      desc: "Editing and proofreading are crucial steps in the content writing process."
    },
    {
      title: "Audience Engagement",
      desc: "Foster engagement with your audience by encouraging comments, questions, and discussions."
    },
    {
      title: "Adaptability",
      desc: "Stay updated with industry trends, changes in algorithms, and evolving audience preferences."
    },
    
]

const Page = () => {
  return (
    <>
    <div className='h-full'>
        <div className='container mx-auto mt-10 flex flex-col md:flex-row justify-around items-center'>
            <div className='rounded-lg py-3'>
                <Image className='w-[300px] p-5' src={CW} alt="Book"/>
                <p className='text-center text-xl font-bold'>CONTENT WRITING</p>
                <p className='text-center text-cyan-800 text-xl py-3 font-bold'>#10,000</p>
                <p className='text-center text-xl font-bold'>Duration: 1 Months</p>
            </div>
            <div>
                <h1 className='mt-5 text-l font-semibold'>Submit Your Request or Get a Quick Response on <br/> Whatsapp</h1>
             <Studentbtn/>
                <Enroll/>
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