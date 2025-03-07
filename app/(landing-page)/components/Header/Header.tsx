



'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Nav from './Nav';
import { ModeToggle } from './ModeToggle';

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
            } w-full fixed top-0 left-0 z-30 transition-all py-4`}
        >
            <div className="container ">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-1">
                        <Logo />
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-x-6 justify-center">
                        <Nav className="hidden xl:flex gap-2 items-center justify-center" linkStyle="capitalize relative hover:text-primary transition-all" />
                        <ModeToggle />
                        <div className="xl:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
