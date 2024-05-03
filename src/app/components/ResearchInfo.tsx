'use client';

import { useRef, useEffect, useState } from 'react';

export default function ResearchInfo() {
  const [isVisibleFaq, setIsVisibleFaq] = useState(false);
  const faqRef = useRef(null);
  const visbilityThreshold = 0.05;
  useEffect(() => {
    const observerFaq = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisibleFaq(true);
        }
      },
      { threshold: visbilityThreshold }
    );
    if (faqRef.current) {
      observerFaq.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observerFaq.unobserve(faqRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={faqRef}
      className={`
      ${isVisibleFaq ? 'animate-fadeUp' : ''}
    flex
    w-[85%]
    flex-col
    items-center
    text-center
    lg:w-[80%]  
    `}
    >
      <div
        className="
      mb-4
      text-center 
      font-proximaSemiBold
      text-3xl
      text-seaBlue-700 dark:text-gray-300
      sm:text-4xl
      "
      >
        Why receive funding from PoSciDonDAO?
      </div>
      <section className="w-[85%]">
        <div
          className="
      flex 
      flex-col 
      items-center 
      justify-center 
      py-4 
      text-center
      "
        >
          <div
            className="
        inline-block
        bg-gradient-to-r 
        from-seaBlue-700 
        to-steelBlue 
        bg-clip-text 
        py-2
        font-proximaSemiBold
        text-2xl
        text-transparent
        "
          >
            Fast, unbiased and transparent funding
          </div>
          <p className="text-center text-lg">
            Our Due Diligence crew will go above and beyond for you to guarantee
            a fast and easy funding process for your project. Full transparency
            is reached as the Due Diligence crew votes on which research
            projects receive funding via smart contracts deployed on blockchain
            technology. As the Due Diligence crew consists of scientists with
            various backgrounds, bias is decreased in the funding process.
          </p>
        </div>
        <div
          className="
      flex 
      flex-col 
      items-center 
      justify-center 
      py-4 
      text-center
      "
        >
          <div
            className="
        inline-block
        bg-gradient-to-r 
        from-seaBlue-700 
        to-steelBlue 
        bg-clip-text 
        py-2
        font-proximaSemiBold
        text-2xl
        text-transparent
        "
          >
            We support high risk projects that others don't
          </div>
          <p className="text-center text-lg">
            We believe in paradigm-shifting personalized medicine research. As a
            sovereign entity, PoSciDonDAO funds high risk projects with the
            potential to innovate the personalized medicine field.
          </p>
        </div>
        <div
          className="
      flex 
      flex-col 
      items-center 
      justify-center 
      py-4 
      text-center
      "
        >
          <div
            className="
        inline-block
        bg-gradient-to-r 
        from-seaBlue-700 
        to-steelBlue 
        bg-clip-text 
        py-2
        font-proximaSemiBold
        text-2xl
        text-transparent
        "
          >
            Assistance throughout a project's lifetime
          </div>
          <p className="text-center text-lg">
            To further streamline the funding process of personalized medicine
            research we want to work as close as possible with researchers.
            PoSciDonDAO facilitates research project incubation, assists with
            creating a strategy to generate intellectual property, plans for
            research output commercialization, and helps prepare for project
            execution. We prioritize providing you with more time and resources
            to focus on your research, while our organisation makes the
            necessary steps to bring your innovations to the market. With our
            approach, researchers and their research output can reach their full
            potential.
          </p>
        </div>
        <div
          className="
      flex 
      flex-col 
      items-center 
      justify-center 
      py-4 
      text-center
      "
        >
          <div
            className="
        inline-block
        bg-gradient-to-r 
        from-seaBlue-700 
        to-steelBlue 
        bg-clip-text 
        py-2
        font-proximaSemiBold
        text-2xl
        text-transparent
        "
          >
            The power of a collective of experts
          </div>
          <p className="text-center text-lg">
            PoSciDonDAO is a purpose-driven global collective of expert
            personalized medicine researchers, investors, donors and
            contributors. Joining our DAO gives you access to our large and
            diverse community dedicated to advancing personalized medicine
            research in an open and collaborative manner. Through these
            collaborative efforts, PoSciDonDAO aims to accelerate the
            development and commercialization of groundbreaking innovations that
            can improve people's lives affected by life-altering diseases,
            including, but not limited to, various cancer types and Alzheimer's
            disease.
          </p>
        </div>
      </section>
    </div>
  );
}
