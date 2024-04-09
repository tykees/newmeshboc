import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"
import { FaHeart } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import Logo from '../../public/intechwhite-1.png'
let theYear = new Date();
let Year = theYear.getFullYear();

const TutorFooter = () => {
  return (
    <footer className="foot text-white px-4 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
        <Image className='w-[150px]' src={Logo} alt="Logo"/>
          <h2 className="text-sm mt-4 font-thin mb-4">Increasing the Speed of Your Digital Transformation!</h2>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Courses</h2>
          <ul className="space-y-2 text-slate-500">
            <li>Full Stack Engineering</li>
            <li>Backend Engineering</li>
            <li>Frontend Engineering</li>
            <li>Coding Fundamentals</li>
            <li>Intro to HTML</li>
            <li>Intro to CSS</li>
            <li>Into to Python</li>
            <li>Intro to JavaScript</li>
            <li>Pro Javascript</li>
            <li>Next Js</li>
            <li>TypeScript</li>
            <li>Content writing</li>
            {/* Add more subjects as needed */}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-slate-500">
            <li>Mobile and Web App Development</li>
            <li>Sales Channel Development</li>
            <li>Social media and Digital Marketing</li>
            <li>Technical Writing</li>
            <li>Blockchain Development & Education</li>

            {/* Add more subjects as needed */}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <div className='flex text-slate-500 flex-col'>
          <Link className='mr-3 py-1 flex justify-start items-start' href="/blog">
          Blog 
          </Link>
          <Link className='mr-3 py-1  flex justify-start items-start' href="https://www.facebook.com/meshboc" target='_blank'>
          Facebook 
          </Link>
          <Link className='mr-3 py-1 ' href="https://www.instagram.com/" target='_blank'>
          Instagram 
          </Link>
          <Link className='mr-3 py-1 ' href="https://twitter.com/resptutors?t=t7EdsLHzmEJF-L7q7q306w&s=08" target='_blank'>
          Twitter (X.com)
          </Link>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="mb-2  text-slate-500">Email: meshboc@gmail.com</p>
          <p className='mb-2 text-slate-500'>Office: Legion House, Garki Area 3 Banking Zone, Abuja</p>
          <p className=' text-slate-500'>Phone: +2348105197239</p>
        </div>
      </div>
      <div className="text-center bg-cyan-400 mt-20 py-3 flex justify-center items-center">
        <div className='flex flex-row justify-center items-center text-slate-500'>Made with <FaHeart className='m-2 text-red-500'  /> by <span className='text-black mx-1'> Meshboc </span>  &copy; {Year}.</div>
      </div>
    </footer>
  );
};

export default TutorFooter;
