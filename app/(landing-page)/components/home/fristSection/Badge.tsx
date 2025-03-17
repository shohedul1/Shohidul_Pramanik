'use client';

import React from 'react';
import CountUp from 'react-countup';

interface BadgeProps {
  icon: React.ReactNode;
  endCountNum: number;
  badgeText: string;
  endCountText: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, endCountNum, badgeText, endCountText }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden px-4 py-3 rounded-full bg-primary dark:bg-primary shadow-lg 
                    dark:bg-gray-900 dark:shadow-xl dark:border dark:border-gray-700 transition-all duration-300">
      <div className="text-xl text-white dark:text-white">{icon}</div>
      <div className="flex items-center justify-center ">
        <div className="text-xl leading-none font-bold text-white dark:text-gray-100">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="text-xl leading-none font-bold text-white dark:text-white">{badgeText}</div>
      </div>
    </div>
  );
};

export default Badge;
