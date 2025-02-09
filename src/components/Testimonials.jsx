import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customers
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>{" "}
      </h1>
      <p className="text-center text-gray-500 max-w-89 text-center mb-8 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quid
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={index}
            className="max-w-[430px] border rounded-xl shadow-lg px-8 py-12"
          >
            <div className="flex flex-row items-center gap-4">
              <img src={testimonial.image} className="w-20 h-20 rounded-full" />
              <div>
                <h3 className="text-center font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-center text-gray-500">{testimonial.job}</p>
                <div className="flex justify-center gap-1 text-red-500 mb-4">
                  {Array.from({ length: testimonial.rating }, (item, index) => (
                    <img key={index} src={assets.star_icon} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 max-w-lg">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
