import Image from 'next/image';
import React from 'react';

interface Props {
  containerStyles: string; // Specify the type explicitly
  imgSrc: string;
}
interface Props {
  containerStyles: string;
  imgSrc: string;
}

const HeroImg: React.FC<Props> = ({ containerStyles, imgSrc }) => {

  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        width={505}
        layout="fill" alt="Shohidul Pramanik"
        height={505}
        className='rounded-xl object-cover w-[500px] h-[400px]'
      />
    </div>
  );
};

export default HeroImg;
