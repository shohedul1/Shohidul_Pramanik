'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import Service from './Service';

const links = [
  { path: '/about', name: 'About' },
  { path: '/portfolio', name: 'Portfolio' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/contact', name: 'Contact' }
];

interface NavProps {
  className?: string;
  linkStyle?: string;
  onClick?: () => void; // Corrected the onClick type
}


const Nav: FC<NavProps> = ({ className, linkStyle, onClick }) => {
  return (
    <nav className={`${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          onClick={onClick}
          className={`${linkStyle} relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50`}
        >
          {/* Background transition on hover */}
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

          {/* Right arrow icon */}
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>

          {/* Link Text */}
          <span className="relative text-sm">{link.name}</span>
        </Link>
      ))}
      <Service/>
    </nav>
  );
};

export default Nav;