import { motion } from "framer-motion";
import React from "react";
import { FaConnectdevelop } from "react-icons/fa";

import { SiBookstack } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";
import { PiExamFill } from "react-icons/pi";
import { SiMentorcruise } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";

const ServicesData = [
    {
        id: 1,
        title: "Counselling",
        link: "#",
        icon: <PiStudentFill />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Admissions",
        link: "#",
        icon: <SiBookstack />,
        delay: 0.2,
    },
    {
        id: 3,
        title: "Guidance",
        link: "#",
        icon: <IoPeopleSharp />,
        delay: 0.2,
    },
    {
        id: 4,
        title: "Mentoring",
        link: "#",
        icon: <SiMentorcruise />,
        delay: 0.2,
    },
    {
        id: 5,
        title: "University choice",
        link: "#",
        icon: <TbSchool />,
        delay: 0.2,
    },
    {
        id: 6,
        title: "Exam Prepration",
        link: "#",
        icon: <PiExamFill />,
        delay: 0.2,
    },
];

const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,  // changed from Opacity to opacity
            x: 50,
        },
        animate: {
            opacity: 1,  // changed from Opacity to opacity
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            },
        }
    };
}
const Services = () => {
    return (
        <section id="services" className="bg-white">
            <div className="container pb-14 pt-16">
                <h1 className="text-4xl font-bold pb-10 font-body text-center md:text-left">
                    Services we provide
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-4 gap-x-2 sm:gap-y-6 sm:gap-x-4 px-4 sm:px-8">
                    {ServicesData.map((Service) => (
                        <motion.div
                            key={Service.id}
                            variants={SlideLeft(Service.delay)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-[#635ad9] rounded-xl flex flex-col gap-3 items-center justify-center px-4 py-6
                              hover:bg-[#88f4ff] hover:text-black text-white hover:scale-105 duration-300 hover:shadow-2xl"
                        >
                            <div className="text-5xl mb-3">{Service.icon}</div>
                            <h1 className="text-base sm:text-lg font-semibold text-center px-2 sm:px-3 font-body">
                                {Service.title}
                            </h1>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
