'use client';

import { useRef, useEffect, useState } from 'react';
import Button from './Button';
import styles from '@/app/components/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CardMember from './CardMember';
import useMultipleIntersectionObserver from '../hooks/useMultipleIntersectionObserver';
import Divider from './Divider';

export default function Community() {
  const headerRef = useRef(null);
  const crewsRef = useRef(null);
  const teamRef = useRef(null);

  const [isVisibleHeader, isVisibleCrews, isVisibleTeam] =
    useMultipleIntersectionObserver([headerRef, crewsRef, teamRef], {
      threshold: 0.05,
    });
  const items = [
    {
      title: 'Operations',
      content:
        'The Operations Crew is dedicated to keep all the DAO operations running smoothly. This includes tokenomics, marketing, governance, community building and onboarding, branding, and managing the election process for scientific experts.',
    },
    {
      title: 'Due Diligence',
      content:
        'Scientific experts elected by the community will become part of the Due Diligence Crew. These crew members will dedicate their expertise to source and review ground-breaking personalized medicine-focused research projects.',
    },
  ];

  const members = [
    {
      src: '/marco.webp',
      alt: 'Co-founder Marco',
      name: 'Marco Huberts',
      tags: [
        { type: 'core', value: 'Core' },
        { type: 'dueDiligence', value: 'Due Diligence' },
      ],
      description:
        'Co-founder of PoSciDonDAO. Marco has led personalized medicine research projects involving viro-immunotherapies for pancreatic cancer. Marco builds the on-chain ecosystem and sources research projects for PoSciDonDAO.',
      twitterUsername: 'marco_poscidon',
      linkedinUsername: 'marcohuberts',
    },
    {
      src: '/ayat.webp',
      alt: 'Co-founder Ayat',
      name: 'Ayat Abourashed',
      tags: [
        { type: 'core', value: 'Core' },
        { type: 'dueDiligence', value: 'Due Diligence' },
      ],
      description:
        'Co-founder of PoSciDonDAO. As an infectious disease epidemiologist, Ayat has established and led many research projects. Her branding, marketing and data science skills form the foundation of PoSciDonDAO.',
      twitterUsername: 'ayatabourashed',
      linkedinUsername: 'ayatea',
    },
    {
      src: '/rakhan.webp',
      alt: 'Contributor Rakhan',
      name: 'Rakhan Aimbetov',
      tags: [
        { type: 'core', value: 'Core' },
        { type: 'dueDiligence', value: 'Due Diligence' },
      ],
      description:
        'Rakhan has extensive experience in biotech research and development and as a deal sourcer. He will be sourcing and reviewing personalized medicine research projects for PoSciDonDAO.',
      twitterUsername: 'r_aimbetov',
      linkedinUsername: 'raimbetov',
    },
    {
      src: '/michael.webp',
      alt: 'Contributor Michael',
      name: 'Michael Mati',
      tags: [
        { type: 'core', value: 'Core' },
        { type: 'operations', value: 'Operations' },
      ],
      description:
        'Michael has years of experience as DAO operator and Contrent Strategist in the DeSci field. His experience will help bring PoSciDonDAO to the masses.',
      twitterUsername: '_marti_x',
      linkedinUsername: 'michael-mati',
    },
    {
      src: '/omar.webp',
      alt: 'Contributor Michael',
      name: 'Omar Saleem',
      tags: [
        { type: 'core', value: 'Core' },
        { type: 'operations', value: 'Operations' },
      ],
      description:
        'As a physian in the personalized oncology field, Omar will facilitate the bridge between PoSciDonDAO and patient communities.',
      twitterUsername: 'healthspan_md',
      linkedinUsername: 'healthspan_md',
    },
    {
      src: '/chris.webp',
      alt: 'Advisor Chris',
      name: 'Chris Crecelius',
      tags: [{ type: 'advisor', value: 'Advisor' }],
      description:
        'Chris, co-founder and CEO of AxonDAO, has invaluable experience in establishing DeSci DAOs.',
      twitterUsername: 'Chris_AxonDAO',
      linkedinUsername: 'ccrecelius',
    },
    {
      src: '/mack.webp',
      alt: 'Advisor Marck',
      name: 'Mack Stachowiak',
      tags: [{ type: 'advisor', value: 'Advisor' }],
      description:
        'Mack, co-founder an CTO of AxonDAO, has tremendous amounts of experience with creating medical devices bringing them into clinical practice.',
      twitterUsername: 'mstachowiak',
      linkedinUsername: 'mmstachowiak',
    },
    {
      src: '/renee.webp',
      alt: 'Advisor Renee',
      name: 'Renée Davis',
      tags: [{ type: 'advisor', value: 'Advisor' }],
      description:
        'As experienced founder of TalentDAO and advisor for several DeSci projects, Renée is an asset for the PoSciDonDAO team.',
      twitterUsername: 'reneedaos',
      linkedinUsername: 'research-wizard',
    },
    {
      src: '/shady.webp',
      alt: 'Advisor Shady',
      name: 'Shady El Damaty',
      tags: [{ type: 'advisor', value: 'Advisor' }],
      description:
        "Shady, co-founder of Silk and Holonym, has a PhD in neuroscience. Shady's expertise in business development and science helps bring PoSciDonDAO to the next level.",
      twitterUsername: 'hebbianloop',
      linkedinUsername: 'shadyeldamaty',
    },
    {
      src: '/neville.webp',
      alt: 'Advisor Neville',
      name: 'Neville',
      tags: [{ type: 'advisor', value: 'Advisor' }],
      description:
        'As CEO of Crystale, a web3 game, Neville brings his business development knowledge to PoSciDonDAO.',
      twitterUsername: '0xStarke',
      linkedinUsername: 'nevillestarke',
    },
  ];

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <header
        ref={headerRef}
        className={`${isVisibleHeader ? 'animate-fadeUp' : ''} 
        flex
        min-h-[300px]
        w-full
        flex-col
        items-center
         justify-center
         gap-8
         p-8
         text-sm
         sm:min-h-[400px]
         sm:text-base
         md:min-h-[600px]
         `}
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
          text-seaBlue-700 dark:text-gray-300 
          sm:text-6xl
          lg:text-7xl
          `}
        >
          The PoSciDonDAO Community
        </h1>
        <p className="mx-auto w-full sm:px-8 px-2 text-center text-base transition-all duration-500 md:text-lg lg:w-[70%] lg:text-2xl">
          The PoSciDonDAO community consists of many expert scientists,
          bioentrepreneurs and decentralized science enthusiasts. They
          collectively help the organisation and one another flourish. The DAO
          is managed by a core team with expertise in science, web3 and
          entrepreneurship.
          <br />
          <br />
          Get involved by becoming a contributor. Apply directly below and our
          team will review your application quickly.
        </p>
        <div className="flex gap-8 flex-col sm:flex-row">
          <Button
            link={true}
            type={'button'}
            onClick={null}
            target={'_blank'}
            text={`Become a contributor`}
            href={'https://forms.gle/g52VVJTXCnz7b8LU7'}
            icon={<FontAwesomeIcon icon={faTasks} className="pr-2" />}
            style={styles.primary}
          />
          <Button
            link={true}
            type={'button'}
            onClick={null}
            target={'_blank'}
            text={`Join the community`}
            href={'https://discord.gg/75SrHpcNSZ'}
            icon={<FontAwesomeIcon icon={faUsers} className="pr-2" />}
            style={styles.secondaryLightBlue}
          />
        </div>
      </header>
      <Divider />
      <section
        ref={crewsRef}
        className={`${
          isVisibleCrews ? 'animate-fadeUp' : ''
        } flex min-h-[300px] w-full flex-col items-center justify-center p-4 text-center text-sm sm:min-h-[400px] sm:p-8 sm:text-base md:min-h-[500px] md:items-center`}
      >
        <h2 className="mb-8 text-center text-4xl text-seaBlue-700 dark:text-gray-300">
          Crews
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:mx-4 md:grid-cols-2">
          {items.map((item, index) => (
            <div key={index} className="dark:bg-seaBlue-1000 flex flex-col items-center justify-center gap-6 rounded-lg bg-seaBlue-100 p-8 text-center">
              <h3 className="mb-2 h-[2rem] font-proximaSemiBold text-2xl">
                {item.title}
              </h3>
              <p className="min-h-[6rem] text-sm md:text-base">
                {item.content}
              </p>
              <Link
                href={'https://forms.gle/g52VVJTXCnz7b8LU7'}
                target="_blank"
                className="group mt-4 flex w-full cursor-pointer items-center justify-center pb-2 font-proximaSemiBold text-lg text-steelBlue md:text-xl"
              >
                Apply to join
                <span className="ml-1 transform transition-transform duration-300 ease-out group-hover:translate-x-[10px]">
                  {'>'}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Divider />
      <section
        ref={teamRef}
        className={`${
          isVisibleTeam ? 'animate-fadeUp' : ''
        } flex min-h-[300px] w-full flex-col items-center justify-center p-4 text-center text-sm sm:min-h-[500px] sm:p-8 sm:text-base md:min-h-[700px] md:items-center`}
      >
        <h2 className="sm:mb-4 text-center text-4xl text-seaBlue-700 dark:text-gray-300">
          Team
        </h2>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 place-items-center sm:gap-8 gap-16 px-4 my-8 xl:grid-cols-4">
          {members.map((member, index) => (
            <CardMember
              key={index}
              src={member.src}
              alt={member.alt}
              name={member.name}
              tags={member.tags}
              description={member.description}
              twitterUsername={member.twitterUsername}
              linkedinUsername={member.linkedinUsername}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
