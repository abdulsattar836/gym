import { useState } from "react";
import hero from "../assests/Hero.jpg";
import Navbar from "./Navbar";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center h-[50vh] md:h-[120vh] lg:h-[150vh]"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar isOpen={menuOpen} setIsOpen={setMenuOpen} />
      </div>

      {/* Hero Text */}
      <div
        className={`relative z-10 flex flex-col h-full justify-start items-start md:h-[100vh] h-[60vh] md:mt-28 mt-12 px-8 md:px-20 text-white transition-all duration-300 ${
          menuOpen
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <h1
          className="text-white text-4xl md:text-7xl leading-relaxed"
          style={{ fontFamily: "Bebas Neue" }}
        >
          READY TO TRAIN <br />
          <span className="text-[#FF0000] block mt-3">YOUR BODY</span>
        </h1>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 300,
          }}
          className="mt-4"
        >
          Gym training is a structured and disciplined approach to physical
          exercise that
          <br />
          focuses, on strength, endurance and overall fitness improvement.
        </p>

        <button
          className="mt-24 border  border-[#FF0000] px-7 py-4 text-md font-bold tracking-wide text-[#FF0000]"
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: 500,
          }}
        >
          LET'S JOIN NOW
        </button>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24"> */}
        <div className="flex flex-row flex-wrap gap-3 mt-24 text-center">
          {/* First Block */}
          <div className="flex-1 px-4">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#FF0000] item-center"
              style={{
                fontFamily: "Bebas Neue",
                fontWeight: 500,
              }}
            >
              20+
            </h3>
            <p
              className="text-xs md:text-sm whitespace-nowrap"
              style={{
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
            >
              Years of Experience
            </p>
          </div>

          {/* Second Block with Left Border */}
          <div className="flex-1 border-l px-6 border-gray-300">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#FF0000]"
              style={{
                fontFamily: "Bebas Neue",
                fontWeight: 500,
              }}
            >
              15K+
            </h3>
            <p
              className="text-xs md:text-sm"
              style={{
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
            >
              Members Join
            </p>
          </div>

          {/* Third Block with Left Border */}
          <div className="flex-1 border-l px-6 border-gray-300">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#FF0000]"
              style={{
                fontFamily: "Bebas Neue",
                fontWeight: 500,
              }}
            >
              14K+
            </h3>
            <p
              className="text-xs md:text-sm whitespace-nowrap"
              style={{
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
            >
              Happy Members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
