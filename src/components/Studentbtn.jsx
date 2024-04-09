"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { BsWhatsapp } from 'react-icons/bs';


const Studentbtn = () =>{
  const router = useRouter();

  // Function to handle the "Call" button click
  const handleCall = () => {
    const message = `Hello, I'd like to know more about your courses.`;
    const vendorNumber = '+2348105197239'; // Replace with the actual WhatsApp number
    const whatsappLink = `https://wa.me/${vendorNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
    <div>
        <button className='flex justify-center items-center font-thin rounded-lg px-4 py-2 text-black border bg-white hover:bg-green-400' onClick={() => handleCall()}> WhatsApp <BsWhatsapp className='ml-2'/> </button>
    </div>
            
    </>
  );
}

export default Studentbtn;
