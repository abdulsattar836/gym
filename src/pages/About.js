import img1 from "../assests/Aboutus.jpg";
import img from "../assests/Aboutusimg.jpg";

const AboutUs = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center "
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-7  md:mt-16 flex flex-col">
          <h2
            className="text-4xl md:text-7xl font-bold text-white"
            style={{
              fontWeight: 500,
              fontFamily: "Bebas Neue",
              letterSpacing: "0.5px",
            }}
          >
            WE HAVE A LOT OF <span className="text-[#FF0000]">EXPERIENCE</span>
          </h2>
          <p
            className=" text-white text-sm "
            style={{
              fontFamily: "Poppins",
              fontWeight: "300",
            }}
          >
            In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam
            lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at
            lacus consequat justo odio condimentum dui. Faucibus id blandit
            feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut
            facilisi vel.
          </p>
          <p
            className=" text-white text-sm "
            style={{
              fontFamily: "Poppins",
              fontWeight: "300",
            }}
          >
            Sem consequat fermentum pellentesque risus purus quis gravida. Nulla
            porttitor ultrices facilisis non commodo diam morbi cursus eu.
            Semper ut in mauris gravida id cursus urna. Magnis vulputate orci
            risus felis eget lectus morbi. Et cursus mauris condimentum pretium
            arcu sed dignissim.
          </p>
          <button
            className="w-[23%] border  border-[#FF0000] px-4 py-4 text-md font-bold tracking-wide text-[#FF0000]"
            style={{
              fontFamily: "Bebas Neue",
              fontWeight: 500,
            }}
          >
            ABOUT US
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 hidden md:flex justify-end mt-24">
          <img
            src={img}
            alt="About"
            className=" shadow-lg max-w-xs w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
