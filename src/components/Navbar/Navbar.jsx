import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "#about-us", // Update path to the ID of the About Us section
  },
  {
    id: 3,
    title: "Services",
    path: "#services",
  },
  {
    id: 4,
    title: "Enquiry",
    path: "#enquiry",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#footer",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 lg:py-12 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-32 w-auto"
          />
        </div>

        {/* Desktop Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 text-lg">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                <a
                  href={menu.path}
                  className="inline-block py-3 px-4 hover:text-[#635ad9] relative group font-body"
                >
                  <div className="bg-secondary absolute mt-2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>

                {/* Bulging effect on hover */}
                <style jsx>{`
                  .group:hover a {
                    transform: scale(1.3); /* Make the text grow */
                    transition: transform 0.2s ease-in-out; /* Smooth transition */
                  }
                `}</style>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Section */}
        <div className="lg:hidden">
          <IoMdMenu
            className="text-4xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </motion.div>

      {/* Mobile Menu Section */}
      <div
        className={`lg:hidden absolute top-0 right-0 w-[100%] bg-white text-black transition-transform duration-300 ease-in-out ${isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"}`}
      >
        <div className="absolute top-4 left-4">
          <IoMdClose
            className="text-lg cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <ul className="flex items-center justify-around py-4 space-x-6">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.path}
                className="text-sm font-semibold hover:text-secondary"
                onClick={toggleMenu}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
