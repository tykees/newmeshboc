import React from 'react';
import Image from 'next/image';
import Catt from '../../public/rocket.gif'

const Company = () => {
  return (
    <div className='company'>
        <div className='container mx-auto'>
            <div className='flex justify-between pt-5 items-start flex-col md:flex-row'>
                <div className='md:w-1/3'>
                    <p className='text-2xl font-bold mt-5'>Empower your business with world-class data and AI skills.</p>
                    <p className='text-md mt-5'>Join 50+ companies and 80% of the Fortune 1000 who build with Meshboc.</p>
                    <button className='px-5 py-3 border mt-5'>For Business</button>
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