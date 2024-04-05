import Link from 'next/link';

export default function Button({
  link,
  href,
  target,
  onClick,
  type,
  text,
  icon,
  style,
}) {
  return (
    <>
      {link ? (
        <Link href={href} target={target} className={style}>
          <span>
            <slot>{text}</slot>
            <slot>{icon}</slot>
          </span>
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={style}>
          <span>
            <slot>{text}</slot>
            <slot>{icon}</slot>
          </span>
        </button>
      )}
    </>
  );
}
