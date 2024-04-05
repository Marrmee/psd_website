import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

export default function BlogPostCard({ src, alt, date, title, text, href }) {
  return (
    <Link
      href={href}
      className="
      mx-8
      mb-8 
      flex 
      w-full
      max-w-full 
      flex-col
      items-center
      justify-center
      border-b-2
      border-seaBlue-700
      text-center
      md:max-w-[80%]
      xl:max-w-[60%] 
      "
    >
      <div
        className="
        flex
        h-30 
        sm:h-40
        w-full 
        items-center 
        justify-center 
        rounded-xl
        "
      >
        <Image
          className="
          w-full
          cursor-pointer
          transition
          duration-500
          hover:scale-110
          flex justify-center items-center
          "
          src={`${src}`}
          alt={`${alt}`}
          width={300}
          height={300}
        />
      </div>
      <span className="pt-2 text-fieryRed">{date}</span>
      <h2
        className="
        py-2
        font-proximaSemiBold
        text-xl
        "
      >
        {title}
      </h2>
      <p
        className="
      py-2
      font-proxima
      "
      >
        {text}
      </p>
      <div
        className="
      flex 
      h-36 
      w-full 
      items-center
      justify-end
      "
      >
        <Button
          style={styles.secondary}
          link={true}
          text="Read more"
          href={href}
          onClick={''}
          target=""
          type={'button'}
          icon={
            <FontAwesomeIcon
              icon={faReadme}
              className="pl-2"
              style={{ color: '#0b1dee' }}
            />
          }
        />
      </div>
    </Link>
  );
}
