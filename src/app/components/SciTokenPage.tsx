'use client';

import { useRef, useEffect, useState } from 'react';
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
import TokenFaq from './TokenFaq';
import Tabs from './Tabs';
import Tab from './Tab';
import Link from 'next/link';

const items = [
  {
    title: 'Governance',
    content:
      "After staking SCI tokens, members receive governance rights over PoSciDonDAO's treasury, its operations, the election of scientific experts, and over the management of the personalized medicine IP portfolio.",
    icon: faBalanceScale,
    iconColor: 'text-seaBlue-400',
  },
  {
    title: 'Stake in IP',
    content:
      'A portion of the revenue generated from commercialized IP will be used to buy back SCI from the market followed by a token burn, ensuring token holders benefit from scientific innovation and a growing IP portfolio.',
    icon: faHandshakeAlt,
    iconColor: 'text-seaBlue-600',
  },
  {
    title: 'Incentives',
    content:
      "SCI is used to attract and incentivise talent and experts to support the development of PoSciDonDAO's funded personalized medicine research projects.",
    icon: faCoins,
    iconColor: 'text-seaBlue-800',
  },
  {
    title: 'Rewards',
    content:
      'Voting on governance proposals will give you PO, a non-tradable non-fungible token. PO can be exchanged for SCI tokens and in the future for other rewards including conference tickets and merch.',
    icon: faGift,
    iconColor: 'text-seaBlue-1000',
  },
];

export default function SciTokenPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <main
      className="
        flex
        w-full
        flex-col 
        items-center
        justify-center
        "
    >
      <header
        className="
        animate-fadeUp 
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
        md:min-h-[700px] md:flex-row md:items-center
  "
      >
        <div
          className="
          my-16 flex w-full max-w-[300px] justify-center md:my-0 md:w-1/2 lg:max-w-[400px]"
        >
          <Image
            alt="Representation of SCI, PoSciDonDAO's tradable governance token"
            width={1000}
            height={1000}
            layout="responsive"
            src="/sci.webp"
          />
        </div>
        <div
          className="
      flex 
      w-full 
      flex-col 
      items-center 
      justify-center 
      text-center 
      sm:items-center 
      sm:justify-center 
      md:w-1/2
    "
        >
          <h1
            className="
        text-center 
        font-proximaSemiBold 
        text-3xl 
        text-seaBlue-700 
        sm:text-5xl 
        lg:text-6xl
      "
          >
            Explore SCI
          </h1>
          <p
            className="
        flex 
        w-full 
        items-center 
        justify-center 
        py-4
        text-center 
        text-base 
        sm:max-w-[70%] 
        sm:py-8 
        sm:text-xl 
        md:max-w-none
      "
          >
            The SCI token is the backbone of the PoSciDonDAO ecosystem, allowing
            holders to vote on proposals regarding DAO operations and the
            election of scientific experts that review personalized medicine
            research projects. SCI will accrue value from our commercialized
            assets, as revenue will be used to buy back and burn SCI tokens. SCI
            will be released soon!
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
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <section
        ref={sectionRef}
        className={`
        animate-fadeUp
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
        ${isVisible ? 'animate-fadeUp' : ''}
      `}
      >
        <h2 className="mb-4 text-center text-4xl text-seaBlue-700">
          SCI Utility
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:mx-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div className="flex flex-col items-center justify-center rounded-lg bg-seaBlue-50 p-8 text-center">
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
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <section
        ref={sectionRef}
        className={`
    animate-fadeUp
    flex 
    min-h-[300px] 
    w-full 
    flex-col
    items-center
    justify-center 
    gap-8
    p-8
    text-center 
    text-sm 
    sm:min-h-[400px]
    sm:text-base
    md:min-h-[500px]
    md:items-center
    lg:flex-row
    ${isVisible ? 'animate-fadeUp' : ''}
  `}
      >
        <div className="min-h-[34rem] flex-auto text-gray-300 lg:w-2/5">
          <div
            className="
        flex min-h-[34rem]
        w-full
        flex-col
        justify-between rounded-3xl
         bg-seaBlue-900
        p-12
      "
          >
            <h2 className="mb-4 text-center text-4xl">Our Ecosystem</h2>
            <Tabs startingIndex={0}>
              <Tab title="Operations" size="">
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
              <Tab title="Research Funding" size="">
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
        <div className="flex h-full w-full max-w-[1000px] items-start justify-start lg:w-3/5">
          <Image
            alt="Representation of SCI, PoSciDonDAO's tradable governance token"
            width={1000}
            height={1000}
            layout="responsive"
            src="/blog-images/ecosystem.webp"
            className="rounded-3xl"
          />
        </div>
      </section>
      <section
        ref={sectionRef}
        className={`
        animate-fadeUp
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
        ${isVisible ? 'animate-fadeUp' : ''}
      `}
      >
        <h2 className="mb-4 text-center text-4xl text-seaBlue-700">
          Token Allocation
        </h2>
        <div className="
        gird-cols-1
        grid
        ">
          <div className="flex flex-col">
            {/* <h3 className="mb-4 text-center font-proximaSemiBold text-3xl text-seaBlue-700">
              Allocation
            </h3> */}
            <div className="flex h-full w-full items-start justify-start sm:min-w-full lg:max-w-[1000px]">
              <Image
                alt="Representation of SCI, PoSciDonDAO's tradable governance token"
                width={1000}
                height={1000}
                layout="responsive"
                src="/allocation.webp"
                className="rounded-3xl"
              />
            </div>
          </div>
          {/* <div className="flex flex-col">
            <h3 className="mb-4 text-center text-3xl text-seaBlue-700">
              Vesting
            </h3>
          </div> */}
        </div>
      </section>
      <section
        ref={sectionRef}
        className={`
        animate-fadeUp
        flex 
        min-h-[300px] 
        w-full 
        flex-col
        items-center 
        justify-center
        bg-seaBlue-900
        p-4 
        text-center 
        text-sm
        sm:min-h-[500px]
        sm:p-8
        sm:text-base
        md:min-h-[700px]
        md:items-center
        ${isVisible ? 'animate-fadeUp' : ''}
      `}
      >
        <div className="my-8 w-full p-4 lg:w-2/3">
          <TokenFaq />
        </div>
      </section>
      {/* <Image
          className="
            hidden 
            items-center
            justify-center
            md:flex
            "
          src={'/staking.webp'}
          alt="Staking $SCI and $PO tokens"
          width={270}
          height={100}
        />
        <div className="flex w-full flex-col items-center justify-start">
          <h2
            className="
                flex
                py-4
                font-proximaSemiBold
                text-4xl
                text-seaBlue-700
                sm:text-5xl
                lg:text-6xl
                "
          >
            Staking
          </h2>
          <p
            className="
            w-full
            text-center
            lg:text-lg
            xl:text-xl
            "
          >
            Your $SCI can be staked through{' '}
            <a
              className="text-seaBlue-700 underline"
              target="_blank"
              href={'https://test.poscidon.com/staking'}
            >
              PoSciDonDAO's Protocol
            </a>
            . Once staked, you will gain voting power, allowing you to vote on
            DAO proposals. After on-chain voting on proposals, you will receive
            the untradable $PO token. When $PO is staked together with $SCI, you
            will receive more $SCI tokens on a daily basis.
          </p>
        </div>
        <div
          className="
          flex 
          w-full
          items-start 
          justify-center                     
          p-4
          md:hidden
          md:pt-4
          "
        >
          <Image
            className="pt-8"
            src={'/staking-line.webp'}
            alt="Staking $SCI and $PO tokens"
            width={600}
            height={300}
          />
        </div> */}

      {/* <hr className="border-b-1 w-full border-gray-200"></hr>
      <section
        ref={sectionRef}
        className={`
        my-2
        flex
        max-h-full
        flex-col
        items-center
        justify-between
        p-4
        md:h-1/3
        md:flex-row
        md:gap-16
        md:p-16
        ${isVisible ? 'animate-fadeUp' : ''}
      `}
      >
        <div className="flex w-full flex-col items-center justify-center">
          <h2
            className="
            flex
            py-4
            font-proximaSemiBold
            text-4xl
            text-seaBlue-700
            sm:text-5xl
            lg:text-6xl
            "
          >
            Burning
          </h2>
          <p
            className="
            w-full
            text-center
            lg:text-lg
            xl:text-xl
            "
          >
            Of the generated revenue, 30% will be used to buy $SCI from the
            market. Those $SCI tokens will then be burned. Lower token supply
            leads to higher value per $SCI token, given the total market
            capitalization stays the same. The DAO can also decide through a
            proposal to receive a dividend instead of executing buy-backs.
          </p>
        </div>
        <div
          className="
          flex
          h-full 
          w-full  
          items-center
          justify-center                   
          "
        >
          <Image
            className="max-h-full w-full pt-8"
            src={'/burn.webp'}
            alt="Burning $SCI tokens"
            width={300}
            height={300}
          />
        </div>
      </section> */}
    </main>
  );
}
