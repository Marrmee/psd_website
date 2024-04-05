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
          <Link href="/" className="flex w-[5rem] sm:w-[10rem] transition-all ease-in duration-500">
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
        grid 
        w-full 
        max-w-full 
        grid-cols-2 
        items-start 
        justify-start 
        gap-6 
        sm:px-4 
        md:grid-cols-3
        md:gap-18
        lg:gap-20
        xl:gap-22
        transition-all ease-in duration-500
        "
        >
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700
            "
            >
              ABOUT POSCIDONDAO
            </p>
            <Link 
              className="hover:text-seaBlue-700" 
              href="/research"
            >
              For scientists
            </Link>
            <Link 
              className="hover:text-seaBlue-700" 
              href="/sci-token"
            >
              SCI token
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              locale={false}
              className="hover:text-seaBlue-700"
              href="/Whitepaper.pdf"
            >
              Whitepaper
            </Link>
            <Link
              className="hover:text-seaBlue-700" 
              href="/blog">
              Blog
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700
            "
            >
              GET INVOLVED
            </p>
            {/* <Link
              className="hover:text-seaBlue-700"
              href="https://test.poscidon.com/donation"
              target="_blank"
            >
              Become a donor
            </Link> */}
            <Link
              className="hover:text-seaBlue-700"
              href="https://forms.gle/g52VVJTXCnz7b8LU7"
              target="_blank"
            >
              Contribute
            </Link>
            <Link 
              className="hover:text-seaBlue-700" 
              href="/submit-project"
            >
              Submit project
            </Link>
            <Link
              rel="noopener"
              className="hover:text-seaBlue-700"
              href="https://discord.gg/75SrHpcNSZ"
              target="_blank"
            >
              Join our discord
            </Link>
            <Link
              rel="noopener"
              className="hover:text-seaBlue-700"
              href="https://twitter.com/poscidondao"
              target="_blank"
            >
              Join our twitter
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p
              className="
            font-proximaSemiBold 
            text-sm
            text-seaBlue-700"
            >
              OTHER
            </p>
            <Link
              rel="noopener"
              locale={false}
              className="hover:text-seaBlue-700"
              target="_blank"
              href={"/brand-guidelines.pdf"}
            >
              Brand guidelines
            </Link>
            <Link className="hover:text-seaBlue-700" href="/privacy-policy">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
}
