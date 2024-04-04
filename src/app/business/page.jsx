import React from 'react'
import Image from 'next/image'
import ServiceBtn from '../../components/Servicebtn';
import Joinus from '../../../public/runai.png';
import DevImg from '../../../public/dev.png';
import SaleImg from '../../../public/sales.png';
import SocialImg from '../../../public/socials.png';
import WriteImg from '../../../public/writing.png';
import BlockImg from '../../../public/blockchain.png';


const Services = [
    {
        BgImg: DevImg,
        title: "Mobile and Web App Development",
        link: "/enrol",
    },
    {
        BgImg: SaleImg,
        title: "Sales Channel Development",
        link: "/enrol",
    },
    {
        BgImg: SocialImg,
        title: "Social media and Digital Marketing",
        link: "/enrol",
    },
    {
        BgImg: WriteImg,
        title: "Technical Writing",
        link: "/enrol",
    },
    {
        BgImg: BlockImg,
        title: "Blockchain Development & Education",
        link: "/enrol",
    },
]

const Page = () => {
  return (
    <div className='bg-cyan-100 mt-10'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto pt-10 space-y-0 md:space-y-0 justify-between'>
            <div className='flex flex-col mb-10 space-y-12 md:w-1/2'>
                <p className='max-w-md lg:text-xl border-b-2 pb-5 border-black mt-2 pt-10 text-center md:text-xl md:text-left'>
                <span className='text-xl font-bold pb-5 head_text'>OUR SERVICES</span> <br/> 
                    <p>TLet's work together to create a solution that realizes your vision. You can build exactly what you need with our experienced and professional team.</p>
                    </p>
                    <ServiceBtn/>
            </div>
            <div className='md:w-1/2'>
                <Image className='w-[450px]' src={Joinus} alt="" />
            </div>
        </div>
        <div className='container mx-auto'>
        <div className='flex justify-around flex-wrap py-10'>
        {Services.map((item, index)=> (
            <div className='flex flex-col bg-cyan-400 justify-center rounded-lg items-center shadow-lg border w-[200px] h-[250px] text-center p-2' key={index}>
                <Image className='w-[150px]' src={item.BgImg}></Image>
               <div className='mt-3 font-bold'>{item.title}</div>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Page