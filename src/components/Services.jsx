import { assets, ourServices } from "../assets/assets";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth > 1024) {
        setCardToShow(4);
      } else if (window.innerWidth > 768) {
        setCardToShow(3);
      } else if (window.innerWidth > 640) {
        setCardToShow(2);
      } else {
        setCardToShow(1);
      }
    };
    updateCardToShow();
    window.addEventListener("resize", updateCardToShow);
  }, []);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % ourServices.length);
  };
  const prevService = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + ourServices.length) % ourServices.length
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, x:-200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Services"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our
        </span>{" "}
        Services
      </h1>
      <p className="text-center text-gray-500 max-w-89 text-center mb-8 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quid
      </p>

      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevService}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Pervious"
        >
          <img src={assets.left_arrow} alt="Pervious" />
        </button>
        <button
          onClick={nextService}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Services Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardToShow}%)`,
          }}
        >
          {ourServices.map((service, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-b-xl">
                <div className="inline-block bg-transparent text-gray border px-2 py-1 rounded-bl-xl">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
