import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillBank, AiFillCloseCircle } from "react-icons/ai";
import BgImage from "../../assets/bg.jpg";
import { motion } from "framer-motion";

// Modal Styles
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    padding: "0",
    overflow: "hidden",
    width: "90%",
    maxWidth: "400px",
    border: "none",
  },
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    setModalIsOpen(true); // Open modal
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close modal
  };

  return (
    <section id="enquiry" className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48 relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center relative z-10"
        >
          <div className="text-center space-y-4 lg:max-w-[630px] mx-auto bg-white p-8 rounded-lg shadow-lg border-l-4 border-r-4 border-gray-300">
            <h1 className="text-4xl font-bold font-body !leading-snug">Enquiry Form</h1>
            <p className="mb-8 font-body">Please fill out the form below to inquire about our courses.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your name" required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your age" required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your phone number" required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your email address" required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter your qualification" required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md font-body text-sm"
                    placeholder="Enter the course" required
                  />
                </div>
              </div>
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

      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white rounded-lg text-center p-6 shadow-lg"
        >
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            onClick={closeModal}
          >
            <AiFillCloseCircle size={24} />
          </button>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-body">Thank You!</h2>
          <p className="text-sm text-gray-600 font-body">
            Your enquiry has been received. Our team will contact you soon!
          </p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6"
          >
            <button
              onClick={closeModal}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      </Modal>
    </section>
  );
};

export default Subscribe;
