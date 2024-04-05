'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import { useClickOutside } from './ClickOutside';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[0.25rem] w-8 my-[0.2rem] rounded-full bg-black transition ease transform duration-300`;
  const [src, setSrc] = useState('/black-logo.webp');
  const dropdown = useRef<any>();
  useClickOutside(dropdown, () => setIsOpen(false));

  return (
    <nav
      className="
      top-0
      flex
      h-20
      w-full
      min-w-full
      items-center
      justify-between
      border-b-2
      border-seaBlue-700
      bg-[#FDFDFD]
      px-4
        "
    >
      <Link
        onMouseEnter={() => setSrc('/blue-logo.webp')}
        onMouseLeave={() => setSrc('/black-logo.webp')}
        href="/"
        className=''
      >
        <Image
          width={300}
          height={200}
          className="hover:cursor-pointer w-full"
          src={`${src}`}
          alt="PoSciDonDAO's Logo: a trident attached to a DNA helix"
        />
      </Link>
      <div className="hidden w-full items-center justify-end gap-12 lg:flex">
        <Link className="hover:text-seaBlue-700" href={'/research'}>
          For scientists
        </Link>
        {/* <Link
          className="hover:text-seaBlue-700"
          href="https://test.poscidondao.com/donation"
          target="_blank"
        >
          Become a donor
        </Link> */}
        <Link
          className="hover:text-seaBlue-700"
          href="https://forms.gle/g52VVJTXCnz7b8LU7"
          target="_blank"
        >
          Contribute
        </Link>
        <Link className="hover:text-seaBlue-700" href="/sci-token">
          SCI token
        </Link>
      </div>
      <div ref={dropdown} className="flex items-center">
        <div className="ml-10 flex">
          <button
            aria-label="Navbar button"
            className="group flex h-9 w-6 flex-col items-center justify-center rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'mb-[0.35rem] translate-y-3 rotate-45 group-hover:bg-seaBlue-700 group-hover:opacity-100'
                  : 'group-hover:bg-seaBlue-700 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'opacity-0'
                  : 'group-hover:bg-seaBlue-700 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? '-translate-y-3 -rotate-45 group-hover:bg-seaBlue-700 group-hover:opacity-100'
                  : 'group-hover:bg-seaBlue-700 group-hover:opacity-100'
              }`}
            />
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
            gap-8 border-b-2 border-seaBlue-700 bg-white
            p-4
            sm:items-center
            "
          >
            <div
              className="
            md:w-[100%]
            lg:w-[85%]
            xl:w-[65%]
          "
            >
              <Footer />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
