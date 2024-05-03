import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

interface Tag {
  type: string;
  value: string;
}

interface CardMemberProps {
  src: string;
  alt: string;
  name: string;
  tags: Tag[];
  description: string;
  twitterUsername: string;
  linkedinUsername: string;
}

// Define styles based on tag types
const tagStyles = {
  core: 'bg-mellowYellow text-yellow-800 px-3 py-2 rounded-full text-sm',
  dueDiligence: 'bg-steelBlue text-gray-300 px-3 py-2 rounded-full text-sm',
  operations: 'bg-pineGreen text-gray-300 px-3 py-2 rounded-full text-sm',
  advisor: 'bg-powderBlue text-gray-700 px-3 py-2 rounded-full text-sm',
  default: 'bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm',
};

const CardMember: React.FC<CardMemberProps> = ({
  src,
  alt,
  name,
  tags,
  description,
  twitterUsername,
  linkedinUsername,
}) => {
  // Helper function to render tag with optional icon
  const renderTag = (tag: Tag) => {
    let displayValue = tag.value;
    if (tag.type === 'core') {
      displayValue = `🔱 ${tag.value}`; // Append trident emoji to core tag value
    }
    return (
      <span
        key={tag.value}
        className={tagStyles[tag.type] || tagStyles.default}
      >
        {displayValue}
      </span>
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-2 px-2 text-center sm:px-8">
      <div className="relative mb-2 h-40 w-40">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt={alt}
          className="rounded-full"
        />
      </div>
      <h3 className="h-[1rem] font-proximaSemiBold text-xl">{name}</h3>
      <div className="pt-2">
        <div className="my-2 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => renderTag(tag))}
        </div>
      </div>
      <p className="sm+:h-[7.5rem] sm+:w-full mx-auto w-[75%] text-sm text-gray-700 dark:text-gray-300 sm:h-[6.5rem] md:h-[8.5rem] lg:h-[10rem]">
        {description}
      </p>
      <div className="flex space-x-4">
        <Link
          href={`https://twitter.com/${twitterUsername}`}
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 text-blue-500" />
        </Link>
        <Link
          href={`https://www.linkedin.com/in/${linkedinUsername}`}
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="h-5 w-5 text-blue-700"
          />
        </Link>
      </div>
      <hr className="thin-hr"></hr>
    </div>
  );
};

export default CardMember;
