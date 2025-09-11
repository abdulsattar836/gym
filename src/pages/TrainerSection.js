import TrainerCard from "../components/TrainersCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../assests/Image.jpg";
import img2 from "../assests/Image2.jpg";
import img3 from "../assests/Image3.jpg";
import img4 from "../assests/Image4.jpg";

const trainers = [
  {
    name: "BORNEY EXITIED",
    role: "Rate Trainer :",
    img: img,
    rating: 5,
  },
  {
    name: "ELSA WINDIA",
    role: "Rate Trainer :",
    img: img2,
    rating: 5,
  },
  {
    name: "GEORGE ARYO",
    role: "Rate Trainer :",
    img: img3,
    rating: 5,
  },
  {
    name: "ANGELA MELLISA",
    role: "Rate Trainer :",
    img: img4,
    rating: 5,
  },
  {
    name: "BORNEY EXITIED",
    role: "Rate Trainer :",
    img: img,
    rating: 5,
  },
  {
    name: "ELSA WINDIA",
    role: "Rate Trainer :",
    img: img2,
    rating: 5,
  },
  {
    name: "GEORGE ARYO",
    role: "Rate Trainer :",
    img: img3,
    rating: 5,
  },
  {
    name: "ANGELA MELLISA",
    role: "Rate Trainer :",
    img: img4,
    rating: 5,
  },
];

const TrainersSection = () => {
  return (
    <section className="w-full mx-auto px-4 py-12 space-y-16 bg-[#121212] flex justify-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 text-center">
          <h2
            className="text-4xl md:text-7xl font-bold text-white"
            style={{
              fontWeight: 500,
              fontFamily: "Bebas Neue",
              letterSpacing: "1px",
            }}
          >
            OUR PROFESSIONAL
            <span className="text-[#FF0000]">
              <br />
              TRAINERS
            </span>
          </h2>
          <p
            className="text-white text-sm"
            style={{ fontFamily: "Poppins", fontWeight: 300 }}
          >
            Whether you're looking to set up a home gym or enhance your current{" "}
            <br />
            workout routine
          </p>
        </div>

        {/* Swiper carousel */}
        <div className="mt-14">
          <Swiper
            spaceBetween={10} // gap between slides
            slidesPerView={4} // default
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }, // desktop shows 4 cards
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {trainers.map((trainer, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <div className="w-56 h-96">
                  <TrainerCard {...trainer} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
