import Image from "next/image";
import Button from './Button';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({
  src,
  alt,
  date,
  title,
  description,
  href,
}) {
  return (
    (<section
      className="
      mb-8 
      flex 
      w-[25rem] 
      max-w-full
      flex-col
      items-center
      justify-center
      border-b-2
      border-seaBlue-700
      text-center
      "
    >
      <div
        className="
          min-h-24
          my-4 
          flex 
          max-h-[300px] 
          w-full 
          items-center 
          justify-center 
          overflow-hidden
        "
      >
        <Image
          className="
          w-full
          rounded-t-lg
          "
          src={src}
          alt={alt}
          width={300}
          height={300}
          style={{
            height: '250px',
            maxWidth: "100%",
            height: "auto"
          }} />
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
          h-content
          overflow-hidden
          py-2
        "
      >
        {description}
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
        {href.length > 0 ? (
          <Button
            style={styles.primary}
            link={true}
            text="Read more"
            href={href}
            onClick={''}
            target="_blank"
            type={'button'}
            icon={<FontAwesomeIcon icon={faReadme} className="pr-2" />}
          />
        ) : null}
      </div>
    </section>)
  );
}
