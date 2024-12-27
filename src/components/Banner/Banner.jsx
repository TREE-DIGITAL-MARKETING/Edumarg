import React from "react";
import BannerPng from "../../assets/About.jpg";
import { LiaAirbnb } from "react-icons/lia";
import { FadeUp } from "../Hero/Hero"; // Ensure FadeUp is correctly defined
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                {/* Banner image */}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        src={BannerPng}
                        alt="Banner"
                        className="w-[550px] md:max-w-[550px] object-cover drop-shadow"
                    />
                </div>

                {/* Banner text */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-12">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold font-body !leading-snug"
                        >
                            Empowering Future: Our
                        </motion.h1>
                        <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-0">
                            <motion.div
                                variants={FadeUp(0.2)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-[#635ad9] rounded-2xl hover:bg-[#219be4] text-[white] duration-300 hover:shadow-2xl"
                                style={{ borderLeft: "6px solid #fffff", borderRight: "6px solid #ffffff" }}
                            >
                                <p className="text-lg font-body text-white">
                                    <span className="text-xl font-semibold">Mission:</span> We aim to bridge the gap between
                                    aspiring students and prestigious universities.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={FadeUp(0.4)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-[#635ad9] rounded-2xl hover:bg-[#219be4] hover:text-[white] duration-300 hover:shadow-2xl"
                                style={{ borderLeft: "6px solid #ffffff", borderRight: "6px solid #ffffff" }}
                            >
                                <p className="text-lg font-body text-white">
                                    <span className="text-xl font-semibold">Vision:</span> To establish Edumarg as the
                                    most-sought after educational consultancy in India to foster a culture of continuous
                                    learning and excellence.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={FadeUp(0.4)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6 bg-[#635ad9] rounded-2xl hover:bg-[#219be4] hover:text-[white] duration-300 hover:shadow-2xl"
                                style={{ borderLeft: "6px solid #ffffff", borderRight: "6px solid #ffffff" }}
                            >
                                <p className="text-lg font-body text-white">
                                    <span className="text-xl font-semibold">Motto:</span> To provide personalised services
                                    and guidance to students for a hassle-free academic pursuit.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
