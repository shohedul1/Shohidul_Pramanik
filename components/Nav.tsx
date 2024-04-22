// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { motion } from 'framer-motion';
// import React, { FC } from 'react';
// const link = [
//     { path: '/', name: 'home' },
//     { path: '/about', name: 'about' },
//     { path: '/protfolio', name: 'protfolio' },
//     { path: '/pricing', name: 'pricing' },
//     { path: '/contact', name: 'contact' }
// ]

// interface NavProps {
//     className: string;
    

// }

// const Nav: FC<NavProps> = ({ className, }) => {
//     const path = usePathname();
//     return (
//         <nav className={`${className}`}>
//             {
//                 link.map((link, index) => {
//                     return (
//                         <Link
//                             key={index}
//                             className={`capitalize relative hover:text-primary transition-all `}
//                             href={link.path}>
                              
//                             {link.path === path && (
//                                 <motion.span
//                                     initial={{ y: '-100%' }}
//                                     animate={{ y: 0 }}
//                                     transition={{ type: 'tween' }}
//                                     layoutId='underline'
//                                     className='absolute left-0 top-full h-[2px] bg-primary w-full'
//                                 >
//                                     {link.name}
//                                 </motion.span>
//                             )}
//                         </Link>
//                     )
//                 })
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
    motionSyle?:string
}

const Nav: FC<NavProps> = ({ className,linkSyle,motionSyle }) => {
    const path = usePathname();
   
    return (
        <nav className={`${className}`}>
            {
                links.map((link, index) => (
                    <Link key={index} href={link.path} className={`${linkSyle}`}>
                            {link.name}
                            {link.path === path && (
                                <motion.span
                                    initial={{ y: '-100%' }}
                                    animate={{ y: 0 }}
                                    transition={{ type: 'tween' }}
                                    layoutId='underline'
                                    className={`${motionSyle}`}
                                ></motion.span>
                            )}
                       
                    </Link>
                ))
            }
        </nav>
    );
};

export default Nav;

