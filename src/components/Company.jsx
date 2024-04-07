import React from 'react';
import Image from 'next/image';
import Catt from '../../public/rocket.gif'
import Link from 'next/link';
const Company = () => {
  return (
    <div className='company'>
        <div className='container mx-auto'>
            <div className='flex justify-between pt-5 items-start flex-col md:flex-row'>
                <div className='md:w-1/3'>
                    <p className='text-2xl font-bold mt-5'>Empower your business with world-class website, sales page and right funnel to grow.</p>
                    <p className='text-md mt-5'>Join 50+ companies who build with Meshboc.</p>
                  <Link href={'/business'}><button className='px-4 py-2 border border-slate-950 text-black mt-5 shadow-lg rounded-lg'>For Business</button></Link>
                </div>
                <div>
                    <Image src={Catt} alt='asset'></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company