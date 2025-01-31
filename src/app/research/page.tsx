'use client';

import { Metadata } from 'next';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import ResearchInfo from '@/app/components/ResearchInfo';
import { useRef } from 'react';
import useMultipleIntersectionObserver from '../hooks/useMultipleIntersectionObserver';

const url = new URL('https://www.poscidondao.com/research');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Fund Your Research Project',
  description: `Fast, unbiased and decentralized funding for your personalized medicine research project
  `,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function ProjectFunding() {
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  
  const [isVisibleHeader, isVisibleInfo] = useMultipleIntersectionObserver(
    [headerRef, infoRef],
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
          We Fund Research That Brings The Right Treatment To The Right Patient
        </h1>
        <p
          className="
              mx-auto 
              flex 
              w-[80%] 
              items-center 
              justify-center 
              py-8
              text-center
              text-base
            "
        >
          PoSciDonDAO is a member-owned worldwide organisation that funds and
          incubates personalized medicine research projects with the goal to
          commercialize their research output. Join our community of personalized medicine researchers,
          entrepreneurs, investors and donors that will go above and beyond to
          assist you from project submission to funding and further.
        </p>
        <Button
          link={true}
          target={''}
          href={'/submit-project'}
          style={styles.primary}
          onClick={''}
          type={'button'}
          text={'Submit your project proposal'}
          icon={''}
        />
      </header>
      <section 
        ref={infoRef}
        className={`transition-all duration-1000 ease-out ${
          isVisibleInfo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } mb-16 flex w-full items-center justify-center`}
      >
        <ResearchInfo />
      </section>
    </main>
  );
}
