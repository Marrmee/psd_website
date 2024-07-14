import { Metadata } from 'next';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import ProjectCard from '../components/ProjectCard';

const url = new URL('https://www.poscidondao.com/research');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Research Projects',
  description: `Explore projects funded or established by PoSciDonDAO`,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function ProjectFunding() {
  const projects = [
    {
      src: '/wedea-logo.png',
      alt: 'WeDEA, PoSciDonDAOs Copyleft IP-NFT pool framework',
      href: 'https://wedea.org',
      date: 'Coming Soon!',
      title: 'WeDEA',
      description: 'WeDEA is a copyleft IP-NFT pool framework built to foster open collaboration and innovation in the field of personalized medicine.',
    },
    // {
    //   src: '/rc-logo.png',
    //   alt: 'Rare Compute',
    //   href: '',
    //   date: 'Coming Soon!',
    //   title: 'Project Rook',
    //   description:
    //     'Project Rook aims to develop a large language model trained on genetic code from cancer patients to predict responsiveness to immunotherapies.',
    // },
  ];

  return (
    <main
      className="
          flex
          w-full 
          max-w-full
          flex-col
          items-center
          justify-center
          px-8 
          mx-auto
          lg:w-[90%]
          xl:w-[80%]
          "
    >
      <header
        className="
          my-16 
          flex 
          flex-col 
          items-center
          justify-center
          "
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
            sm:text-5xl
            lg:text-6xl
            `}
        >
          The Forefront of Personalized Medicine Innovation
        </h1>
        <p
          className="
              flex 
              items-center 
              justify-center 
              pt-8 
              text-center 
              text-base
              sm:text-xl
            "
        >
          PoSciDonDAO funds cutting-edge personalized medicine projects and
          builds the on-chain infrastructure for the intellectual property
          generated from the funded research. All the projects that PoSciDonDAO
          is involved in can be found here.
        </p>
        {/* <Button
          link={true}
          target={'_blank'}
          href={'/submit-project'}
          style={styles.primary}
          onClick={''}
          type={'button'}
          text={'Submit your project proposal'}
          icon={''}
        /> */}
      </header>
      <section className="my-8 w-full gap-16 grid grid-cols-1 md:grid-cols-2 place-items-center">
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
