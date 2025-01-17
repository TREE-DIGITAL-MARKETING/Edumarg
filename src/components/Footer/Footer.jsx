import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <footer id="footer" className="py-28 bg-[#e1dada] relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First Section (EduMarg) */}
          <div className="space-y-4 max-w-[300px] mx-auto md:mx-0">
            <h1 className="text-lg font-bold font-body text-center md:text-left">EduMarg</h1>
            <p className="text-black font-body text-sm text-center md:text-left">
              Corporate office<br />
              Edu Marg
              53/3942<br />
              Asher building
              2nd Floor<br />
              Ponnurunni, Vyttila<br />
              Kochi, 682019
            </p>
          </div>

          {/* Second Section (Lets Chat and Links) */}
          <div className="md:flex md:justify-between sm:text-center sm:max-w-[90%] mx-auto space-y-6 md:space-y-0 md:space-x-6">
            {/* Let's Chat */}
            <div className="space-y-4 text-center sm:text-left">
              <h1 className="text-lg md:text-xl font-bold font-body">Lets Chat!</h1>
              <div className="text-black">
                <ul className="space-y-2 text-sm md:text-xl font-body">
                  <li className="cursor-pointer hover:text-[#7338ac] duration-200">
                    Contact number: <br /> 9207115870
                  </li>
                  <li className="cursor-pointer hover:text-[#7338ac] duration-200">
                    E-mail: <br /> EduMarg2024@gmail.com
                  </li>
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4 text-center sm:text-left">
              <h1 className="text-lg md:text-xl font-bold font-body">Links</h1>
              <div className="text-black">
                <ul className="space-y-2 text-sm md:text-xl">
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

          {/* Third Section (Get in Touch) */}
          <div className="space-y-4 max-w-[300px] mx-auto text-center md:text-left">
            <h1 className="font-body text-lg md:text-xl font-bold">Get in Touch</h1>
            <div className="flex items-center justify-center md:justify-start">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full md:w-auto py-4 focus:ring-0 focus:outline-1 placeholder:text-black"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                go
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 py-3 justify-center md:justify-start">
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

      {/* Underline and Footer Text */}
      <div className="absolute bottom-0 w-full py-4 border-t border-black">
        <div className="flex justify-center items-center text-sm text-black">
          <a
            href="https://tree.it.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm"
          >
            <PiCopyright className="inline-block text-xl" />{" "}
            <span className="hover:text-[#7338ac] font-body text-sm md:text-xl">
              Tree Femme 2024
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
