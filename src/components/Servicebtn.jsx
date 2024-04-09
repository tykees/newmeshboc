"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

import { BsWhatsapp } from 'react-icons/bs';


const Servicebtn = () =>{
  const router = useRouter();

  // Function to handle the "Call" button click
  const handleCall = () => {
    const message = `Hello, Meshboc. I need your Service.`;
    const vendorNumber = '+2348105197239'; // Replace with the actual WhatsApp number
    const whatsappLink = `https://wa.me/${vendorNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
    <div>
        <button className='hover:animate-bounce flex justify-center items-center rounded-lg px-8 py-3 text-black bg-cyan-400 hover:bg-green-500' onClick={() => handleCall()}> WhatsApp <BsWhatsapp className='ml-2'/> </button>
    </div>
            
    </>
  );
}

export default Servicebtn;
