import Link from 'next/link';
import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";




const icons = [
    { id: 'github', path: "https://github.com/shohedul1", name: <FaGithub /> },
    { id: 'whatsapp', path: 'https://wa.me/8801758225368', name: <FaWhatsapp /> }, // Updated
    { id: 'facebook', path: 'https://www.facebook.com/sshohedul.islam', name: <RiFacebookFill /> },
    { id: 'linkedin', path: 'https://www.linkedin.com/in/shohedul-pramanik-5b8273318', name: <FaLinkedin /> },
];

interface SocialsProps {
    containerStyle?: string;
    iconsStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyle, iconsStyles }) => {
    return (
        <div className={`${containerStyle}`}>
            {icons.map((icon) => (
                <div className='flex relative' key={icon.id}>
                    <Link href={icon.path} className='hover:scale-125 transition-all duration-500'>
                        <div className={`${iconsStyles}`}>
                            {icon.name}
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    );
};

export default Socials;