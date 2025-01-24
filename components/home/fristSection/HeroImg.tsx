import Image from 'next/image';
import React from 'react';

interface Props {
  containerStyles: string; // Specify the type explicitly
  imgSrc: string;
}

const HeroImg: React.FC<Props> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        layout="responsive"
        width={505}
        height={505}
        className='rounded-xl object-cover w-[500px] h-[400px]'
        alt='image'
      />
    </div>
  );
};

export default HeroImg;
