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
