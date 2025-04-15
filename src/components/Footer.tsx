import { LiaApple } from "react-icons/lia";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { motion } from "motion/react";
import { fadeInUp } from "../utils/animationConfig";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-20">
      <motion.div
        {...fadeInUp}
        className="custom-container space-y-8 md:grid md:grid-cols-4"
      >
        <div className="space-y-6">
          <img src="logo-2.svg" alt="" />
          <div className="flex flex-col w-max space-y-4">
            <a
              href=""
              className="inline-flex gap-2 items-center border border-white rounded-lg px-2 py-2 hover:bg-primary transition-all ease-in duration-300 w-full"
            >
              <div className="text-3xl">
                <LiaApple />
              </div>
              <div>
                <span className="text-gray-400  text-xs">Download on the</span>
                <h6 className="font-semibold">App Store</h6>
              </div>
            </a>
            <a
              href=""
              className="inline-flex gap-2 items-center border border-white rounded-lg px-2 py-2 hover:bg-primary transition-all ease-in duration-300 w-full"
            >
              <div className="text-3xl">
                <PiGooglePlayLogoLight />
              </div>
              <div>
                <span className="text-gray-400 text-xs">GET IT ON</span>
                <h6 className="font-semibold">Play Store</h6>
              </div>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold"> About Us</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold"> Support</h3>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping Info</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold"> Company</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
