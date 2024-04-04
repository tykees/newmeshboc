import React from 'react';
import Image from 'next/image';

const dataTestimonie = [
    {
        name: "Cynthia Gerald",
        testimony: "lorem try"
    },
    {
        name: "Femi Balogun",
        testimony: "Lorem"
    },
    {
        name: "Colling Diamond",
        testimony: "Try this"
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