import React from "react";
import BannerPng from "../../assets/banner2.jpg";
import { motion } from "framer-motion";

const Banner2 = () => {
    return (
        <section id="about-us" className="bg-light"> {/* Added id here for smooth scrolling */}
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 px-4 sm:px-6 md:px-0"> {/* Added px-4 and sm:px-6 for phone view */}
                {/* Banner text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col justify-center text-center md:text-left space-y-4 lg-max-w-[450px] md:mr-8"
                >
                    <h1 className="md:text-4xl text-xl font-bold !leading-snug font-body">
                        About Us
                    </h1>
                    <p className="text-black font-body text-justify md:text-lg text-xs">
                        Edumarg is leading educational consultancy in India to facilitate admission between UGC/AICTE approved Universities 
                        and aspiring students across India. We have currently partnered with 5+ UGC/AICTE
                        approved universities to guide and facilitate 
                        the admission process of student folk who would like to get admission for courses like 
                        UG, PG, Diploma and B Tech. We are located in multiple cities across India and act as 
                        the intermediator to keep the pace of rapid development happening in the education sector.
                    </p>
                    <a href="#enquiry" className="primary-btn !mt-8 py-2 px-4 text-sm max-w-[100px] md:max-w-[110px] mx-auto md:mx-0 text-center">
                        Join Now
                    </a>
                </motion.div>

                {/* Banner image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center items-center md:order-first"
                >
                    <img
                        src={BannerPng}
                        alt="Banner"
                        className="w-[650px] md:max-w-[650px] object-cover drop-shadow"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner2;
