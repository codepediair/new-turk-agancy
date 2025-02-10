import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [transparentNavBar, setTransparentNavBar] = useState(true);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
        document.body.style.overflow = "auto";
    }
  }, [showMobileMenu]);

  const changeNavBarColor = () => {
    if (window.scrollY >= 400) {
      setTransparentNavBar(true);
    } else {
      setTransparentNavBar(false);
    }
  }

  window.addEventListener('scroll', changeNavBarColor);

  return (
    <div className={`fixed top-0 left-0 w-full z-10  ${transparentNavBar ? 'bg-gray-900/80' : 'bg-gray-900/15'} transition-all`}>
      <div className="flex justify-between items-center p-5 md:px-20 md:py-5 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex space-x-10 text-white font-semibold">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Services" className="cursor-pointer hover:text-gray-400">
            Services
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg">
          Contact Us
        </button>
        <img src={assets.menu_icon} onClick={() => setShowMobileMenu(true)} alt="" className="md:hidden w-7" />
        </div>
        {/* --- mobile menu --- */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className="flex justify-end p-5 cursor-pointer">
            <img src={assets.cross_icon} onClick={() => setShowMobileMenu(false)} className="w-6" alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">
              Home
            </a>
            <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">
              About
            </a>
            <a onClick={() => setShowMobileMenu(false)} href="#Services" className="px-4 py-2 rounded-full inline-block">
              Services
            </a>
            <a onClick={() => setShowMobileMenu(false)}
              href="#Testimonial"
              className="px-4 py-2 rounded-full inline-block"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
