import React from 'react';
import Link from 'next/link';
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


const resSubjects = [
    {
      icon: <PiMathOperationsLight/>,
      title: "MATHEMATICS",
      link: "/enrol",
    },
    {
        icon: <RiEnglishInput/>,
        title: "ENGLISH",
        link: "/enrol",
    },
    {
        icon: <SlChemistry/>,
        title: "CHEMISTRY",
        link: "/enrol",
    },
    {
        icon: <GiTakeMyMoney/>,
        title: "ECONOMICS",
        link: "/enrol",
    },
    {
        icon: <GiFrenchHorn/>,
        title: "FRENCH",
        link: "/enrol",
    },
    {
        icon: <GiPendulumSwing/>,
        title: "PHYSICS",
        link: "/enrol",
    },
    {
        icon: <GiMountaintop/>,
        title: "GEOGRAPHY",
        link: "/enrol",
    },
    {
        icon: <GiHeartOrgan/>,
        title: "BIOLOGY",
        link: "/enrol",
    },
    {
        icon: <FaLaptopCode/>,
        title: "BASIC PROGRAMMING",
        link: "/enrol",
    },
    {
        icon: <BsFiletypeHtml/>,
        title: "HTML",
        link: "/enrol",
    },
    {
        icon: <BsFiletypeCss/>,
        title: "CSS",
        link: "/enrol",
    },
    {
        icon: <TbBrandJavascript/>,
        title: "JAVASCRIPT",
        link: "/enrol",
    },
    {
        icon: <FaWordpress/>,
        title: "WORDPRESS",
        link: "/enrol",
    },
    {
        icon: <SiCodeium/>,
        title: "FULL STACK",
        link: "/enrol",
    },
    {
        icon: <GiMusicalScore/>,
        title: "MUSICAL INSTRUMENTS",
        link: "/enrol",
    },
  
];


const Subjects = () => {
  return (
    <>
    <div id='subjects'>
    <h1 className='text-center text-4xl font-semibold mt-5 pt-5'>Subjects</h1>
    <p className='text-center mx-auto mt-4 max-w-[700px]'>Making sure that those interested in improving in various subjects can readily access all the necessary help they need to learn and grow</p>
    <div className='container flex text-center flex-wrap flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 justify-between'>
  {resSubjects.map((item, index) => (
    <div className='mb-4' key={index}>
      <Link href={item.link}>
        <div className='flex flex-col justify-center hover:bg-blue-100 rounded-lg items-center shadow-lg border w-[300px] h-[250px] text-center p-2'>
          <p className='font-bold flex justify-center items-center text-6xl hover:text-blue-600'>{item.icon}</p>
          <p className='my-3 font-bold'>{item.title}</p>
          <button className='flex justify-center button mt-2 hover:animate-bounce hover:border-white hover:shadow-lg'>Enrol</button>
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
