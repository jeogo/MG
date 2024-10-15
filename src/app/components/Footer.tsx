import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        {/* Company Info */}
        <p className="text-center">&copy; {new Date().getFullYear()} شركتنا - جميع الحقوق محفوظة</p>
        
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            Instagram
          </a>
        </div>

        {/* Links to Legal Pages */}
        <div className="text-sm text-gray-400 space-x-4">
          <a href="/privacy-policy" className="hover:underline">سياسة الخصوصية</a>
          <a href="/terms" className="hover:underline">الشروط والأحكام</a>
          <a href="/contact" className="hover:underline">اتصل بنا</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
