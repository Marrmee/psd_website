'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import { useClickOutside } from './ClickOutside';
import { usePathname } from 'next/navigation';
import Button from './Button';
import styles from './Button.module.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkSrc, setDarkSrc] = useState('/logo-white.webp');
  // const [countdown, setCountdown] = useState('');
  // const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const dropdown = useRef<any>();
  const pathName = usePathname();

  const isActive = (path) => {
    return pathName === path;
  };

  useClickOutside(dropdown, () => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const targetDate = new Date('2024-12-10T21:00:00Z').getTime();

  //   const updateCountdown = () => {
  //     const now = new Date().getTime();
  //     const timeLeft = targetDate - now;

  //     if (timeLeft <= 0) {
  //       setIsCountdownComplete(true);
  //       setCountdown('');
  //       return;
  //     }

  //     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //     setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  //   };

  //   const interval = setInterval(updateCountdown, 1000);
  //   return () => clearInterval(interval); // Cleanup the interval on component unmount
  // }, []);

  return (
    <>
      <div className="top-0 flex min-h-[4rem] w-full items-center justify-center rounded-b-lg bg-tropicalBlue p-4 text-center text-base text-seaBlue-1050 sm:text-xl">
        <span>
          The PoSciDonDAO Protocol dApp is now LIVE on Base!&nbsp; Visit{' '}
          <Link
            className="text-steelBlue underline"
            href="https://protocol.poscidondao.com"
          >
            here
          </Link>
          {' '}to lock SCI tokens and vote on proposals!
        </span>
      </div>
      <nav
        className="
      min-h-20
      top-0
      mx-auto 
      flex 
      w-full 
      max-w-full 
      items-center 
      justify-between  
      gap-4
      sm:gap-12
      bg-seaBlue-1050
      py-4
    "
      >
        <Link
          onMouseEnter={() => setDarkSrc('/logo-blue.webp')}
          onMouseLeave={() => setDarkSrc('/logo-white.webp')}
          href="/"
          className="flex w-full items-start"
          style={{ maxWidth: '250px', height: 'auto' }} // Consistent size for logo container
        >
          <Image
            // Fixed width for the image
            width={200}
            // Adjust height as needed for the logo
            height={150}
            className="hover:cursor-pointer"
            src={`${darkSrc}`}
            alt="PoSciDonDAO's Logo: a trident attached to a DNA helix"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Link>

        <div className="hidden w-full items-start justify-end gap-12 text-lg xl:flex">
          <Link
            className={`whitespace-nowrap hover:text-seaBlue-900 ${
              isActive('/sci-token') ? 'text-seaBlue-500' : ''
            }`}
            href="/sci-token"
          >
            SCI Token
          </Link>
          <Link
            className={`whitespace-nowrap hover:text-seaBlue-900 ${
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
            rel="noopener noreferrer"
          >
            Donate
          </Link>
          <Link
            className={`hover:text-seaBlue-900 ${
              isActive('/community') ? 'text-seaBlue-500' : ''
            }`}
            href="community"
          >
            Community
          </Link>
        </div>
        <div className="flex justify-end xl:w-auto">
          <Button
            link={true}
            type={'button'}
            onClick={() => {}}
            target={'_blank'}
            text={`Visit dApp`}
            href={'https://protocol.poscidondao.com'}
            icon={''}
            style={styles.primary}
          />
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
            mt-[4.2rem]
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
              <Footer isNavBar={true} setIsOpen={setIsOpen} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
