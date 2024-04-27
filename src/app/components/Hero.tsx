'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TARGET_TEXT = 'Revolutionizing';
const CYCLES_PER_LETTER = 4;
const SHUFFLE_TIME = 80;

const CHARS = 'AGCTA';

export const Hero = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join('');

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  useEffect(scramble, []);

  return (
    <motion.h1
      // onMouseEnter={scramble}
      // onMouseLeave={stopScramble}
      className="
        w-full
        max-w-full
        bg-gradient-to-r
        from-seaBlue-900
        via-seaBlue-700
        to-seaBlue-500
        bg-clip-text
        text-center 
        font-proximaSemiBold
        text-4xl
        uppercase 
        text-seaBlue-700 
        text-transparent
        sm:text-5xl 
        md:text-6xl 
        lg:text-7xl
        xl:text-8xl
        transition-all
        duration-500
        "
    >
      <div className="">{text}</div>
      <div className="">Research Funding For Personalized Medicine</div>
    </motion.h1>
  );
};

export default Hero;
