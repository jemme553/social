'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default function Slider({direction,loop,className,pagination,data}) {
  console.log(direction,loop,className,data)
  return (
    <Swiper
      slidesPerView={1}
      direction={direction}
      className={className}
      centeredSlides={false}
      loop={loop}
      pagination={{
        clickable: {pagination},
      }}
      modules={pagination && [Pagination]}
  >
    {
      data.map((image,index)=>
      <SwiperSlide key={index} className='w-full'>
        <Image src={image} alt='video'/>
      </SwiperSlide>
      )
    }
    </Swiper>
  )
}