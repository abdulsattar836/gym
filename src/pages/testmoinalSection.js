import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import clientImage from "../assests/Image5.jpg";
import TestimonialCard from "../components/TestominalCard";

const testimonials = [
  {
    name: "Jhony Breaker",
    quote: (
      <>
        {" "}
        "I am extremely grateful for the positive impact gym training has had on
        my life; through consistent training, expert <br /> guidance from
        coaches, and access to top-notch facilities, I have witnessed a
        remarkable transformation in <br /> strength, endurance, and overall
        fitness levels."
      </>
    ),

    image: clientImage,
    rating: 5,
  },
  {
    name: "Sara Smith",
    quote: (
      <>
        {" "}
        "The trainers are amazing and the environment is motivating. <br /> I
        have achieved my fitness goals faster than I imagined!"
      </>
    ),
    image: clientImage,
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="testimonial-section bg-black text-white py-12">
      <div className="max-w-6xl mx-auto text-center px-4 relative">
        <h2
          className="text-4xl md:text-7xl font-bold text-white mb-16"
          style={{
            fontWeight: 500,
            fontFamily: "Bebas Neue",
            letterSpacing: "1px",
          }}
        >
          WHAT <span className="text-red-600">CLIENTS SAY</span> WITH US
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 1 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance}
          speed={1200}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <button
          ref={prevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white  transition z-10"
        >
          <FaChevronLeft size={40} />
        </button>
        <button
          ref={nextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white transition z-10"
        >
          <FaChevronRight size={40} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
