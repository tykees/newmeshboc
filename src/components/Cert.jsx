"use client"

import React from 'react';
import Image from 'next/image';
import BgAsset from '../../public/asset-1.png'
import GetCert from '../../public/getcert.png'

// import Enrol from './Enrol';

const Cert = () => {
  return (
    <div className='cert'>
        <div className='py-10'>
            <div className='flex justify-between mt-5 items-start flex-col-reverse md:flex-row'>
                 <div className='md:w-1/2'>
                    <p className='text-white pt-16 ml-20 text-6xl'>Join learners worldwide and be Certified</p>
                    <Image className='pt-60' src={BgAsset} alt='asset'></Image>
                </div>
                <div className='md:w-1/2'>
                    {/* <Enrol/> */}
                    <Image className='' src={GetCert} alt='asset'></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cert