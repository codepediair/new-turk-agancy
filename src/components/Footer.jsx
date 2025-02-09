import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg-px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
        <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/3 mb-10 md:mb-0">
                <img src={assets.logo_dark} alt="" />
                <p className="text-gray-400 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quid
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="text-gray-400">
                    <li className="cursor-pointer hover:text-gray-200"><a href="#Header">Home</a></li>
                    <li className="cursor-pointer hover:text-gray-200"><a href="#About">About</a></li>
                    <li className="cursor-pointer hover:text-gray-200"><a href="#Services">Services</a></li>
                    <li className="cursor-pointer hover:text-gray-200"><a href="#Testimonials">Testimonials</a></li>
                </ul>
            </div>
            <div>
                <h3>Subscribe to our newsletter</h3>
                <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className="flex gap-2">
                    <input type="email" className="border border-gray-800 rounded py-2 px-4 mt-2 bg-gray-800 focus:outline-none w-full md:w-auto" placeholder="Enter Your Email" required />
                    <button className="bg-blue-600 text-white py-2 px-4 mt-2 rounded">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
            © 2025 All Rights Reserved. Design by Codepedia
        </div>
    </div>
  )
}

export default Footer
