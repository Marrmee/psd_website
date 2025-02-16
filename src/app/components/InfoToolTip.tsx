import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

interface InfoToolTipProps {
  message: string;
}

export default function InfoToolTip({ message }: InfoToolTipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="text-gray-300 hover:text-gray-400 focus:outline-none"
        aria-label="More information"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </button>
      
      {showTooltip && (
        <div className="absolute left-1/2 top-6 z-50 w-72 -translate-x-1/2 transform rounded-lg bg-gray-900 p-4 text-sm text-gray-300 shadow-lg">
          <div className="relative">
            {/* Triangle pointer */}
            <div className="absolute -top-6 left-1/2 -ml-2 border-8 border-transparent border-b-gray-900" />
            <div className="whitespace-pre-line">{message}</div>
          </div>
        </div>
      )}
    </div>
  );
}
