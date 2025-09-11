import { useNavigate } from "react-router-dom";
import img from "../assests/CTA.jpg";

const CTA = () => {
  const navigate = useNavigate();
  const gotosignin = () => {
    navigate("/login");
  };
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center h-[50vh] md:h-[100vh] lg:h-[130vh]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex justify-center md:justify-end">
        <div className="space-y-6 text-center md:text-left mt-20 md:mt-44 md:mr-14">
          <h2
            className="text-4xl md:text-7xl font-bold md:mt-0 mt-14 text-white"
            style={{
              fontWeight: 500,
              fontFamily: "Bebas Neue",
              letterSpacing: "1px",
            }}
          >
            LET’S START GYM{" "}
            <span className="text-[#FF0000] block -mt-10  md:-mt-16">
              <br />
              TRAINING NOW
            </span>
          </h2>
          <p
            className="text-white text-sm"
            style={{
              fontFamily: "Poppins",
              fontWeight: "300",
            }}
          >
            get 50% off the first three classes you sign up for this month any
            GYM <br /> membership
          </p>
          <div>
            <form className="flex flex-col md:flex-row md:space-x-1 items-center md:items-start">
              <div className="w-full md:w-auto">
                <input
                  className="w-full md:w-[92%] px-4 py-3 mt-4 md:mt-8 border border-white bg-black text-white placeholder-white placeholder:font-light"
                  type="text"
                  placeholder="Enter Your Name..."
                />
              </div>
              <div className="w-full md:w-auto">
                <input
                  className="w-full md:w-[92%] px-4 py-3 mt-4 md:mt-8 border border-white bg-black text-white placeholder-white placeholder:font-light"
                  type="tel"
                  placeholder="Numbers Phone..."
                />
              </div>
            </form>
            <input
              className="w-full md:w-[88%] px-4 py-3 mt-4 md:mt-6 border border-white bg-black text-white placeholder-white placeholder:font-light"
              type="email"
              placeholder="Your Email Address..."
            />
            <button
              onClick={gotosignin}
              className="mt-6 md:mt-7 border border-[#FF0000] px-7 py-4 text-md font-bold tracking-wide text-[#FF0000]"
              style={{
                fontFamily: "Bebas Neue",
                fontWeight: 500,
              }}
            >
              LET'S JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
