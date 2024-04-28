'use client';

import { useRef, useEffect, useState } from 'react';

export default function Community() {
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);
  const headerRef = useRef(null);
  const visbilityThreshold = 0.05;

  useEffect(() => {
    const observerHeader = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisibleHeader(true);
        }
      },
      { threshold: visbilityThreshold }
    );
    if (headerRef.current) {
      observerHeader.observe(headerRef.current);
    }
    return () => {
      if (headerRef.current) {
        observerHeader.unobserve(headerRef.current);
      }
    };
  }, []);
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <header
        ref={headerRef}
        className={`${
          isVisibleHeader ? 'animate-fadeUp' : ''
        } flex min-h-[300px] w-full flex-col items-center justify-center gap-8 p-8 text-sm sm:min-h-[400px] sm:text-base md:min-h-[700px] md:flex-row md:items-center`}
      >
        <h1
          className={`
          flex 
          max-w-full
          items-center
          justify-center
          text-center
          font-proximaSemiBold
          text-3xl
          text-seaBlue-700 dark:text-gray-300 
          sm:text-5xl
          lg:text-6xl
          `}
        >
          The PoSciDonDAO Community
        </h1>
      </header>
    </main>
  );
}
