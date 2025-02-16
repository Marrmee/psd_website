'use client';

import Image from "next/image";
import Link from 'next/link';
import Socials from './Socials';
import Logo from '/public/logo.svg';

export default function Footer({ isNavBar, setIsOpen }) {
  return (
    (<div
      className="
      items-between 
      mx-auto
      flex
      w-[90%] 
      w-full
      flex-col justify-between
      pt-8
      "
    >
      <div
        className=" 
        flex
        "
      >
        <div
          className="
          flex 
          flex-col
          items-center
          justify-between
          "
        >
          <Link
            href="/"
            className="flex w-[5rem] transition-all duration-500 ease-in sm:w-[10rem]"
            onClick={() => isNavBar && setIsOpen(false)}
          >
            <Image
              width={1000}
              height={1000}
              src={Logo}
              alt="PoSciDon logo consisting of a trident on top of a DNA helix"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
        </div>
        <div
          className="
        md:gap-18 
        xl:gap-22 
        grid 
        w-full 
        max-w-full 
        grid-cols-2 
        items-start 
        justify-start 
        gap-6
        transition-all
        duration-500
        ease-in
        sm:px-4 
        md:grid-cols-3 
        lg:gap-20
        "
        >
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700
            "
            >
              ABOUT POSCIDONDAO
            </p>
            <Link
              className="text-gray-300 hover:text-seaBlue-700"
              href="/research"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              For Scientists
            </Link>
            <Link
              className="text-gray-300 hover:text-seaBlue-700"
              href="/projects"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="text-gray-300 hover:text-seaBlue-700"
              href="/sci-token"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              SCI Token
            </Link>
            <Link
              
              target="_blank"
                rel="noopener noreferrer"
              locale={false}
              className="text-gray-300 hover:text-seaBlue-700"
              href="/Whitepaper.pdf"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Whitepaper
            </Link>
            <Link
              
              target="_blank"
                rel="noopener noreferrer"
              locale={false}
              className="text-gray-300 hover:text-seaBlue-700"
              href="https://poscidondao.gitbook.io/poscidondao/"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Litepaper
            </Link>
            <Link
              className="text-gray-300 hover:text-seaBlue-700"
              href="/blog"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700
            "
            >
              GET INVOLVED
            </p>
            <Link
              className="text-gray-300 hover:text-seaBlue-700"
              href="/community"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Community
            </Link>
            <Link
              className="hover:text-seaBlue-700"
              href="https://protocol.poscidondao.com/donate"
              target="_blank"
                rel="noopener noreferrer"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Donate
            </Link>
            <Link
              className="text-gray-300 hover:text-seaBlue-700"
              href="/submit-project"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Submit Project
            </Link>
            <Link
              
              className="text-gray-300 hover:text-seaBlue-700"
              href="https://discord.gg/75SrHpcNSZ"
              target="_blank"
                rel="noopener noreferrer"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Join our Discord
            </Link>
            <Link
              
              className="text-gray-300 hover:text-seaBlue-700"
              href="https://twitter.com/poscidondao"
              target="_blank"
                rel="noopener noreferrer"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Join our Twitter
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700 
            "
            >
              OTHER
            </p>
            <Link
              
              locale={false}
              className="text-gray-300 hover:text-seaBlue-700"
              target="_blank"
                rel="noopener noreferrer"
              href={'/brand-guidelines.pdf'}
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Brand Guidelines
            </Link>
            <Link
              className="text-gray-300 hover:text-seaBlue-700"
              href="/privacy-policy"
              onClick={() => isNavBar && setIsOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <Socials />
    </div>)
  );
}
