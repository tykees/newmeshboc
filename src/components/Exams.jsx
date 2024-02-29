import React from 'react';
import Exambtn from './Exambtn';


const allExams = [
    {
       title: "Waec/neco Exams",
       link: "/exams",
    },
    {
        title: "Jamb Exams",
        link: "/exams",

     },
     {
        title: "IELTS Exams",
        link: "/exams",
     },
     {
        title: "Other External Exams",
        link: "/exams",
     },
]

const Exams = () => {
  return (
    <> 
    <div className='bg-blue-600 h-[inherit] mt-20 flex flex-col items-center'>
    <h2 className=' text-center mt-5 py-5 text-white font-bold text-3xl head_text'>Are you preparation for...</h2>
    <div className='container mx-auto flex flex-wrap justify-between'>
        {allExams.map((item, index) => (
            <div className='text-center' key={index}>
                <p className='mx-5 text-l mt-5  text-white p-2 rounded shadow-md'>{item.title}</p>
            </div>
        ))}
    </div>
    <div className='flex mt-5 pt-5 pb-5 justify-center items-center'>
      <Exambtn/>
    </div>
    </div>
    </>
  )
}

export default Exams;