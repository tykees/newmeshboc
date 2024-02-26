import React from 'react';
import Image from 'next/image';
import Enroll from '../../components/Enrol'
import Book from '../../../public/bulb.png';
import Studentbtn from '../../components/Studentbtn';

const Enrol = () => {
  return (
    <div>
        <div className='container mx-auto flex flex-col md:flex-row justify-around items-center'>
            <div>
                <Image className='w-[350px] p-5' src={Book} alt="Book"/>
            </div>
            <div>
                <h1 className='mt-5 text-l font-semibold'>Submit Your Request or Get a Quick Response on <br/> Whatsapp</h1>
             <Studentbtn/>
                <Enroll/>
            </div>
        </div>
    </div>
  )
}

export default Enrol