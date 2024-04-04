import React from 'react'
import Image from 'next/image'
import Coding from '../../../../public/code.jpg'
const page = () => {
  return (
    <div>
      <div className='container mt-20 mx-auto'>
        <div className='flex flex-col mx-8 border p-8 shadow-lg mb-10'>
          <p className='text-3xl font-extrabold pb-10'>Coding Vs Programming</p>
        <Image className='w-auto' src={Coding} alt='post image'></Image>

          <p className='text-2xl mt-5 font-bold'>Introduction</p>
          <p className='mt-5 text-justify'>In the world of computers and software, you often hear the terms coding and programming. But what do they really mean? Are they the same thing? Let&apos;s break it down in simple terms.</p>

          <p className='text-2xl mt-5 font-bold'>What is Coding?</p>
          <p className='mt-5 text-justify'>Coding is like giving instructions to a computer. It&apos;s when you write lines of text, called code, that tell the computer what to do. For example, you might write code to make a website display a button when clicked or to calculate the sum of two numbers. Coding is about writing these instructions in a language that computers understand.</p>

          <p className='text-2xl mt-5 font-bold'>What is Programming?</p>
          <p className='mt-5 text-justify'>Programming is a bit more than just coding. It&apos;s like being the boss of a big project. Programmers plan and organize everything before any coding even starts. They decide what the computer needs to do, how it should do it, and how everything will fit together. Programming involves thinking about the big picture and solving problems creatively.</p>

          <p className='text-2xl mt-5 font-bold'>Key Differences:</p>
          <p className='mt-3 text-justify'>Coding is like building individual pieces of a puzzle, while programming is like putting all those pieces together to create the whole picture.</p>
          <p className='mt-3 text-justify'>Coders focus mainly on writing code, while programmers are involved in planning, designing, and overseeing the entire project.</p>
          <p className='mt-3 text-justify'>Coders need to know how to write code in a specific programming language. Programmers need to have problem-solving skills, creativity, and a good understanding of how computers work.</p>

          <p className='text-2xl mt-5 font-bold'>Roles in Software Development:</p>
          <p className='mt-3 text-justify'>Coders work on specific tasks like creating website features or fixing bugs in software.</p>
          <p className='mt-3 text-justify'>Programmers take on bigger responsibilities like designing software systems, planning projects, and making sure everything runs smoothly.</p>

          <p className='mt-5 text-justify'>In simple terms, coding is like writing instructions for a computer, while programming involves planning and organizing those instructions to create something useful. Both roles are important in making sure computers do what we want them to do. Whether you&apos;re a coder writing code or a programmer leading a project, understanding these differences can help you excel in the world of software development.</p>
        </div>
      </div>
    </div>
  )
}

export default page