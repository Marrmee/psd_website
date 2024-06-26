import { Metadata } from 'next';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import ResearchInfo from '@/app/components/ResearchInfo';

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
          We Fund Research That Brings The Right Treatment To The Right Patient
        </h1>
        <p
          className="
              flex 
              items-center 
              justify-center 
              py-8 
              text-center 
              text-base
              sm:text-xl
            "
        >
          PoSciDonDAO is a member-owned worldwide organisation that funds and
          incubates personalized medicine research projects with the goal to
          commercialize their research output.
          <br></br>
          <br></br>
          Join our community of personalized medicine researchers,
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
      <section className="my-16 flex items-center justify-center w-full">
        <ResearchInfo />
      </section>
    </main>
  );
}
