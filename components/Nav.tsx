
// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { motion } from 'framer-motion';
// import React, { FC } from 'react';

// const links = [
//     { path: '/', name: 'home' },
//     { path: '/about', name: 'about' },
//     { path: '/portfolio', name: 'portfolio' },
//     { path: '/pricing', name: 'pricing' },
//     { path: '/contact', name: 'contact' }
// ];

// interface NavProps {
//     className?: string;
//     linkSyle?: string;
//     motionSyle?: string
// }

// const Nav: FC<NavProps> = ({ className, linkSyle, motionSyle }) => {
//     const path = usePathname();

//     return (
//         <nav className={`${className}`}>
//             {
//                 links.map((link, index) => (
//                     <Link key={index} href={link.path} className={`${linkSyle}`}>
//                         {link.name}
//                         {link.path === path && (
//                             <motion.span
//                                 initial={{ y: '-100%' }}
//                                 animate={{ y: 0 }}
//                                 transition={{ type: 'tween' }}
//                                 layoutId='underline'
//                                 className={`${motionSyle}`}
//                             ></motion.span>
//                         )}

//                     </Link>
//                 ))
//             }
//         </nav>
//     );
// };

// export default Nav;

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

const links = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/portfolio', name: 'portfolio' },
  { path: '/pricing', name: 'pricing' },
  { path: '/contact', name: 'contact' }
];

interface NavProps {
  className?: string;
  linkSyle?: string;
  motionSyle?: string;
  onClick?: () => void; // Add an onClick prop
}

const Nav: FC<NavProps> = ({ className, linkSyle, motionSyle, onClick }) => {
  const path = usePathname();

  return (
    <nav className={`${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${linkSyle}`}
          onClick={onClick} // Call onClick when a link is clicked
        >
          {link.name}
          {link.path === path && (
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId="underline"
              className={`${motionSyle}`}
            ></motion.span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
