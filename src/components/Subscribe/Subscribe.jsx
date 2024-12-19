import React from "react";
import { AiFillBank } from "react-icons/ai";
import BgImage from "../../assets/bg.jpg";
import { motion } from "framer-motion"; // Corrected the import

const bgStyle = {
  backgroundImage: `url(${BgImage})`, // Fixed with backticks
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section id="enquiry" className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48 relative"
      >
        {/* Applying the blur effect to the background */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center relative z-10"
        >
          <div className="text-center space-y-4 lg:max-w-[630px] mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold font-body !leading-snug">Enquiry Form</h1>
            <p className="mb-8 font-body">Please fill out the form below to inquire about our courses.</p>

            {/* Enquiry Form */}
            <form className="space-y-6">
              {/* Name and Age in a single row for desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-body"></label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-body"></label>
                  <input
                    type="number"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              {/* Phone and Email in a single row for desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-body"></label>
                  <input
                    type="tel"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-body"></label>
                  <input
                    type="email"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Qualification and Course Needed in a single row for desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-body"></label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your qualification"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-body"></label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter the course"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="primary-btn !mt-8 inline-flex items-center gap-4 group font-body"
                >
                  Submit Enquiry
                  <AiFillBank className="group-hover:animate-bounce group-hover:text-lg duration-200" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
