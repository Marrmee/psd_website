'use client';

import { useRef, useEffect, useState } from 'react';
import ContactUs from './components/ContactUs';
import Button from './components/Button';
import styles from './components/Button.module.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCoins } from '@fortawesome/free-solid-svg-icons';
import Faq from './components/Faq';
import useMultipleIntersectionObserver from './hooks/useMultipleIntersectionObserver';
import Divider from './components/Divider';
import Image from 'next/image';

export default function Home() {
  const sectionRefCards = useRef(null);
  const sectionRefTokenomics = useRef(null);
  const sectionRefRoadmap = useRef(null);
  const sectionRefContact = useRef(null);
  const sectionRefFaq = useRef(null);
  const observerOptions = { threshold: 0.05 };
  const [
    isVisibleCards,
    isVisibleRoadmap,
    isVisibleTokenomics,
    isVisibleContact,
    isVisibleFaq,
  ] = useMultipleIntersectionObserver(
    [
      sectionRefCards,
      sectionRefTokenomics,
      sectionRefRoadmap,
      sectionRefContact,
      sectionRefFaq,
    ],
    observerOptions
  );

  const faqs = [
    {
      question: 'What is a decentralized autonomous organisation (DAO)?',
      answer: `A DAO is an organisation where its members work towards one common goal and that is governed by programs run on blockchain technology. These programs are also called smart contracts. Using this technology, the organisation can be governed in an objective, transparent, decentralized and borderless way. PoSciDonDAO's smart contracts create a tamper-proof, verifiable, and trustless proposal and voting mechanism.`,
    },
    {
      question: 'What kind of research does PoSciDonDAO fund?',
      answer: `PoSciDonDAO funds research that focuses on identifying biomarkers that can predict treatment response or on developing personalized therapies for life-altering diseases, including but not limited to, cancer, Alzheimer's disease and diabetes.`,
    },
    {
      question: 'How can PoSciDonDAO support my research?',
      answer:
        'Besides funding your research project, PoSciDonDAO can provide scientific and commercial support for your research output. We are a diverse community with a broad range of expertise in the personalized medicine field. We will leverage our network in any way we can to support and uplift your inventions.',
    },
    {
      question: 'Who is part of the PoSciDonDAO community?',
      answer:
        "Our community consists of academic researchers, bioentrepreneurs, physicians, decentralized science enthusiasts, biotech investors, and people that care about solving life's most challenging diseases.",
    },
  ];

  return (
    <main className="flex w-full max-w-full flex-col items-center justify-center">
      <header className="animate-fadeUp flex w-full flex-col items-center justify-center py-16">
        <Hero />
        <p className="w-full py-8 text-center font-proxima text-base transition-all duration-500 md:text-lg lg:text-2xl">
          PoSciDonDAO is a Decentralized Autonomous Organisation (DAO) that
          funds personalized medicine research for{' '}
          <span className="font-proximaBold">life-altering diseases</span>{' '}
          (incl. cancer and Alzheimer's disease). Together with your help, we
          can{' '}
          <span className="font-proximaBold">change the lives of people</span>{' '}
          affected by these diseases.
        </p>
        <div className="flex gap-6">
          {/* <Button
            link={true}
            type={'button'}
            onClick={null}
            target={'_blank'}
            text={`Join our community`}
            href={'https://discord.gg/75SrHpcNSZ'}
            icon={''}
            style={styles.primaryReversed}
          /> */}
          <Button
            link={true}
            type={'button'}
            onClick={null}
            target={'_blank'}
            text={`Purchase SCI`}
            href={
              'https://app.uniswap.org/swap?exactField=input&inputCurrency=ETH&outputCurrency=0x25E0A7767d03461EaF88b47cd9853722Fe05DFD3&chain=base'
            }
            icon={''}
            style={styles.primaryWide}
          />
        </div>
      </header>
      <Divider />{' '}
      <section
        ref={sectionRefCards}
        className={`${
          isVisibleCards ? 'animate-fadeUp' : ''
        } my-16 flex w-full items-center justify-center`}
      >
        <Cards />
      </section>
      <Divider />{' '}
      <section
        ref={sectionRefTokenomics}
        className={`${isVisibleTokenomics ? 'animate-fadeUp' : ''} 
        my-16
        flex
        min-h-[300px]
        w-full
        items-center
        justify-center
        sm:min-h-[400px]
        md:min-h-[600px]
        `}
      >
        <div className="mx-auto md:w-[80%] lg:w-[70%]">
          <h2 className="mb-4 text-center text-4xl text-gray-300">
            SCI Token Allocation
          </h2>
          <div className="flex items-center justify-center">
            <Image
              alt="Overview of SCI token allocation"
              width={1000}
              height={1000}
              layout="responsive"
              src="/allocation-white.webp"
              className="flex"
            />
          </div>
        </div>
      </section>
      <Divider />{' '}
      <section
        ref={sectionRefRoadmap}
        className={`${isVisibleRoadmap ? 'animate-fadeUp' : ''} 
        my-16
        flex
        min-h-[300px]
        w-full
        items-center
        justify-center
        sm:min-h-[400px]
        md:min-h-[600px]
        `}
      >
        <div className="mx-auto md:w-[80%] lg:w-[70%]">
          <Image
            src={'/roadmap.webp'}
            className="rounded-lg"
            alt="PoSciDonDAO's roadmap for 2024"
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
      </section>
      <Divider />{' '}
      <section
        ref={sectionRefContact}
        className={`${isVisibleContact ? 'animate-fadeUp' : ''} 
        my-16
        flex
        min-h-[300px]
        w-full
        items-center
        justify-center
        sm:min-h-[400px]
        md:min-h-[600px]
        `}
      >
        <ContactUs />
      </section>
      <Divider />{' '}
      <section
        ref={sectionRefFaq}
        className={`
        my-16
        flex
        
        min-h-[300px]
        w-full
        flex-col
        items-center
        justify-center
        sm:min-h-[400px]
        md:min-h-[600px]
        ${isVisibleFaq ? 'animate-fadeUp' : ''}
      `}
      >
        <Faq faqs={faqs} />
      </section>
    </main>
  );
}
