"use client"; // Add this line at the beginning

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';
import Logo from '../../public/intechwhite-1.png';



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
      setShowMenu(false); // Close the menu on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setShowMenu(!showMenu);
    }
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar shadow-sm ">
      <div className="logo">
        <Link href={'/'} className="links w-[50px]">
          <Image className='w-[120px]' src={Logo} alt="" />
        </Link>
      </div>

      {isMobile ? (
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
        </div>
      ) : (
        <ul className="nav-links text-md container flex items-center gap-3 justify-center text-center">
          <li>
            <Link href={'/#subjects'} className="links">
              Resources
            </Link>
          </li>
          <li>
            <Link href={'/about'} className="links">
              Why Meshboc?
            </Link>
          </li>
          <li>
            <Link href={'/'} className="links">
              Community
            </Link>
          </li>
          <li>
            <Link href={'/business'} className="links">
              Services
            </Link>
          </li>
          <li>
            <Link href={'/'} className="links">
              Courses
            </Link>
          </li>
          <li>
            <Link href={'/'} className="links">
              Certificates
            </Link>
          </li>
          <li>
            <Link href={'/'} className="links">
              FAQs
            </Link>
          </li>
          <li className='justify-end'>
            <Link href={'/enrol'} className="p-2 ml-20 flex text-md justify-end px-6 pt-1 text-black font-medium bg-cyan-500 rounded-md hover:bg-cyan-300 baseline" onClick={handleMenuClick}>Register</Link>
          </li>
        </ul>
      )}

      {isMobile && (
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button className="close-button" onClick={closeMobileMenu}>
            X
          </button>
          <ul>
            <li>
              <Link href={'/'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/about'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Why Meshboc
              </Link>
            </li>
            <li>
              <Link href={'/'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Community
              </Link>
            </li>
            <li>
              <Link href={'/business'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Services
              </Link>
            </li>
            <li>
              <Link href={'/'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Courses
              </Link>
            </li>
            <li>
              <Link href={'/'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Certificate
              </Link>
            </li>
            <li>
              <Link href={'/'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                FAQs
              </Link>
            </li>
            <li className='justify-end'>
            <Link href={'/enrol'} className="p-2 ml-20 flex text-2xl justify-end px-6 pt-1 text-black font-medium bg-cyan-500 rounded-md hover:bg-cyan-300 baseline" onClick={handleMenuClick}>Register</Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
