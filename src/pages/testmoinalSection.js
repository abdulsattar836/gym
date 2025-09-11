import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientImage from "../assests/Image5.jpg";
import TestimonialCard from "../components/TestominalCard";

const testimonials = [
  {
    name: "Jhony Breaker",
    quote:
      "I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
    image: clientImage,
    rating: 5,
  },
  {
    name: "Sara Smith",
    quote:
      "The trainers are amazing and the environment is motivating. I have achieved my fitness goals faster than I imagined!",
    image: clientImage,
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <section className="testimonial-section bg-black text-white py-12">
      <div className="max-w-6xl mx-auto text-center px-4">
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

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
