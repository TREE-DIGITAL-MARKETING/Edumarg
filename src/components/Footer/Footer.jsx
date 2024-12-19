import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="footer" className="py-28 bg-[#e1dada]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">

          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold font-body">
              EduMarg
            </h1>
            <p className="text-black font-body text-xl">
              Corporate office<br />
              Edu Marg
              53/3942<br />
              Asher building
              2nd Floor<br />
              Ponnurunni, Vyttila<br />
              Kochi, 682019
            </p>
          </div>

          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold font-body">
                Lets Chat!
              </h1>
              <div className="text-black">
                <ul className="space-y-2 text-lg font-body">
                  <li className="cursor-pointer hover:text-[#7338ac] duration-200">
                    Contact number: <br /> 9207115870
                  </li>
                  <li className="cursor-pointer hover:text-[#7338ac] duration-200">
                    E-mail: <br /> EduMarg2024@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold font-body">
                  Links
                </h1>
                <div className="text-black">
                  <ul className="space-y-2 text-lg">
                    <li className="cursor-pointer hover:text-[#7338ac] duration-200 font-body">
                    <a href="#hero">Home</a>
                    </li>
                    <li className="cursor-pointer hover:text-[#7338ac] duration-200 font-body">
                    <a href="#about-us">About</a>
                    </li>
                    <li className="cursor-pointer hover:text-[#7338ac] duration-200 font-body">
                      <a href="#services">Services</a>
                    </li>

                    <li className="cursor-pointer hover:text-[#7338ac] duration-200 font-body">
                    <a href="#footer">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="font-body text-xl font-bold">
              Get in Touch
            </h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-1 placeholder:text-black "
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                go
              </button>
            </div>

            {/* social icons*/}
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-[#7338ac] hover:scale-105 duration-200 text-2xl" />
              </a>
              <a href="#">
                <FaYoutube className="cursor-pointer hover:text-[#7338ac] hover:scale-105 duration-200 text-2xl" />
              </a>
              <a href="#">
                <FaInstagram className="cursor-pointer hover:text-[#7338ac] hover:scale-105 duration-200 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
