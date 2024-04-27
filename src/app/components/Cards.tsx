'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Cards() {
  const [resSrc, setResSrc] = useState('/research-white.webp');
  const [comSrc, setComSrc] = useState('/community-white.webp');
  const [tokSrc, setTokSrc] = useState('/tokens-white.webp');
  const handleMouseEnter = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const target = event.target as HTMLSpanElement; // Type assertion here
    target.style.transform = 'translateX(8px)';
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const target = event.target as HTMLSpanElement; // Type assertion here
    target.style.transform = 'translateX(0)';
  };

  return (
    <div
      className="
        flex
        flex
        min-h-[300px]
        max-w-full
        flex-col
        items-center
        justify-center
        px-2
        text-sm 
        sm:min-h-[400px] 
        sm:px-8
        sm:text-base 
        md:min-h-[600px]
        md:items-center 
        md:justify-center
        "
    >
      <div
        className="
        flex 
        flex-col 
        justify-start 
        gap-12
        md:w-full
        md:flex-row 
      "
      >
        <div
          className="
          flex 
          w-full
          max-w-full
          flex-col
          items-center
          justify-start 
          "
        >
          <Link
            href="/research"
            className="
          flex
          items-center
          justify-center
          rounded-3xl
          md:w-full
          "
          >
            <Image
              onMouseEnter={() => {
                setResSrc('/research-blue.webp');
              }}
              onMouseLeave={() => {
                setResSrc('/research-white.webp');
              }}
              className="
            flex
            w-full
            max-w-full
            items-start
            justify-start 
            rounded-3xl
            border-2
            border-seaBlue-700
              "
              loading="eager"
              width={600}
              height={600}
              layout="responsive"
              alt="Genetic code surrounding the word 'research'"
              src={`${resSrc}`}
            />
          </Link>
          <div
            className="          
          flex 
          max-w-full 
          flex-col 
          items-center   
          justify-center
          whitespace-pre-line 
          text-center
          "
          >
            <h2 className="pt-2 font-proximaSemiBold text-2xl">
              Fund your research
            </h2>
            <p
              className="
            w-[80%]
            py-2
            lg:w-[70%]           
            "
            >
              Interact with personalized medicine researchers and receive
              funding for your project.
            </p>
            <Link
              className="group flex w-full cursor-pointer items-center justify-center pb-2 font-proximaItalic text-seaBlue-700 dark:text-steelBlue sm:pb-0"
              href="/research"
            >
              Get your project funded{' '}
              <span className="ml-1 transform transition-transform duration-300 ease-out group-hover:translate-x-[10px]">
                {'>'}
              </span>
            </Link>
          </div>
        </div>
        <div
          className="
          flex 
          w-full
          max-w-full
          flex-col
          items-center
          justify-start 
          "
        >
          <Link
            href="https://forms.gle/hY52XW7inek4ynrR6"
            target="_blank"
            className="
              flex
              items-center
              justify-center
              rounded-3xl
              md:w-full
              "
          >
            <Image
              onMouseEnter={() => {
                setComSrc('/community-blue.webp');
              }}
              onMouseLeave={() => {
                setComSrc('/community-white.webp');
              }}
              className="
              flex
              w-full
              max-w-full
              items-start
              justify-start 
              rounded-3xl
              border-2
              border-seaBlue-700
              "
              loading="eager"
              width={600}
              height={600}
              layout="responsive"
              alt="Genetic code surrounding the word 'community'"
              src={`${comSrc}`}
            />
          </Link>
          <div
            className="
          flex 
          max-w-full 
          flex-col 
          items-center
          justify-center
          whitespace-pre-line
          text-center
          "
          >
            <h2 className="pt-2 font-proximaSemiBold text-2xl">
              Become part of the community
            </h2>
            <p
              className="
              mx-auto             
              w-[80%]
              py-2
              lg:w-[70%]
              "
            >
              Leverage your knowledge and skills to innovate personalized
              medicine research. PoSciDonDAO is built by people like you.
            </p>
            <Link
              className="group flex w-full cursor-pointer items-center justify-center pb-2 font-proximaItalic text-seaBlue-700 dark:text-steelBlue sm:pb-0"
              href="https://forms.gle/hY52XW7inek4ynrR6"
              target="_blank"
            >
              Become a contributor{' '}
              <span className="ml-1 transform transition-transform duration-300 ease-out group-hover:translate-x-[10px]">
                {'>'}
              </span>
            </Link>
          </div>
        </div>
        <div
          className="
          flex 
          h-full
          w-full
          max-w-full
          flex-col
          items-center
          justify-start 
          "
        >
          <Link
            href="/sci-token"
            className="
          flex
          items-center
          justify-center
          rounded-3xl
          md:w-full
              "
          >
            <Image
              onMouseEnter={() => {
                setTokSrc('/tokens-blue.webp');
              }}
              onMouseLeave={() => {
                setTokSrc('/tokens-white.webp');
              }}
              className="
            flex
            w-full
            max-w-full
            items-start
            justify-start 
            rounded-3xl
            border-2
            border-seaBlue-700
              "
              loading="eager"
              width={600}
              height={600}
              layout="responsive"
              alt="Genetic code surrounding the word 'tokens'"
              src={`${tokSrc}`}
            />
          </Link>
          <div
            className="          
            flex 
            max-w-full 
            flex-col 
            items-center
            justify-center
            whitespace-pre-line 
            text-center
            "
          >
            <h2 className="pt-2 font-proximaSemiBold text-2xl">
              Our Token Model
            </h2>
            <p
              className="
              w-[80%]             
              py-2
              lg:w-[70%]
              "
            >
              Everything you need to know about SCI and PO, the tokens that
              drive our ecosystem.
            </p>
            <Link
              href="/sci-token"
              className="group flex w-full cursor-pointer items-center justify-center pb-2 font-proximaItalic text-seaBlue-700 dark:text-steelBlue sm:pb-0"
            >
              Explore our tokens
              <span className="ml-1 transform transition-transform duration-300 ease-out group-hover:translate-x-[10px]">
                {'>'}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
