"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

import { BsWhatsapp } from 'react-icons/bs';


const Joinus = () =>{
  const router = useRouter();

  // Function to handle the "Call" button click
  const handleCall = () => {
    const message = `Hello, Resplendent Tutors. I'd love to join the team of tutors.`;
    const vendorNumber = '+2347059213315'; // Replace with the actual WhatsApp number
    const whatsappLink = `https://wa.me/${vendorNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
    <div>
        <button className='hover:animate-bounce flex justify-center items-center rounded-lg px-8 py-3 text-white bg-blue-600 hover:bg-blue-400' onClick={() => handleCall()}> Join Us <BsWhatsapp className='ml-2'/> </button>
    </div>
            
    </>
  );
}

export default Joinus;
