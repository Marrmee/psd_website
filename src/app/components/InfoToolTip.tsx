import { useState } from 'react';

export default function InfoToolTip({ message }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="flex items-center justify-center"
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <div className="text-fieryRed mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {showModal && (
        <div
          className="
          absolute
          sm:ml-[26rem]
          sm:w-[25rem]
          max-w-full
          rounded-xl 
          border-2 
          border-seaBlue-700 
          bg-seaBlue-200 
          p-3
          mx-2
          sm:mx-0 
          text-base
          font-proxima
          dark:text-seaBlue-900
          "
        >
          {message}
        </div>
      )}
    </div>
  );
}
