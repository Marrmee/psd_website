import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export const Faq = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:w-5/6 lg:w-3/4">
      <h2 className="mb-8 text-center text-4xl font-semibold text-seaBlue-700 dark:text-gray-200">
        FAQ
      </h2>
      <div className="mx-auto space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="dark:bg-seaBlue-1000 rounded-lg bg-seaBlue-700 shadow"
          >
            <button
              className={`flex w-full items-center justify-between p-8 text-left font-proximaSemiBold text-base text-gray-300 focus:outline-none sm:text-xl ${
                activeIndex === index ? 'rounded-t-lg' : 'rounded-lg'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FontAwesomeIcon
                icon={activeIndex === index ? faMinus : faPlus}
                className="text-base sm:text-xl"
              />
            </button>
            <div
              className={`transition-height overflow-hidden duration-700 ease-in-out dark:text-slate-700 ${
                activeIndex === index ? 'max-h-70' : 'max-h-0'
              }`}
              style={{ transitionProperty: 'max-height' }}
            >
              <div className="px-8 pb-8">
                <p className="text-left text-sm text-gray-400 sm:text-base lg:text-xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Faq.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

