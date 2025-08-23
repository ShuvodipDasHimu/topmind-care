import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-6 px-6 flex flex-col md:flex-row md:items-center md:justify-between text-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        {/* Real Logo */}
        <img
          src="https://i.postimg.cc/0jtm8yvk/reallogo.png"
          alt="Topmind Care Logo"
          className="w-8 h-8"
        />
        <div>
          <p className="font-semibold text-gray-900">Topmind Care</p>
          <p className="text-gray-500">
            Mindfulness for growing minds. © 2025 Mindery Kids.
          </p>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-col mb-4 md:mb-0">
        <p className="text-gray-500 mb-1">Contact</p>
        <div className="flex space-x-4">
          <a href="#" className="text-purple-600 hover:underline">
            Instagram
          </a>
          <a href="#" className="text-purple-600 hover:underline">
            YouTube
          </a>
          <a href="#" className="text-purple-600 hover:underline">
            X
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col">
        <p className="text-gray-500 mb-1">Legal</p>
        <div className="flex space-x-3">
          <a href="#" className="text-purple-600 hover:underline">
            Privacy
          </a>
          <a href="#" className="text-purple-600 hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;