import { Logo, NavLinks } from "../components/NavbarComponents";

const Footer = () => {
  return (
    <section className="hidden md:flex w-full bg-black px-4 py-12 flex-col items-center space-y-6">
      <div className="w-full mx-auto flex flex-col items-center space-y-6 md:-mb-6 mb-0">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center">
          <NavLinks />
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-gray-600" />

        {/* Bottom Section */}
        <div className="w-full flex flex-row flex-wrap gap-3 text-white text-left items-start">
          {/* First Block */}
          <div className="px-4">
            <p className="text-xs font-light" style={{ fontFamily: "Poppins" }}>
              Privacy
            </p>
          </div>

          {/* Second Block with Left Border */}
          <div className="px-6 border-l border-gray-300">
            <p className="text-xs font-light" style={{ fontFamily: "Poppins" }}>
              Terms & Condition
            </p>
          </div>

          {/* Copyright */}
          <div className="ml-auto">
            <p className="text-xs font-light" style={{ fontFamily: "Poppins" }}>
              Ⓒ 2023 All rights reserved. IronGym Company
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
