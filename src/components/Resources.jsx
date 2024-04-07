import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Coding from '../../public/code.jpg'
import Learn from '../../public/learn.jpg'
import Web3 from '../../public/web3.jpg'


const Resources = () => {
  return (
    <div className='resources'>
        <p className='text-center pt-5 text-4xl text-white'>Resources</p>
        <div className='container mx-auto py-10 gap-5 flex justify-center items-center flex-col md:flex-row'>
            <Link href='/blog/coding-vs-programming'>
            <div className='bg-slate-700 w-[250px] py-5 px-2 h-auto p-1 rounded-md m-10 shadow-lg'>
                <Image className='w-auto' src={Coding} alt='img'></Image>
                <p className='text-white font-bold pt-5 text-left pl-3  text-md'>Coding Vs Programming</p>
                <p className='text-white text-left pl-3 pt-3 text-sm'>In the world of computers and software, you often hear the terms coding and programming...</p>
            </div>
            </Link>
            <div>
            <Link href='/blog/steps-to-master-your-skill'>
            <div className='bg-slate-700 w-[250px] py-5 px-2 h-auto p-1 rounded-md m-10 shadow-lg'>
                <Image className='w-auto' src={Learn} alt='img'></Image>
                <p className='text-white font-bold pt-5 text-left pl-3  text-md'>Steps to Master Your Skill: A Simple Guide to Getting Better</p>
                <p className='text-white text-left pl-3 pt-3 text-sm'>Becoming really good at something takes time and effort. Whether you want to ...</p>
            </div>
            </Link>
            </div>
            <div>
            <Link href='/blog/web2-vs-web3'>
            <div className='bg-slate-700 w-[250px] py-5 px-2 h-auto p-1 rounded-md m-10 shadow-lg'>
                <Image className='w-auto' src={Web3} alt='img'></Image>
                <p className='text-white font-bold pt-5 text-left pl-3  text-md'>Exploring the Differences: Web2 vs. Web3</p>
                <p className='text-white text-left pl-3 pt-3 text-sm'>The evolution of the internet has seen significant shifts in how we interact with digital technologies...</p>
            </div>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Resources