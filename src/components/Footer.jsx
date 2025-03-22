import React from "react";
import styles from "../constants/style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-black-100 text-white py-10 px-6 md:px-16">
      <div className={`${styles.flexCenter} flex-col w-full`}>
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Your Startup Name"
            className="w-[200px] h-[80px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 text-center max-w-[300px]`}>
            Empowering your business with innovative solutions.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8">
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="text-center">
              <li className="mb-2 hover:text-secondary cursor-pointer">Home</li>
              <li className="mb-2 hover:text-secondary cursor-pointer">About Us</li>
              <li className="mb-2 hover:text-secondary cursor-pointer">Services</li>
              <li className="mb-2 hover:text-secondary cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="text-center">
              <li className="mb-2 hover:text-secondary cursor-pointer">Web Development</li>
              <li className="mb-2 hover:text-secondary cursor-pointer">App Development</li>
              <li className="mb-2 hover:text-secondary cursor-pointer">AI Solutions</li>
              <li className="mb-2 hover:text-secondary cursor-pointer">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="text-center">
              <li className="mb-2 hover:text-secondary cursor-pointer">contact@startup.com</li>
              <li className="mb-2 hover:text-secondary cursor-pointer">+91 123 456 7890</li>
              <li className="mb-2 hover:text-secondary cursor-pointer">City, State, Country</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t border-t-[#3F3E45]">
          <p className="text-center text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Startup Name. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="w-6 h-6 cursor-pointer hover:opacity-80"
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
