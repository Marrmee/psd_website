import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  text: string;
  href: string;
  icon?: ReactNode;
  style: string;
  target: string;
  link: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function Button({
  text,
  href,
  icon,
  style,
  target,
  link,
  type = 'button',
  onClick
}: ButtonProps) {
  if (link) {
    return (
      <Link href={href} target={target} className={style}>
        {icon}
        {text}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={style}>
      {icon}
      {text}
    </button>
  );
}
