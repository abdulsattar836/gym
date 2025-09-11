import { Link } from "react-router-dom";

// ==================== Logo Component ====================
export const Logo = () => (
  <div className="flex items-center ml-4 md:ml-12 whitespace-nowrap">
    <h1
      className="w-32 max-w-full text-white h-auto  text-2xl object-contain italic"
      style={{
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: "500",
      }}
    >
      FITNESS<span className="text-[#FF0000]">GYM</span>
    </h1>
  </div>
);

// ==================== Desktop Nav Links ====================
export const NavLinks = () => {
  return (
    <div className="hidden md:flex md:items-center  md:space-x-9 whitespace-nowrap">
      <Link
        to="/"
        className="text-md  text-[#FF0000] tracking-wide "
        style={{
          fontFamily: "Bebas Neue",
          fontWeight: "500",
        }}
      >
        HOME
      </Link>
      <Link
        to="/services"
        className="text-md text-white tracking-wide "
        style={{
          fontFamily: "Bebas Neue",
          fontWeight: "500",
        }}
      >
        SERVICE
      </Link>
      <Link
        to="/trainers"
        className="text-md  text-white tracking-wide "
        style={{
          fontFamily: "Bebas Neue",
          fontWeight: "500",
        }}
      >
        TRAINERS
      </Link>
      <Link
        to="/testimonial"
        className="text-md text-white tracking-wide "
        style={{
          fontFamily: "Bebas Neue",
          fontWeight: "500",
        }}
      >
        TESTIMONIAL
      </Link>
      <Link
        to="/contactus"
        className="text-md text-white tracking-wide "
        style={{
          fontFamily: "Bebas Neue",
          fontWeight: "500",
        }}
      >
        CONTACT US
      </Link>
    </div>
  );
};

// ==================== Right-side Actions ====================
export const RightActions = () => (
  <div className="hidden md:flex items-center justify-start space-x-4">
    <Link
      to="/signup"
      className="mt-0.5 mr-14 px-7 py-2.5 bg-[#FF0000]   text-white text-md text-bold whitespace-nowrap  transition-colors duration-300 tracking-wide"
      style={{
        fontFamily: "Bebas Neue",
        fontWeight: 500,
      }}
    >
      STARTED NOW
    </Link>
  </div>
);
