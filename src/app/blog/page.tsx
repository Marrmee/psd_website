import BlogPostCard from '../components/BlogPostCard';
import { Metadata } from 'next';

const url = new URL('https://www.poscidondao.com/blog');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Blog',
  description: `All of PoSciDonDAO's blog articles on decentralized science, tokenomics, personalized medicine, research funding and more`,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function Blogs() {
  return (
    <main
      className="
        flex
        w-full
        max-w-full
        flex-col 
        items-center
        justify-center
        sm:pt-12 
        lg:w-[85%] 
        xl:w-[75%]
        animate-fadeUp 
        "
    >
      <section
        id="hero"
        className="
        flex 
        flex-col 
        items-center 
        justify-center 
        pt-8
        "
      >
        <h1
          className={`
          flex 
          w-full 
          max-w-full
          items-center 
          justify-center
          text-center
          font-proximaSemiBold
          text-3xl
          text-seaBlue-700 dark:text-gray-300
          sm:text-5xl
          lg:text-6xl
          `}
        >
          PoSciDonDAO's Blog
        </h1>
        {/* <p
          className="
            flex
            w-[70%]
            items-center 
            justify-center 
            py-8 
            text-center 
            text-base 
            sm:text-lg
            xl+:w-[50%]
          "
        ></p> */}
      </section>
      <section
        id="blog-posts"
        className="
        grid 
        place-items-center
        w-[80%]
        sm:w-[70%]
        mx-auto
        "
      >
        <BlogPostCard
          src={'/blog-banner.png'}
          alt={''}
          date={'November 4, 2023'}
          title={
            'Introducing PoSciDonDAO: The first community-owned collective funding personalized medicine research for life-altering diseases.'
          }
          href={
            '/blog-article/introducing-poscidondao'
          }
          text={`
            Hello web3 and scientists,

            we are PoSciDonDAO!
            `}
        />
      </section>
    </main>
  );
}
