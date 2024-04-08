import React from 'react';
import Image from 'next/image';

const dataTestimonie = [
    {
        name: "Tom Gerald",
        testimony: "Intech Meshboc is an excellent company. I know them for this. They built my business website and my son learn remotely from them and he is now building series of amazing applications."
    },
    {
        name: "Ojo Bimpe",
        testimony: "I joined Meshboc in 2021 as a non tech person. I have no prior understanding of any terminology or having any technical skill. After training with Meshboc, I have been working remotely for companies across the world and I can boldly call myself a software developer."
    },
    {
        name: "Ejike Bernard",
        testimony: "Intech Meshboc is a company that have the all round value we need in the tech space. I learned to build full fledged applications, I now know how to trade digital assets, and I know how to build digital assets all through Meshboc."
    },
]

const Testimonies = () => {
  return (
    <div className=''>
        <p className='text-center pt-20 pt text-4xl head_text'>People say we know our craft</p>
        <p className='text-slate-600 text-center text-l'>See proof here!</p>
        <div className='mx-4'>
            {dataTestimonie.map((item, index)=>(
                <div className='container mx-auto border animate bg-white rounded-xl p-10 shadow-lg mb-10 space-y-5 mt-5 flex justify-between' key={index}>
                    <div>
                    <p className='text-xl text-slate-700 head_text'>{item.name}</p>
                    <p className='text-l'>{item.testimony}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonies;