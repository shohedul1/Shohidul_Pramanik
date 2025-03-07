'use client';

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setisVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setisVisible(true);
            }
            if (window.scrollY < 300) {
                setisVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="fixed bottom-4 animate-pulse right-4">
            {
                isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="bg-red-700 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
                    >
                        <FaArrowUp />
                    </button>
                )
            }

        </div>
    )
}

export default ScrollToTop