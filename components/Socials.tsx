import Link from 'next/link';
import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const icons = [
    { path: 'https://wa.me/01758225368', name: <FaWhatsapp /> },
    { path: 'https://www.facebook.com/sshohedul.islam', name: <RiFacebookFill /> },
    { path: 'https://www.linkedin.com/in/shohedul-pramanik-5b8273318', name: <FaLinkedin /> },
];

interface SocialsProps {
    containerStyle?: string;
    iconsStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyle, iconsStyles }) => {
    return (
        <div className={`${containerStyle}`}>
            {icons.map((icon, index) => {
                return (
                    (
                        <Link href={icon.path} key={index}>
                            <div className={`${iconsStyles}`}>
                                {icon.name}
                            </div>
                        </Link>
                    )
                )
            })}
        </div>
    );
};

export default Socials;
