import Link from 'next/link';
import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";






const icons = [
    { id: 'github', path: "https://github.com/shohedul1", name: <FaGithub /> },
    { id: 'upwork', path: "https://www.upwork.com/services/product/development-it-mern-stack-developer-next-js-tailwind-css-material-ui-expert-1891134148701822595?ref=project_share", name: < FaUpwork /> },
    { id: 'fiverr', path: 'https://www.fiverr.com/s/rEK2G7y', name: <TbBrandFiverr /> }, // Updated
    { id: 'whatsapp', path: 'https://wa.me/8801758225368', name: <FaWhatsapp /> }, // Updated
    { id: 'facebook', path: 'https://www.facebook.com/sshohedul.islam', name: <RiFacebookFill /> },
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