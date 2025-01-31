'use client';

import { useRef } from 'react';
import useMultipleIntersectionObserver from '../hooks/useMultipleIntersectionObserver';
import BlogPostCard from './BlogPostCard';

export default function BlogContent() {
  const headerRef = useRef(null);
  const postsRef = useRef(null);
  
  const [isVisibleHeader, isVisiblePosts] = useMultipleIntersectionObserver(
    [headerRef, postsRef],
    { threshold: 0.1, rootMargin: '50px' }
  );

  return (
    <main className="flex w-full max-w-full flex-col items-center justify-center">
      <header
        ref={headerRef}
        className={`transition-all duration-1000 ease-out ${
          isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } my-16 flex flex-col items-center justify-center`}
      >
        <h1 className="flex max-w-full items-center justify-center text-center font-proximaSemiBold text-4xl text-gray-300 sm:text-5xl lg:text-6xl">
          PoSciDonDAO's Blog
        </h1>
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