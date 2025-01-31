import Link from 'next/link';

interface ButtonProps {
  link: any;
  href: any;
  target: any;
  onClick: any;
  type: any;
  text: any;
  icon: any;
  style: any;
  disabled?: boolean;
}

export default function Button({
  link,
  href,
  target,
  onClick,
  type,
  text,
  icon,
  style,
  disabled,
}: ButtonProps) {
  return (
    <>
      {link ? (
        <Link href={href} target={target} rel="noopener noreferrer" className={style}>
          <span>
            <slot>{icon}</slot>
            <slot>{text}</slot>
          </span>
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={style}>
          <span>
            <slot>{icon}</slot>
            <slot>{text}</slot>
          </span>
        </button>
      )}
    </>
  );
}
