import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"
import { MdEmail } from 'react-icons/md';
import Logo from '../../public/resplendentwhite.png'
let theYear = new Date();
let Year = theYear.getFullYear();

const TutorFooter = () => {
  return (
    <footer className="bg-black text-white px-4 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
        <Image className='w-[150px]' src={Logo} alt="Logo"/>
          <h2 className="text-sm mt-4 font-thin mb-4">Completeness to education!</h2>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subjects</h2>
          <ul className="space-y-2 text-slate-500">
            <li>Mathematics</li>
            <li>English</li>
            <li>Chemistry</li>
            <li>Economic</li>
            <li>French</li>
            <li>Physics</li>
            <li>Geography</li>
            <li>Biology</li>
            <li>Basic Programming</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Wordpress</li>
            <li>Full Stack</li>
            <li>Musical Instruments</li>


            {/* Add more subjects as needed */}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <div className='flex'>
          <Link className='mr-3' href="https://www.facebook.com/experiencedandfuntutors" target='_blank'>
           <BsFacebook/>
          </Link>
          <Link className='mr-3' href="https://www.instagram.com/p/Cm4YcG9M0XT/?igshid=YmMyMTA2M2Y=" target='_blank'>
           <BsInstagram/>
          </Link>
          <Link className='mr-3' href="https://twitter.com/resptutors?t=t7EdsLHzmEJF-L7q7q306w&s=08" target='_blank'>
           <BsTwitter/>
          </Link>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="mb-2">Email: resplendenttutors@gmail.com</p>
          <p>Phone: +2347059213315</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; {Year} Resplendent Tutors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default TutorFooter;
