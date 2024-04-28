'use client';

import { useRef, useEffect, useState } from 'react';
import ContactUs from './components/ContactUs';
import Button from './components/Button';
import styles from './components/Button.module.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isVisibleCards, setIsVisibleCards] = useState(false);
  const [isVisibleContact, setIsVisibleContact] = useState(false);
  const sectionRefCards = useRef(null);
  const sectionRefContact = useRef(null);

  useEffect(() => {
    // Adjust the threshold to trigger when 10% of the element is visible
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCards = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisibleCards(true);
      }
    }, observerOptions);

    const observerContact = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisibleContact(true);
      }
    }, observerOptions);

    if (sectionRefCards.current) {
      observerCards.observe(sectionRefCards.current);
    }

    if (sectionRefContact.current) {
      observerContact.observe(sectionRefContact.current);
    }

    return () => {
      if (sectionRefCards.current) {
        observerCards.unobserve(sectionRefCards.current);
      }
      if (sectionRefContact.current) {
        observerContact.unobserve(sectionRefContact.current);
      }
    };
  }, []);

  return (
    <main className="flex w-full max-w-full flex-col items-center justify-center xl+:w-[85%]">
      <header className="animate-fadeUp flex w-full flex-col items-center justify-center py-16">
        <Hero />
        <p className="w-full p-8 text-center font-proxima text-base transition-all duration-500 sm:w-[80%] md:text-lg lg:text-2xl">
          PoSciDonDAO is a Decentralized Autonomous Organisation (DAO) that
          funds personalized medicine research for{' '}
          <span className="font-proximaBold">life-altering diseases</span>{' '}
          (incl. cancer and Alzheimer's disease). Together with your help, we
          can{' '}
          <span className="font-proximaBold">change the lives of people</span>{' '}
          affected by these diseases.
        </p>
        <div className="flex gap-4">
          <Button
            link={true}
            type={'button'}
            onClick={null}
            target={'_blank'}
            text={`Join our community`}
            href={'https://discord.gg/75SrHpcNSZ'}
            icon={
              <FontAwesomeIcon
                icon={faUsers}
                className="pr-2"
                style={{ color: '#FDFDFD' }}
              />
            }
            style={styles.primary}
          />
        </div>
      </header>
      <hr className="w-full border-b-[1px] border-gray-200 dark:border-slate-700"></hr>
      <section
        ref={sectionRefCards}
        className={`${
          isVisibleCards ? 'animate-fadeUp' : ''
        } my-16 flex w-full items-center justify-center px-8`}
      >
        <Cards />
      </section>
      <hr className="w-full border-b-[1px] border-gray-200 dark:border-slate-700"></hr>
      <section
        ref={sectionRefContact}
        className={`${isVisibleContact ? 'animate-fadeUp' : ''} 
        my-16
        flex
        min-h-[300px]
        w-full
        items-center
        justify-center
        px-8
        sm:min-h-[400px]
        md:min-h-[600px]
        `}
      >
        <div>
          <ContactUs />
        </div>
      </section>
    </main>
  );
}
