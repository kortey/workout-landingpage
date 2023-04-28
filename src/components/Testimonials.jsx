import TestimonialsCard from "./TestimonialsCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Slider } from "./Slider";
function Testimonials() {
    return (
      <div id="testimonials" className="w-[80%] mx-auto mb-20">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-10">WHAT THEY SAY ABOUT FITCLUB</h1>
    
        <Slider />
           
        
       
      </div>
    );
  }
  
  export default Testimonials;