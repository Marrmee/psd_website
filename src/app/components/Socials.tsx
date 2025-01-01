import Link from 'next/link';
import { faDiscord, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Socials() {
    return (
      <div
        className="
          flex
          w-full
          items-center 
          justify-center
          gap-24
          "
      >
        <Link
          aria-label="Join PoSciDon DAO's Discord server"
          className="flex items-center justify-center"
          href="https://discord.gg/75SrHpcNSZ"
          target="_blank"
                rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faDiscord}
            className="fa-2x"
            style={{ color: '#0b1dee' }}
          />
        </Link>
        <Link
          aria-label="Visit PoSciDon DAO's X (formerly known as Twitter) profile"
          className="flex h-[4rem] w-10 items-center justify-center"
          href="https://twitter.com/poscidondao"
          target="_blank"
                rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="fa-2x"
            style={{ color: '#0b1dee' }}
          />
        </Link>
        <Link
          aria-label="Start the conversation in PoSciDon DAO's Telegram group"
          className="flex h-[4rem] w-10 items-center justify-center"
          href="https://t.me/OfficialPoSciDonDAO"
          target="_blank"
                rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTelegram}
            className="fa-2x"
            style={{ color: '#0b1dee' }}
          />
        </Link>
      </div>
    );
}