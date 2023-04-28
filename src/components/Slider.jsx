import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import TestimonialsCard from './TestimonialsCard';
import userImage1 from "../assets/images/images.jpg"
import userImage2 from "../assets/images/image2.jpg"
import userImage3 from "../assets/images/image3.jpg"
import userImage4 from "../assets/images/image4.jpg"

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><TestimonialsCard 
      content="I made the right choice by choosing the FitClub and choosing  the right plan and program i already achieved my ideal body"
      name="Maththew Hendrickson"
      image={userImage1}
      /></SwiperSlide>
      <SwiperSlide><TestimonialsCard 
      content="I made the right choice by choosing the FitClub and choosing  the right plan and program i already achieved my ideal body"
      name="Maththew Richards"
      image={userImage2}
      /></SwiperSlide>
      <SwiperSlide><TestimonialsCard 
      content="I made the right choice by choosing the FitClub and choosing the right plan and program i already achieved my ideal body"
      name="Gabriel Ericson"
      image={userImage3}
      /></SwiperSlide>
      <SwiperSlide><TestimonialsCard
      content="I made the right choice by choosing the FitClub and choosing  the right plan and program i already achieved my ideal body"
      name="Emily Heights"
      image={userImage4}
      /></SwiperSlide>
  
    </Swiper>
  );
};