import { assets } from "../assets/assets";
import { motion } from "motion/react";
const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once:true}}
      className="flex flex-col items-center justify-center container mx-auto py-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span className="underline underline-offset-4 decoration-1 under font-light">
          {" "}
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-89 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 gap-4">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-meduim text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-meduim text-gray-800">2000+</p>
              <p>Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-meduim text-gray-800">200+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-meduim text-gray-800">25+</p>
              <p>Team Members</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Our team of experts will help you navigate the home buying process
            with confidence. We are dedicated to helping you find the perfect
            home, and will work tirelessly to ensure that you have a great
            experience.
          </p>
          <button className="bg-green-600 text-white px-8 py-2 rounded">Call to Us</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
