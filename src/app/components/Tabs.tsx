'use client';
import React, { ReactElement, useState } from 'react';

type Props = {
  children: ReactElement[];
  startingIndex: number;
};

const Tabs: React.FC<Props> = ({ children, startingIndex }) => {
  const [selectedTab, setSelectedTab] = useState(startingIndex);

  return (
    <>
      <div
        className="
      flex 
      items-center 
      justify-center 
      gap-4
      xs:my-2 
      sm:my-0
      "
      >
        {children.map((item, index) => (
          <div
            key={index}
            className={`
              flex
              items-center
              justify-center
              xs:text-sm 
              sm:text-base
              lg:text-lg
              `}
          >
            <button
              className={`
                ${
                  selectedTab === index
                    ? `bg-seaBlue-700
                   `
                    : ''
                }  
                rounded-lg
                px-3
                py-1
                ${item.props.size}
                `}
              onClick={() => {
                setSelectedTab(index);
              }}
            >
              {item.props.title}
            </button>
          </div>
        ))}
      </div>
      {children[selectedTab]}
    </>
  );
};

export default Tabs;
