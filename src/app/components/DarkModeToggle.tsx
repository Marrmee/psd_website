// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { FiMoon, FiSun } from 'react-icons/fi';

// const DarkModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const currentTheme =
//       localStorage.getItem('theme') ||
//       (window.matchMedia('(prefers-color-scheme: dark)').matches
//         ? 'dark'
//         : 'light');
//     setIsDarkMode(currentTheme === 'dark');
//     document.documentElement.classList.toggle('dark', currentTheme === 'dark');
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !isDarkMode;
//     setIsDarkMode(newMode);
//     localStorage.setItem('theme', newMode ? 'dark' : 'light');
//     document.documentElement.classList.toggle('dark', newMode);
//   };

//   return (
//     <div className="
//     mx-4
//     relative
//     inline-flex
//     h-8
//     w-8
//     cursor-pointer
//     items-center
//     rounded-full
//     bg-gradient-to-r
//     from-seaBlue-200
//     to-seaBlue-300
//     dark:from-seaBlue-600
//     dark:to-seaBlue-700
//     p-1
//     ">
//       <motion.span
//         layout
//         transition={{ type: 'spring', stiffness: 700, damping: 30 }}
//         className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-seaBlue-300 dark:bg-seaBlue-500 shadow-md ${
//           isDarkMode ? 'translate-x-8' : 'translate-x-0'
//         }`}
//         onClick={toggleDarkMode}
//         role="switch"
//         aria-checked={isDarkMode}
//       >
//         {isDarkMode ? (
//           <FiSun className="text-yellow-500" />
//         ) : (
//           <FiMoon className="text-seaBlue-1050" />
//         )}
//       </motion.span>
//     </div>
//   );
// };

// export default DarkModeToggle;
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize theme from local storage or system preference
    const currentTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    setIsDarkMode(currentTheme === 'dark');
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div
      className="relative sm:mx-8 mx-2 inline-flex h-8 w-16 cursor-pointer items-center rounded-full bg-gradient-to-r from-seaBlue-200 to-seaBlue-300 p-1"
      onClick={toggleDarkMode}
    >
      <div
        className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-seaBlue-500 shadow-md transition-transform duration-300 ease-out ${
          isDarkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        {isDarkMode ? (
          <FiSun className="text-yellow-500" />
        ) : (
          <FiMoon className="text-blue-500" />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
