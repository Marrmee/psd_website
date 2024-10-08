'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import { useClickOutside } from './ClickOutside';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkSrc, setDarkSrc] = useState('/logo-white.webp');
  const dropdown = useRef<any>();
  const pathName = usePathname();

  const isActive = (path) => {
    return pathName === path;
  };

  useClickOutside(dropdown, () => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="
        top-0
        mx-auto
        flex 
        min-h-20 
        w-full 
        max-w-full 
        items-center 
        justify-between  
        gap-12
        bg-seaBlue-1050
        py-4
      "
    >
      <Link
        onMouseEnter={() => setDarkSrc('/logo-blue.webp')}
        onMouseLeave={() => setDarkSrc('/logo-white.webp')}
        href="/"
        className="flex items-start"
        style={{ maxWidth: '250px', height: 'auto' }} // Consistent size for logo container
      >
        <Image
          width={200} // Fixed width for the image
          height={150} // Adjust height as needed for the logo
          className="hover:cursor-pointer"
          layout="responsive"
          src={`${darkSrc}`}
          alt="PoSciDonDAO's Logo: a trident attached to a DNA helix"
        />
      </Link>
      <div className="hidden w-full items-start justify-end gap-12 text-lg xl:flex">
        <Link
          className={`hover:text-seaBlue-900 ${
            isActive('/sci-token') ? 'text-seaBlue-500' : ''
          }`}
          href="/sci-token"
        >
          SCI Token
        </Link>
        <Link
          className={`hover:text-seaBlue-900 ${
            isActive('/research') ? 'text-seaBlue-500' : ''
          }`}
          href={'/research'}
        >
          For Scientists
        </Link>
        <Link
          className={`hover:text-seaBlue-900 ${
            isActive('/projects') ? 'text-seaBlue-500' : ''
          }`}
          href={'/projects'}
        >
          Projects
        </Link>
        <Link
          className="hover:text-seaBlue-900"
          href="https://protocol.poscidondao.com/donate"
          target="_blank"
        >
          Donate
        </Link>
        <Link
          className={`hover:text-seaBlue-900 ${
            isActive('/get-involved') ? 'text-seaBlue-500' : ''
          }`}
          href="community"
        >
          Community
        </Link>
      </div>

      <div ref={dropdown} className="flex items-center">
        <div className="flex items-center justify-center pb-2">
          <button
            className={`group relative h-8 w-8 transition-all duration-300`}
            onClick={toggleMenu}
          >
            <div
              className={`absolute left-1/2 top-1/2 h-1 w-8 transform rounded bg-[#FDFDFD] transition-all  duration-300 group-hover:bg-seaBlue-700 ${isOpen ? 'mt-1 -translate-x-1/2 -translate-y-1/2 rotate-45' : '-translate-x-1/2 -translate-y-[7px]'}`}
            ></div>
            <div
              className={`absolute left-1/2 top-1/2 mt-1 h-1 w-8 transform rounded bg-[#FDFDFD] transition-all duration-300 group-hover:bg-seaBlue-700 ${isOpen ? 'mt-0 opacity-0' : '-translate-x-1/2 -translate-y-1/2'}`}
            ></div>
            <div
              className={`absolute left-1/2 top-1/2 mt-1 h-1 w-8 transform rounded bg-[#FDFDFD] transition-all duration-300 group-hover:bg-seaBlue-700 ${isOpen ? 'mt-1 -translate-x-1/2 -translate-y-1/2 -rotate-45' : '-translate-x-1/2 translate-y-[7px]'}`}
            ></div>
          </button>
        </div>
        {isOpen && (
          <div
            className="
              absolute 
              right-0
              top-20
              z-10
              flex 
              w-full
              flex-col 
              items-center
              justify-center
              gap-8 
              border-b-2 
              border-seaBlue-900
              bg-seaBlue-1050
              p-4
              sm:items-center
            "
          >
            <Footer isNavBar={true} setIsOpen={setIsOpen}/>
          </div>
        )}
      </div>
    </nav>
  );
}
