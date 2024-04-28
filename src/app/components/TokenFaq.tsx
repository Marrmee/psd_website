import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const TokenFaq = () => {
  const faqs = [
    {
      question: 'What are the official addresses of the SCI token?',
      answer:
        'The SCI token has not been launched yet. Join our discord or telegram group to stay up to date with its release.',
    },
    {
      question: 'How will the foundation funds be used?',
      answer:
        'They will be used for ecosystem development, partnerships, legal, grants, bounties, logistical costs and hiring future employees/contributors beyond team allocation.',
    },
    {
      question: 'How will the community funds be used?',
      answer:
        'They will be used for the creation of liquidity pools, PO to SCI exchange program, and to expand and strengthen our community through marketing and outreach efforts.',
    },
    {
      question: 'Is there a hard cap for the SCI token supply?',
      answer:
        'There is no hard cap for the token supply. The DAO can decide to mint tokens, but only when it is really necessary. For example, when more funds are needed to bring novel therapies into clinical trials or to establish next-level partnerships.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="mb-8 text-center text-4xl font-semibold text-gray-200">
        FAQ
      </h2>
      <div className="mx-auto space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="dark:bg-seaBlue-1000 bg-gray-300 rounded-lg shadow">
            <button
              className={`
              flex 
              w-full 
              items-center 
              justify-between 
              p-8 
              text-left 
              font-proximaSemiBold 
              text-base 
              text-seaBlue-700
              focus:outline-none  
              dark:text-gray-300 
              sm:text-xl 
              ${activeIndex === index ? 'rounded-t-lg' : 'rounded-lg'}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FontAwesomeIcon
                icon={activeIndex === index ? faMinus : faPlus}
                className="             
                 text-base
                 sm:text-xl"
              />
            </button>
            <div
              className={`transition-height overflow-hidden duration-700 ease-in-out dark:text-slate-700 ${
                activeIndex === index ? 'max-h-60' : 'max-h-0'
              }`}
              style={{ transitionProperty: 'max-height' }}
            >
              <div className="px-6 pb-4">
                <p className="text-left text-sm dark:text-gray-400 text-gray-700 sm:text-base lg:text-xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TokenFaq;
