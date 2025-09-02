import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, NavLinks, RightActions } from "../components/NavbarComponents";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [showNav, setShowNav] = useState(true); // For showing/hiding nav links on resize/zoom

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleResize = () => {
      const zoom = window.devicePixelRatio; // Detect browser zoom level
      const width = window.innerWidth; // Get screen width

      // Hide nav links if zoom ≥ 1.5 or screen width < 768px
      setShowNav(!(zoom >= 1.5 || width < 768));

      // Auto-close mobile menu if window width ≥ 768px
      if (width >= 768) setIsOpen(false);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, [isOpen]);

  return (
    <nav className="bg-transparent sticky top-0 z-50 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        {/* Navbar Container */}
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Center: Navigation Links (Hidden on Mobile) */}
          {showNav && (
            <div className="hidden md:flex justify-center flex-grow">
              <NavLinks />
            </div>
          )}

          {/* Right Side: Buttons & Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/signup"
              className="md:hidden px-4 py-2  bg-[#FF0000] font-bebas text-white text-sm font-bold whitespace-nowrap transition-colors duration-300"
            >
              STARTED NOW
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-200  focus:outline-none md:hidden"
            >
              <svg
                className={`h-7 w-7 transform transition-transform duration-300 ${
                  isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Actions */}
            <div className="hidden md:block">
              <RightActions />
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="w-full border-gray-200" />

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-lg px-4 pb-3 space-y-2 z-50 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto bg-white/30 backdrop-blur-md"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>
          HOME
        </Link>
        <Link
          to="/services"
          className="block py-2"
          onClick={() => setIsOpen(false)}
        >
          SERVICES
        </Link>
        <Link
          to="/trainers"
          className="block py-2"
          onClick={() => setIsOpen(false)}
        >
          TRAINERS
        </Link>
        <Link
          to="/testimonial"
          className="block py-2"
          onClick={() => setIsOpen(false)}
        >
          TESTIMONIAL
        </Link>
        <Link
          to="/contact-us"
          className="block py-2"
          onClick={() => setIsOpen(false)}
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
