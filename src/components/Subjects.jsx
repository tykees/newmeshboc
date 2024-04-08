import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PiMathOperationsLight } from "react-icons/pi";
import { RiEnglishInput } from "react-icons/ri";
import { SlChemistry } from "react-icons/sl";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiFrenchHorn } from "react-icons/gi";
import { GiPendulumSwing } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";
import { GiHeartOrgan } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa6";
import { SiCodeium } from "react-icons/si";
import { GiMusicalScore } from "react-icons/gi";
import HTMLImg from '../../public/html.png';
import CSSImg from '../../public/css.png';
import JSImg from '../../public/js.png';
import FullImg from '../../public/fullstack.png';
import FE from '../../public/fe.png';
import BE from '../../public/be.png';
import Fundamental from '../../public/fundamentals.png';
import Python from '../../public/python.png';
import NEXTT from '../../public/next.png';
import TS from '../../public/ts.png';
import CW from '../../public/cw.png';


const resSubjects = [
    {
      bgImage: FullImg,
      title: "FULL STACK ENGINEERING",
      link: "/courses/full-stack-development",
    },
    {
      bgImage: FE,
        title: "FRONT-END ENGINEERING",
        link: "/courses/front-end-development",
    },
    {
      bgImage: BE,
        title: "BACKEND ENGINEERING",
        link: "/courses/backend-development",
    },
    {
        bgImage: Fundamental,
        title: "CODING FUNDAMENTALS",
        link: "/courses/coding-fundamentals",
    },
    {
        bgImage: HTMLImg,
        title: "INTRO TO HTML",
        link: "/courses/intro-html",
    },
    {
      bgImage: CSSImg,
      title: "INTRO TO CSS",
      link: "/courses/intro-css",
  },
  {
    bgImage: Python,
    title: "INTRO TO PYTHON",
    link: "/courses/intro-python",
},
{
  bgImage: JSImg,
  title: "INTRO TO JAVASCRIPT",
  link: "/courses/intro-to-javascript",
},
{
  bgImage: JSImg,
  title: "PRO JAVASCRIPT",
  link: "/courses/javascript-inter",
},
{
  bgImage: NEXTT,
  title: "NEXT JS",
  link: "/courses/next",
},
{
  bgImage: TS,
  title: "TYPESCRIPT",
  link: "/courses/typescript",
},
{
  bgImage: CW,
  title: "CONTENT WRITING",
  link: "/courses/content-writing",
},
  
];


const Subjects = () => {
  return (
    <>
    <div id='subjects'>
    <h1 className='text-center text-4xl font-semibold pt-5 text-white head_text'>Courses</h1>
    <p className='text-center mx-auto mt-4 max-w-[600px] text-white'>Get Access to variety of courses and
 learning experiences that are designed for you. Master coding through proper mentoring.</p>
    <div className='container flex text-center flex-wrap flex-col md:flex-row items-center px-6 mx-auto mt-10 justify-between'>
  {resSubjects.map((item, index) => (
    <div className='mb-4' key={index}>
      <Link href={item.link}>
        <div className='flex flex-col justify-center rounded-lg items-center shadow-lg border w-[320px] h-[250px] md:w-[200px] text-center p-2'>
          <Image className='w-[100px] h-[100px]' src={item.bgImage} alt='sub Img'></Image>
          <p className='my-3 text-xl text-white font-bold'>{item.title}</p>
          {/* <button className='flex justify-center button mt-2 hover:animate-bounce text-white hover:shadow-lg'>Enrol</button> */}
        </div>
      </Link>
    </div>
  ))}
</div>
</div>
    </>
  );
};

export default Subjects;
