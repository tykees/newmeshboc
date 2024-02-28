import React from 'react';
import Image from 'next/image';

const dataTestimonie = [
    {
        name: "Mrs F. Odili",
        testimony: "Both our kids have greatly improved academically and character wise, I am impressed And happy with your service God bless you for all you do."
    },
    {
        name: "Mrs M. Petrolina",
        testimony: "My daughter is more studious now and enjoys reading because of your guidance. Not to mention the remarkable change in her grades. I can not thank you enough for a job well done. Thank you."
    },
    {
        name: "Mrs C. Onyaeze",
        testimony: "With your guidance my 4years old daughter learnt to read beautifully in a space of one month. Best referral ever... you guys are indeed the best. God bless you."
    },
]

const Testimonies = () => {
  return (
    <div className='bg-slate-50'>
        <p className='text-center pt-20 pt text-4xl'>People say we know our craft</p>
        <p className='text-slate-600 text-center text-l'>See proof here!</p>
        <div className='mx-4'>
            {dataTestimonie.map((item, index)=>(
                <div className='container mx-auto border animate bg-white rounded-xl p-10 shadow-lg mb-10 space-y-5 mt-5 flex justify-between' key={index}>
                    <div>
                    <p className='text-xl text-slate-700'>{item.name}</p>
                    <p className='text-l'>{item.testimony}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonies;