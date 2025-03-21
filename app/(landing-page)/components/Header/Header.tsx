
'use client';
import { useEffect, useState } from 'react';
import Logo from './buttonComponents/Logo/Logo';
import Nav from './Nav';
import { ModeToggle } from './ModeToggle';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);





    return (
        <header
            className={`${header
                ? 'bg-white shadow-lg dark:bg-accent dark:shadow-3xl'
                : 'dark:bg-transparent'
                } w-full  top-0 left-0 z-30 transition-all py-4 overflow-hidden`}
        >
            <div className="px-5 container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Fade direction="left" delay={100} cascade damping={0.1} triggerOnce>
                        <Logo />
                    </Fade>

                    {/* Navigation */}
                    <div className="flex items-caenter gap-x-6 justify-center">
                        <Nav className="flex gap-2 items-center justify-center" />
                        <div className='hidden md:block'>
                            <ModeToggle />
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
