'use client';

import { useRef } from 'react';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faBalanceScale,
  faGift,
  faHandshakeAlt,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import Faq from './Faq';
import Tabs from './Tabs';
import Tab from './Tab';
import Link from 'next/link';
import useMultipleIntersectionObserver from '../hooks/useMultipleIntersectionObserver';
import Divider from './Divider';

const faqs = [
  {
    question: 'What are the official addresses of the SCI token?',
    answer:
      'The SCI token has not been launched yet. Join our discord or telegram group to stay up to date with its release.',
  },
  {
    question: 'How will the foundation funds be used?',
    answer:
      'They will be used for funding research, ecosystem development, partnerships, legal, grants, bounties, logistical costs and hiring future employees/contributors beyond team allocation.',
  },
  {
    question: 'How will the community funds be used?',
    answer:
      'They will be used for the creation of liquidity pools, PO to SCI exchange program, and to expand and strengthen our community through marketing and outreach efforts.',
  },
  {
    question: 'Who are part of the DAO Operators?',
    answer:
      'Founders, advisors, early contributors and members working on project development are considered DAO Operators.',
  },
  {
    question: 'Is there a hard cap for the SCI token supply?',
    answer:
      'There is no hard cap for the token supply. The DAO can decide to mint tokens, but only when it is really necessary. For example, when more funds are needed to bring novel therapies into clinical trials or to establish next-level partnerships.',
  },
];

const items = [
  {
    title: 'Governance',
    content:
      "After staking SCI tokens, members receive governance rights over PoSciDonDAO's treasury, its operations, the election of scientific experts, and over the management of the personalized medicine IP portfolio.",
    icon: faBalanceScale,
    iconColor: 'text-seaBlue-400 text-seaBlue-600',
  },
  {
    title: 'Stake in IP',
    content:
      'A portion of the revenue generated from commercialized IP will be used to buy back SCI from the market followed by a token burn, ensuring token holders benefit from scientific innovation and a growing IP portfolio.',
    icon: faHandshakeAlt,
    iconColor: 'text-seaBlue-600 dark:text-seaBlue-700',
  },
  {
    title: 'Incentives',
    content:
      "SCI is used to attract and incentivise talent and experts to support the development of PoSciDonDAO's funded personalized medicine research projects.",
    icon: faCoins,
    iconColor: 'text-seaBlue-800 dark:text-seaBlue-800',
  },
  {
    title: 'Rewards',
    content:
      'Voting on governance proposals will give you PO, a non-tradable non-fungible token. PO can be exchanged for SCI tokens and in the future for other rewards including conference tickets and merch.',
    icon: faGift,
    iconColor: 'text-seaBlue-900',
  },
];

export default function SciTokenPage() {
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const ecosystemRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const faqRef = useRef(null);
  const observerOptions = { threshold: 0.05 };
  const [
    isVisibleHeader,
    isVisibleSection,
    isVisibleEcosystem,
    isVisibleTokenomics,
    isVisibleFaq,
  ] = useMultipleIntersectionObserver(
    [headerRef, sectionRef, ecosystemRef, tokenomicsRef, faqRef],
    observerOptions
  );

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <header
        ref={headerRef}
        className={`${
          isVisibleHeader ? 'animate-fadeUp' : ''
        } my-4 flex min-h-[300px] w-full flex-col items-center justify-center gap-8 p-8 text-sm sm:min-h-[400px] sm:text-base md:min-h-[700px] md:flex-row md:items-center`}
      >
        <div className="my-8 flex w-full max-w-[300px] justify-center md:my-0 md:w-1/2 lg:max-w-[400px]">
          <Image
            alt="Representation of SCI, PoSciDonDAO's tradable governance token"
            width={1000}
            height={1000}
            layout="responsive"
            src="/sci.webp"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center text-center sm:items-center sm:justify-center md:w-1/2">
          <h1 className="text-center font-proximaSemiBold text-3xl text-seaBlue-700 dark:text-gray-300 sm:text-5xl lg:text-6xl">
            Explore SCI
          </h1>
          <p className="flex w-full items-center justify-center py-4 text-center text-base sm:max-w-[70%] sm:py-8 sm:text-xl md:max-w-none">
            The SCI token is the backbone of the PoSciDonDAO ecosystem, allowing
            holders to vote on proposals regarding DAO operations and the
            election of scientific experts that review personalized medicine
            research projects. SCI will be released soon!
          </p>
          <Button
            link={true}
            type={''}
            target={'_blank'}
            href={'/Whitepaper.pdf'}
            onClick={''}
            text={'Read our Whitepaper'}
            icon={
              <FontAwesomeIcon
                icon={faFileAlt}
                className="pr-2"
                style={{ color: '#FDFDFD' }}
              />
            }
            style={styles.primary}
          />
        </div>
      </header>
      <Divider />
      <section
        ref={sectionRef}
        className={`${
          isVisibleSection ? 'animate-fadeUp' : ''
        } flex min-h-[300px] w-full flex-col items-center justify-center p-4 text-center text-sm sm:min-h-[500px] sm:p-8 sm:text-base md:min-h-[700px] md:items-center`}
      >
        <h2 className="mb-4 text-center text-4xl text-seaBlue-700 dark:text-gray-300">
          SCI Utility
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:mx-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg bg-seaBlue-100 p-8 text-center dark:bg-seaBlue-1000"
            >
              <div className="flex items-center justify-center rounded">
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`pb-4 text-6xl md:text-7xl ${item.iconColor}`}
                />
              </div>
              <h3 className="mb-2 h-10 font-proximaSemiBold text-2xl">
                {item.title}
              </h3>
              <p className="text-base text-base sm:h-[6rem] md:h-[10rem] md:text-lg xl:h-[15rem]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Divider />
      <section
        ref={ecosystemRef}
        className={`
        my-8 
        flex 
        min-h-[300px] 
        w-full
        flex-col
        items-center 
        justify-center
        gap-4
        px-4
        text-center
        text-sm
        sm:min-h-[400px] 
        sm:gap-8 
        sm:px-8
        sm:text-base
        md:min-h-[500px]
        md:items-center
        lg:flex-row
        ${isVisibleEcosystem ? 'animate-fadeUp' : ''}
      `}
      >
        <div className="min-h-[34rem] w-full flex-auto px-4 text-gray-300 lg:w-2/5">
          <div
            className="
        flex 
        min-h-[34rem]
        flex-col
        justify-between 
        rounded-lg
        bg-seaBlue-800
        p-12
        dark:bg-seaBlue-1000
        "
          >
            <h2 className="mb-4 text-center text-4xl">Our Ecosystem</h2>
            <Tabs startingIndex={0}>
              <Tab title="Operations" size="text-sm lg:text-base xl:text-lg">
                <div>
                  <p className="my-4 text-left font-proximaSemiBold">
                    The SCI token allows the PoSciDonDAO community to have a
                    direct say in how the organisation is operating. This
                    includes marketing, tokenomics, election of scientific
                    experts for research project sourcing and reviewing,
                    branding, hiring of employees, etc.
                  </p>
                  <div className="mt-8 flex flex-col items-start justify-start gap-8">
                    <div className="flex items-center justify-center text-left">
                      <div className="flex h-10 w-14 items-center justify-center rounded-full bg-seaBlue-500 p-2 text-center text-2xl">
                        1
                      </div>
                      <p className="ml-4">
                        Anyone can create a proposal if sufficient SCI tokens
                        have been staked through{' '}
                        <Link
                          target="_blank"
                          href="https://protocol.poscidondao.com"
                          className="text-steelBlue underline"
                        >
                          PoSciDonDAO's Protocol
                        </Link>
                        . A guide on making a proposal can be found{' '}
                        <Link
                          target="_blank"
                          href="https://discord.com/channels/1106907057107505226/1199792951035957308"
                          className="text-steelBlue underline"
                        >
                          here
                        </Link>
                        .
                      </p>
                    </div>

                    <div className="flex items-center justify-center text-left">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-seaBlue-500 p-2 text-center text-2xl">
                        2
                      </div>
                      <p className="ml-4">
                        Proposer can then convince other community members to
                        vote in favor of their proposal through{' '}
                        <Link
                          target="_blank"
                          href="https://protocol.poscidondao.com"
                          className="text-steelBlue underline"
                        >
                          PoSciDonDAO's forum.{' '}
                        </Link>
                      </p>
                    </div>
                    <div className="flex items-center justify-center text-left">
                      <div className="flex h-10 w-14 items-center justify-center rounded-full bg-seaBlue-500 p-2 text-center text-2xl">
                        3
                      </div>
                      <p className="ml-4">
                        If the proposal has passed and requires distribution of
                        funds, anyone will be able to initiate the on-chain
                        distribution of funds from PoSciDonDAO's treasury.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                title="Research Funding"
                size="text-sm lg:text-base xl:text-lg"
              >
                <div>
                  <p className="my-4 text-left font-proximaSemiBold">
                    The SCI token allows elected scientific experts to have a
                    say in which personalized medicine research projects for
                    life-altering diseases will be funded. Research output will
                    be commerciallized and licensed to third parties to generate
                    revenue for the DAO.
                  </p>
                  <div className="mt-8 flex flex-col items-start justify-start gap-8">
                    <div className="flex items-center justify-center text-left">
                      <div className="flex h-10 w-14 items-center justify-center rounded-full bg-seaBlue-500 p-2 text-center text-2xl">
                        1
                      </div>
                      <p className="ml-4">
                        Scientists can become part of the Due Diligence Crew, a
                        group of scientific experts reviewing research projects,
                        by marketing themselves as expert to the community.
                      </p>
                    </div>

                    <div className="flex items-center justify-center text-left">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-seaBlue-500 p-2 text-center text-2xl">
                        2
                      </div>
                      <p className="ml-4">
                        Elected scientific advisors with sufficient SCI tokens
                        staked can propose research projects to other scientific
                        experts through{' '}
                        <Link
                          target="_blank"
                          href="https://protocol.poscidondao.com"
                          className="text-steelBlue underline"
                        >
                          PoSciDonDAO's Protocol
                        </Link>
                        .
                      </p>
                    </div>
                    <div className="flex items-center justify-center text-left">
                      <div className="flex h-10 w-14 items-center justify-center rounded-full bg-seaBlue-500 p-2 text-center text-2xl">
                        3
                      </div>
                      <p className="ml-4">
                        Similarly to governance of DAO operations, passed
                        proposals for research funding will be executed on-chain
                        as long as the DAO treasury can cover those funds.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center px-4 lg:w-3/5">
          <Image
            alt="Overview of PoSciDonDAO's ecosystem"
            width={1000}
            height={1000}
            layout="responsive"
            src="/blog-images/ecosystem.webp"
            className="rounded-lg"
          />
        </div>
      </section>
      <Divider />
      <section
        ref={tokenomicsRef}
        className={`
        flex 
        min-h-[300px] 
        w-full 
        flex-col
        items-center 
        justify-center
        p-4
        text-center 
        text-sm 
        sm:min-h-[500px]
        sm:p-8
        sm:text-base
        md:min-h-[700px]
        md:items-center
        ${isVisibleTokenomics ? 'animate-fadeUp' : ''}
      `}
      >
        <h2 className="mb-4 text-center text-4xl text-seaBlue-700 dark:text-gray-300">
          Token Allocation
        </h2>
        <div
          className="
        gird-cols-1
        grid
        "
        >
          <div className="flex flex-col items-center justify-center">
            {/* <h3 className="mb-4 text-center font-proximaSemiBold text-3xl text-seaBlue-700 dark:text-gray-300">
              Allocation
            </h3> */}
            <div className="flex items-center justify-center sm:w-full lg:max-w-[1000px]">
              <Image
                alt="Overview of SCI token allocation"
                width={1000}
                height={1000}
                layout="responsive"
                src="/allocation-white.webp"
                className="hidden dark:flex"
              />
              <Image
                alt="Overview of SCI token allocation"
                width={1000}
                height={1000}
                layout="responsive"
                src="/allocation-black.webp"
                className="flex dark:hidden"
              />
            </div>
          </div>
          {/* <div className="flex flex-col">
            <h3 className="mb-4 text-center text-3xl text-seaBlue-700 dark:text-gray-300">
              Vesting
            </h3>
          </div> */}
        </div>
      </section>
      <Divider />
      <section
        ref={faqRef}
        className={`
        flex 
        min-h-[300px] 
        w-full 
        flex-col
        items-center 
        justify-center 
        p-4
        text-center
        sm:min-h-[500px]
        sm:p-8
        md:min-h-[700px]
        md:items-center
        ${isVisibleFaq ? 'animate-fadeUp' : ''}
      `}
      >
        <Faq faqs={faqs} />
      </section>
    </main>
  );
}
