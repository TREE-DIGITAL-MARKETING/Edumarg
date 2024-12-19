import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroPng from "../../assets/hero.jpg";
import LogoPng from "../../assets/logo.png";
import BgPng from "../../assets/bg.jpg";
import AboutPng from "../../assets/About.jpg";
import { motion } from "framer-motion";

// Your corrected FadeUp function
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,  // Now delay is passed correctly
        ease: "easeInOut",
      }
    }
  };
};

const Hero = () => {
  // Array of images for carousel
  const images = [HeroPng, AboutPng, LogoPng, BgPng];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image in the array
  const moveToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image when the last image is reached
  };

  // Set up autoplay interval
  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextImage();
    }, 3000); // 3 seconds interval for the autoplay

    // Clear interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="bg-light dark:bg-black overflow-hidden relative">
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug font-body"
            >
              Ignite Your <span className="text-secondary">Learning</span>
              &nbsp;Journey with the perfect partner
              <p className="font-body text-lg lg:text-lg whitespace-nowrap">
                Guiding your minds to begin your educational journey
              </p>
            </motion.h1>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Image Carousel with Slide Transition */}
        <div className="flex justify-center items-center relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full flex">
            {/* Current image (slides to left) */}
            <motion.img
              key={currentIndex} // Ensures each image has a unique key
              src={images[currentIndex]} // Dynamically change image based on current index
              alt={`carousel-${currentIndex}`}
              className="absolute w-full h-full object-cover"
              initial={{ x: 0 }} // Initially, the current image is in place
              animate={{ x: "-100%" }} // Move current image to the left
              transition={{
                duration: 1, // Duration of sliding transition
                ease: "easeInOut",
              }}
            />

            {/* Next image (slides in from the right) */}
            <motion.img
              key={(currentIndex + 1) % images.length} // Next image based on index
              src={images[(currentIndex + 1) % images.length]} // Dynamically update the next image
              alt={`carousel-${(currentIndex + 1) % images.length}`}
              className="absolute w-full h-full object-cover"
              initial={{ x: "100%" }} // Start from the right side (off-screen)
              animate={{ x: 0 }} // Slide to its position
              transition={{
                duration: 1, // Duration of sliding transition
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
