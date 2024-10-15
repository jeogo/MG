import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // FontAwesome icons
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io"; // More icons for contact info

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">شركتنا</h3>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Contact Info with Icons */}
        <div className="flex flex-col items-center space-y-4 md:items-end">
          <div className="flex items-center space-x-2">
            <IoMdCall size={20} className="text-green-400" />
            <span className="text-gray-300">+123 456 789</span>
          </div>
          <div className="flex items-center space-x-2">
            <IoMdMail size={20} className="text-red-400" />
            <span className="text-gray-300">info@ourcompany.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <IoMdPin size={20} className="text-yellow-400" />
            <span className="text-gray-300">123 شارع الرئيسي، المدينة</span>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="mt-8 text-center text-gray-400 space-x-4">
        <a href="/privacy-policy" className="hover:underline">
          سياسة الخصوصية
        </a>
        <a href="/terms" className="hover:underline">
          الشروط والأحكام
        </a>
        <a href="/contact" className="hover:underline">
          اتصل بنا
        </a>
      </div>
    </footer>
  );
};

export default Footer;
