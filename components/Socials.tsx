import Link from 'next/link';
import React from 'react';
import { RiPaypalFill, RiSnapchatFill, RiSkypeFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri';

const icons = [
    { path: '/', name: <RiPaypalFill /> },
    { path: '/', name: <RiSnapchatFill /> },
    { path: '/', name: <RiSkypeFill /> },
    { path: '/', name: <RiFacebookFill /> },
    { path: '/', name: <RiInstagramFill /> },
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
