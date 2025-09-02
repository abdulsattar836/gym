import { Link } from "react-router-dom";

// ==================== Logo Component ====================
export const Logo = () => (
  <div className="flex items-center ml-4 md:ml-14 whitespace-nowrap">
    <h1 className="w-32 md:w-24 max-w-full h-auto  font-condensedItalic font-bold text-2xl object-contain">
      Fitness<span className="text-[#FF0000]">Gym</span>
    </h1>
  </div>
);

// ==================== Desktop Nav Links ====================
export const NavLinks = () => {
  return (
    <div className="hidden md:flex md:items-center  md:space-x-6 whitespace-nowrap">
      <Link
        to="/"
        className="text-sm  font-bold font-bebas text-[#FF0000] transition"
      >
        HOME
      </Link>
      <Link
        to="/services"
        className="text-sm font-bold text-white font-bebas  transition"
      >
        SERVICES
      </Link>
      <Link
        to="/trainers"
        className="text-sm font-bold text-white font-bebas transition"
      >
        TRAINERS
      </Link>
      <Link
        to="/testimonial"
        className="text-sm font-bold font-bebas text-white transition"
      >
        TESTIMONIAL
      </Link>
      <Link
        to="/contactus"
        className="text-sm text-white font-bold font-bebas transition"
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
      className="mt-0.5 ml-6 px-5 py-2.5 bg-[#FF0000] font-bebas text-white text-sm font-bold whitespace-nowrap  transition-colors duration-300"
    >
      STARTED NOW
    </Link>
  </div>
);
