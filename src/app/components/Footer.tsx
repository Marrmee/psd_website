import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';
import Logo from '/public/logo.svg';

export default function Footer() {
  return (
    <div
      className="
      flex 
      w-full 
      max-w-full
      flex-col
      items-center 
      justify-center
      pt-8
      "
    >
      <div
        className=" 
        flex
        "
      >
        <div
          className="
          flex 
          flex-col
          items-center
          justify-between
          "
        >
          <Link
            href="/"
            className="flex w-[5rem] transition-all duration-500 ease-in sm:w-[10rem]"
          >
            <Image
              width={1000}
              height={1000}
              src={Logo}
              alt="PoSciDon logo consisting of a trident on top of a DNA helix"
            />
          </Link>
        </div>
        <div
          className="
        md:gap-18 
        xl:gap-22 
        grid 
        w-full 
        max-w-full 
        grid-cols-2 
        items-start 
        justify-start 
        gap-6
        transition-all
        duration-500
        ease-in
        sm:px-4 
        md:grid-cols-3 
        lg:gap-20
        "
        >
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700 dark:text-gray-300
            dark:text-seaBlue-700
            "
            >
              ABOUT POSCIDONDAO
            </p>
            <Link
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="/research"
            >
              For Scientists
            </Link>
            <Link
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="/sci-token"
            >
              SCI Token
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              locale={false}
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="/Whitepaper.pdf"
            >
              Whitepaper
            </Link>
            <Link
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="/blog"
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700 dark:text-gray-300
            dark:text-seaBlue-700
            "
            >
              GET INVOLVED
            </p>
            <Link
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="/get-involved"
            >
              Get Involved
            </Link>
            <Link
              className="hover:text-seaBlue-900"
              href="https://protocol.poscidondao.com/donate"
              target="_blank"
            >
              Donate
            </Link>
            <Link
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="/submit-project"
            >
              Submit Project
            </Link>
            <Link
              rel="noopener"
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="https://discord.gg/75SrHpcNSZ"
              target="_blank"
            >
              Join our Discord
            </Link>
            <Link
              rel="noopener"
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="https://twitter.com/poscidondao"
              target="_blank"
            >
              Join our Twitter
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700 
            dark:text-gray-300
            dark:text-seaBlue-700
            "
            >
              OTHER
            </p>
            <Link
              rel="noopener"
              locale={false}
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              target="_blank"
              href={'/brand-guidelines.pdf'}
            >
              Brand Guidelines
            </Link>
            <Link
              className="hover:text-seaBlue-700 dark:text-gray-300 dark:hover:text-seaBlue-700"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
}
