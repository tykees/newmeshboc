"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { BsWhatsapp } from 'react-icons/bs';


const Studentbtn = () =>{
  const router = useRouter();

  // Function to handle the "Call" button click
  const handleCall = () => {
    const message = `Hello, Resplendent Tutors. I'd like to know more about your lessons.`;
    const vendorNumber = '+2347059213315'; // Replace with the actual WhatsApp number
    const whatsappLink = `https://wa.me/${vendorNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
    <div>
        <button className='flex justify-center items-center font-thin rounded-lg px-4 py-2 text-black border bg-white hover:bg-blue-400' onClick={() => handleCall()}> Quick Response <BsWhatsapp className='ml-2'/> </button>
    </div>
            
    </>
  );
}

export default Studentbtn;
