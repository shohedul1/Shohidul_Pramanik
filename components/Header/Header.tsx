'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Nav from './Nav';
import { ModeToggle } from './ModeToggle'
import { Fade } from 'react-awesome-reveal';

const Header = () => {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
                <header className={`${header
                    ? 'py-4 bg-white shadow-lg dark:bg-accent dark:shadow-3xl'
                    : 'py-4 dark:bg-transparent'
                    } sticky top-0 z-30 transition-all bg-white`}>
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            {/* Centering logo */}
                            <div className="flex-1">
                                <Logo />
                            </div>
                            <div className="flex items-center gap-x-6 justify-center">
                                {/* Centered Navigation (Desktop) */}
                                <Nav
                                    className="hidden xl:flex gap-2 items-center justify-center"
                                    linkStyle="capitalize relative hover:text-primary transition-all"
                                />

                                {/* Mode Toggle */}
                                <ModeToggle />
                                {/* Mobile Navigation */}
                                <div className="xl:hidden ">
                                    <MobileNav />

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Fade>
        </>
    );
};

export default Header;
