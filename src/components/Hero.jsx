import React, { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-12 flex flex-col lg:flex-row justify-center items-center lg:items-start">
      {/* Left Content */}
      <div className="mt-8 flex flex-col gap-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-1/2 self-center text-center lg:text-left">
        <div>
          <span className="bg-purple-200 font-bold px-2 py-1 rounded-lg inline-block animate-bounce">
            🌈 Calm Minds, Happy Hearts
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-3 leading-snug">
            Mindfulness & <br className="hidden lg:block" /> Meditation for Kids (4-14)
          </h1>
          <p className="opacity-80 font-medium text-sm sm:text-base">
            Fun, story-based meditation that builds focus, kindness, and confidence.
            <br className="hidden sm:block" />
            Safe, ad-free, and crafted with child-development experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-6">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-purple-600 text-white rounded-xl px-6 py-3 font-medium transition hover:bg-purple-700 hover:shadow-lg"
            >
              Start Free Trial
            </button>
            <a
              href="#"
              className="bg-green-500 text-white rounded-xl px-6 py-3 font-medium transition hover:bg-green-600 hover:shadow-lg"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-10 lg:mt-0">
        <div className="bg-[#E4E4E4] w-64 h-64 sm:w-96 sm:h-96 lg:w-[650px] lg:h-[650px] rounded-md"></div>
      </div>

      {/* Popup Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>

            {/* Form Title */}
            <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
              Start Your Free Trial 🎉
            </h2>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Class</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter class (e.g. Grade 5)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  rows="3"
                  placeholder="Write a short message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium transition hover:bg-purple-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;