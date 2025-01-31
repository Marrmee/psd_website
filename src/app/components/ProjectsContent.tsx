'use client';

import { useRef } from 'react';
import useMultipleIntersectionObserver from '../hooks/useMultipleIntersectionObserver';
import ProjectCard from './ProjectCard';

export default function ProjectsContent() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  
  const [isVisibleHeader, isVisibleProjects] = useMultipleIntersectionObserver(
    [headerRef, projectsRef],
    { threshold: 0.1, rootMargin: '50px' }
  );

  const projects = [
    {
      src: '/wedea-logo.png',
      alt: 'WeDEA, PoSciDonDAOs Copyleft IP-NFT pool framework',
      href: 'https://wedea.org',
      date: 'Coming Soon!',
      title: 'WeDEA',
      description:
        'WeDEA is a copyleft IP-NFT pool framework built to foster open collaboration and innovation in the field of personalized medicine.',
    },
    {
      src: '/wecura-logo.webp',
      alt: 'weCURA',
      href: '',
      date: 'Coming Soon!',
      title: 'weCURA',
      description:
        'weCURA is tool that allows clinicians to predict which cancer patients need existing anti-cancer treatments.',
    },
  ];

  return (
    <main className="flex w-full max-w-full flex-col items-center justify-center">
      <header
        ref={headerRef}
        className={`transition-all duration-1000 ease-out ${
          isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } my-16 flex flex-col items-center justify-center`}
      >
        <h1 className="flex max-w-full items-center justify-center text-center font-proximaSemiBold text-4xl text-gray-300 sm:text-5xl lg:text-6xl">
          The Forefront of Personalized Medicine Innovation
        </h1>
        <p className="mx-auto flex w-[80%] items-center justify-center pt-8 text-center text-base">
          PoSciDonDAO funds cutting-edge personalized medicine projects and
          builds the on-chain infrastructure for the intellectual property
          generated from the funded research. All the projects that PoSciDonDAO
          is involved in can be found here.
        </p>
      </header>
      <section 
        ref={projectsRef}
        className={`transition-all duration-1000 ease-out ${
          isVisibleProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } my-8 grid w-full grid-cols-1 place-items-center gap-16 md:grid-cols-2`}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            alt={project.alt}
            href={project.href}
            date={project.date}
            title={project.title}
            description={project.description}
          />
        ))}
      </section>
    </main>
  );
} 