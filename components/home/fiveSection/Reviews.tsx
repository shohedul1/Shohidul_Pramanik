'use client';
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';




const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: "Jenifer",
    job: 'Chief',
    review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and priaising pain was born and I will give you a complete accout.'
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: "Lopez Chris",
    job: 'ESO',
    review: 'You how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete accout of the system, and expound'
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: "Homilton",
    job: 'Chief',
    review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and priaising pain was born and I will give you a complete accout.'
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: "Lucifer",
    job: 'App Developer',
    review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and priaising pain was born and I will give you a complete accout.'
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: "Mark Steve",
    job: 'Chief',
    review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and priaising pain was born and I will give you a complete accout.'
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: "Stork Gem",
    job: 'Chief',
    review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and priaising pain was born and I will give you a complete accout.'
  },
]

const Reviews = () => {
  const title = "text-center mb-8 xl:mb-16 text-primary text-4xl";
  const card = 'p-8 cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700';
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
      {/* <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto"></h2> */}

        <h2 className={title}> They say about our work</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[410px] '
        >
          {
            reviewsData.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card key={index} className={card}>
                    <CardHeader className='p-0 mb-3'>
                      <div className='flex flex-col items-start gap-x-4'>
                        <Image
                          src={person.avatar}
                          alt='iamge'
                          width={70}
                          height={70}
                          priority
                          className='mb-2'
                        />
                        {/* name */}
                        <div className='flex flex-col'>
                          <CardTitle>{person.name}</CardTitle>
                          <p>{person.job}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                  </Card>
                </SwiperSlide>
              )
            })
          }
        </Swiper> 
         
      </div>
    </section>
  )
}

export default Reviews