"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

import { BsWhatsapp } from 'react-icons/bs';


const Exambtn = () =>{
  const router = useRouter();

  // Function to handle the "Call" button click
  const handleCall = () => {
    const message = `Hello, Meshboc. I want to enrol.`;
    const vendorNumber = '+2348105197239'; // Replace with the actual WhatsApp number
    const whatsappLink = `https://wa.me/${vendorNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
    <div>
        <button className='hover:animate-bounce flex justify-center items-center rounded-lg px-8 py-3 bg-white hover:bg-orange-100' onClick={() => handleCall()}> Message <BsWhatsapp className='ml-2'/> </button>
    </div>
            
    </>
  );
}

export default Exambtn;
