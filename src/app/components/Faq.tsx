import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

export default function Faq({ faqs }: FaqProps) {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <h2 className="sm:sticky mb-8 sm:text-left text-center text-4xl font-semibold text-seaBlue-700 dark:text-gray-200">
          Frequently Asked Questions
        </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg bg-seaBlue-700 shadow dark:bg-seaBlue-1000"
          >
            <button
              className={`flex w-full items-center justify-start p-8 text-left font-proximaSemiBold text-gray-300 focus:outline-none sm:text-xl ${
                activeIndices.includes(index) ? 'rounded-t-lg' : 'rounded-lg'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="mr-4 flex h-6 w-6 items-center justify-center">
                <FontAwesomeIcon
                  icon={activeIndices.includes(index) ? faMinus : faPlus}
                  className={`transition-transform duration-500 ${
                    activeIndices.includes(index) ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              {faq.question}
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                activeIndices.includes(index) ? 'max-h-96' : 'max-h-0'
              }`}
              style={{ transitionProperty: 'max-height' }}
            >
              <div
                className={`transform transition-transform duration-700 ease-in-out ${
                  activeIndices.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionProperty: 'transform, opacity' }}
              >
                <div className="px-8 pb-8">
                  <p className="text-left text-xs text-gray-400 lg:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
