import { motion } from "motion/react"

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
      id="Header"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1621165924263-cfaf41298cf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          opacity: 0.9,
          backgroundColor: "rgba(0,0,0,0.5)"
      }}
    >
        <motion.div
        initial={{ opacity: 0, y: 100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once:true}}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
            <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold">The best Turkish Agancy</h2>
            <div className="space-x-6 mt-16">
                <a href="#Services" className="border border-white px-8 py-3 rounded">Services</a>
                <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">Contact Us</a>
            </div>
        </motion.div>

    </div>
  );
};

export default Header;
