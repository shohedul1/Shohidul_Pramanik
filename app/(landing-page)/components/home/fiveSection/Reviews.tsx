'use client';
//react awesome reveal animation
import { Fade } from "react-awesome-reveal";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: "Jenifer",
    rating: 5,
    review: 'Working with Shohidul Pramanik was a pleasure. They delivered a high-quality MERN stack application that exceeded our expectations.'
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: "Lopez Chris",
    rating: 4,
    review: 'Shohidul Pramanik demonstrated exceptional expertise in React and Node.js, ensuring our project was completed on time and within budget.'
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: "Hamilton",
    rating: 5,
    review: 'The full-stack web application developed by Shohidul Pramanik has significantly improved our business operations. Their attention to detail is commendable.'
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: "Lucifer",
    rating: 3,
    review: 'We were impressed by Shohidul Pramanik\'s ability to integrate complex features seamlessly into our existing system using the MERN stack.'
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: "Mark Steve",
    rating: 5,
    review: 'Shohidul Pramanik provided excellent communication throughout the project, making the development process smooth and transparent.'
  },
  {
    avatar: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/istockphoto-1729587429-612x612_ukjlaz.jpg',
    name: "Stork Gem",
    rating: 4,
    review: 'Their proficiency in MongoDB and Express.js ensured our application\'s backend was robust and scalable.'
  },
  {
    avatar: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/download_1_kcts8v.jpg',
    name: "Emily Clark",
    rating: 5,
    review: 'The user interface designed by Shohidul Pramanik using React is intuitive and user-friendly, receiving positive feedback from our customers.'
  },
  {
    avatar: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/portrait-smile-woman-british-flag-national-pride-support-union-jack-face-happy-girl-uk-portrait-smile-349512829_tykrkx.webp',
    name: "Michael Brown",
    rating: 4,
    review: 'We appreciated Shohidul Pramanik\'s proactive approach to problem-solving and their dedication to delivering a top-notch product.'
  },
  {
    avatar: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/images_1_l7xgmk.jpg',
    name: "Sarah Johnson",
    rating: 5,
    review: 'The MERN stack solution implemented by Shohidul Pramanik has enhanced our platform\'s performance and reliability.'
  },
  {
    avatar: 'https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/images_vic3sg.jpg',
    name: "David Lee",
    rating: 4,
    review: 'Shohidul Pramanik\'s commitment to staying updated with the latest technologies ensured our project utilized best practices and modern tools.'
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
      />
    );
  }
  return <div className="flex">{stars}</div>;
};

const Reviews = () => {
  return (
    <section className="p-5">
      <div className="container flex flex-col gap-5 mx-auto">

        <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Client say about my work
            </h2>
          </div>
        </Fade>
        <Fade direction='up' delay={100} cascade damping={0.1} triggerOnce={true}>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-full "
            aria-label="Client reviews carousel"
          >
            {reviewsData.map((person, index) => (
              <SwiperSlide key={index} aria-label={`Review by ${person.name}`}>
                <div className="group mb-5">
                  <Card className="py-5 px-8 mb-10 cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 dark:hover:text-black dark:text-white transition-all duration-700">
                    <CardHeader>
                      <div className='flex flex-col items-center gap-2'>
                        <Image
                          src={person.avatar}
                          alt={`${person.name}'s avatar`}
                          width={500}
                          height={500}
                          priority
                          className=' swiper-lazy w-20 h-20  rounded-full'
                        />
                        <CardTitle>{person.name}</CardTitle>
                        <StarRating rating={person.rating} />
                      </div>
                    </CardHeader>

                    <CardDescription className='text-lg text-muted-foreground group-hover:text-black dark:text-white group-hover:dark:text-black transition-colors duration-700'>
                      <span className="absolute -translate-x-5"> <BiSolidQuoteAltLeft /></span>
                      {person.review}
                      <span className="absolute translate-x-2 translate-y-2"> <BiSolidQuoteAltRight /></span>


                    </CardDescription>


                  </Card>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </div>
    </section >
  );
};

export default Reviews;
