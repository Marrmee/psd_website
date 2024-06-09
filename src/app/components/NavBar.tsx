'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import { useClickOutside } from './ClickOutside';
import { usePathname } from 'next/navigation';
import { MotionConfig, motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('/logo-black.webp');
  const [darkSrc, setDarkSrc] = useState('/logo-white.webp');
  const dropdown = useRef<any>();
  const pathName = usePathname();

  const VARIANTS = {
    top: {
      open: {
        rotate: ['0deg', '0deg', '45deg'],
        top: ['35%', '50%', '50%'],
      },
      closed: {
        rotate: ['45deg', '0deg', '0deg'],
        top: ['50%', '50%', '35%'],
      },
    },
    middle: {
      open: {
        rotate: ['0deg', '0deg', '-45deg'],
      },
      closed: {
        rotate: ['-45deg', '0deg', '0deg'],
      },
    },
    bottom: {
      open: {
        rotate: ['0deg', '0deg', '45deg'],
        bottom: ['35%', '50%', '50%'],
        left: '50%',
      },
      closed: {
        rotate: ['45deg', '0deg', '0deg'],
        bottom: ['50%', '50%', '35%'],
        left: 'calc(50% + 10px)',
      },
    },
  };

  const isActive = (path) => {
    return pathName === path;
  };

  useClickOutside(dropdown, () => setIsOpen(false));

  return (
    <nav
      className="
      top-0
      mx-8
      flex
      h-20
      w-full
      max-w-full
      items-center
      justify-between
      bg-gray-100
      px-6
      py-4
      dark:bg-seaBlue-1050
        "
    >
      <Link
        onMouseEnter={() => setSrc('/logo-blue.webp')}
        onMouseLeave={() => setSrc('/logo-black.webp')}
        href="/"
        className="flex w-[20rem] dark:hidden lg:w-[25rem]"
      >
        <Image
          width={1000}
          height={1000}
          className="hover:cursor-pointer"
          layout="responsive"
          src={`${src}`}
          alt="PoSciDonDAO's Logo: a trident attached to a DNA helix"
        />
      </Link>
      <Link
        onMouseEnter={() => setDarkSrc('/logo-blue.webp')}
        onMouseLeave={() => setDarkSrc('/logo-white.webp')}
        href="/"
        className="hidden w-[20rem] dark:flex lg:w-[25rem]"
      >
        <Image
          width={1000}
          height={1000}
          className="hover:cursor-pointer"
          layout="responsive"
          src={`${darkSrc}`}
          alt="PoSciDonDAO's Logo: a trident attached to a DNA helix"
        />
      </Link>
      <div className="hidden w-full items-center justify-end gap-12 text-lg lg:flex">
        <Link
          className={`hover:text-seaBlue-900 ${
            isActive('/research')
              ? 'text-seaBlue-400 dark:text-seaBlue-500'
              : ''
          }`}
          href={'/research'}
        >
          For Scientists
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
            isActive('/get-involved')
              ? 'text-seaBlue-400 dark:text-seaBlue-500'
              : ''
          }`}
          href="community"
          // href="https://forms.gle/g52VVJTXCnz7b8LU7"
        >
          Community
        </Link>
        <Link
          className={`hover:text-seaBlue-900 ${
            isActive('/sci-token')
              ? 'text-seaBlue-400 dark:text-seaBlue-500'
              : ''
          }`}
          href="/sci-token"
        >
          SCI Token
        </Link>
      </div>

      <div ref={dropdown} className="flex items-center">
        <DarkModeToggle />
        <div className="ml-2 flex">
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <motion.button
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
              onClick={() => setIsOpen(!isOpen)}
              className="group relative h-14 w-10 rounded-full transition-colors"
            >
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-1 w-10 bg-seaBlue-700 group-hover:bg-seaBlue-500 dark:bg-gray-300 dark:group-hover:bg-seaBlue-700"
                style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
              />
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-1 w-10 bg-seaBlue-700 group-hover:bg-seaBlue-500 dark:bg-gray-300 dark:group-hover:bg-seaBlue-700"
                style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
              />
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-1 w-5 bg-seaBlue-700 group-hover:bg-seaBlue-500 dark:bg-gray-300 dark:group-hover:bg-seaBlue-700"
                style={{
                  x: '-50%',
                  y: '50%',
                  bottom: '35%',
                  left: 'calc(50% + 10px)',
                }}
              />
            </motion.button>
          </MotionConfig>
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
            gap-8 border-b-2 
            border-seaBlue-900
            bg-gray-100
            p-4
            dark:bg-seaBlue-1050
            sm:items-center
            "
          >
            <Footer />
          </div>
        )}
      </div>
    </nav>
  );
}
