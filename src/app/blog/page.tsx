'use client';

import BlogPostCard from '../components/BlogPostCard';
import { Metadata } from 'next';
import { useRef } from 'react';
import useMultipleIntersectionObserver from '../hooks/useMultipleIntersectionObserver';

const url = new URL('https://www.poscidondao.com/blog');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Blog',
  description: `All of PoSciDonDAO's blog articles on decentralized science, tokenomics, personalized medicine, research funding and more`,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function Blog() {
  const headerRef = useRef(null);
  const postsRef = useRef(null);
  
  const [isVisibleHeader, isVisiblePosts] = useMultipleIntersectionObserver(
    [headerRef, postsRef],
    { threshold: 0.1, rootMargin: '50px' }
  );

  return (
    <main
      className="
          flex
          w-full 
          max-w-full
          flex-col
          items-center
          justify-center
          "
    >
      <header
        ref={headerRef}
        className={`transition-all duration-1000 ease-out ${
          isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } my-16 flex flex-col items-center justify-center`}
      >
        <h1
          className={`
            flex 
            max-w-full
            items-center
            justify-center
            text-center
            font-proximaSemiBold
            text-4xl
            text-gray-300 
            sm:text-5xl
            lg:text-6xl
            `}
        >
          PoSciDonDAO's Blog
        </h1>
        {/* <p
          className="
              mx-auto 
              flex 
              w-[80%] 
              items-center 
              justify-center 
              pt-8
              text-center
              text-base
            "
        >
          PoSciDonDAO is a member-owned worldwide organisation that funds and
          incubates personalized medicine research projects with the goal to
          commercialize their research output. Join our community of
          personalized medicine researchers, entrepreneurs, investors and donors
          that will go above and beyond to assist you from project submission to
          funding and further.
        </p> */}
      </header>
      <section
        ref={postsRef}
        id="blog-posts"
        className={`transition-all duration-1000 ease-out ${
          isVisiblePosts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } mx-auto grid w-[80%] place-items-center sm:w-[70%]`}
      >
        <BlogPostCard
          src={'/blog-banner.png'}
          alt={''}
          date={'November 4, 2023'}
          title={
            'Introducing PoSciDonDAO: The first community-owned collective funding personalized medicine research for life-altering diseases.'
          }
          href={'/blog-article/introducing-poscidondao'}
          text={`
            Hello web3 and scientists,

            we are PoSciDonDAO!
            `}
        />
      </section>
    </main>
  );
}
