import React, { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Submitted:", data);
    setIsOpen(false);
  };

  return (
    <div className="mt-12 flex flex-col lg:flex-row justify-center items-center lg:items-start">
      {/* Left Content */}
      <div className="mt-8 flex flex-col gap-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-1/2 self-center text-center lg:text-left animate-fadeIn">
        <div>
          <span className="primary bg-purple-200 font-bold px-2 py-1 rounded-lg inline-block animate-bounce-slow">
            🌈 Calm Minds, Happy Hearts
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-3 leading-snug animate-fadeIn">
            Mindfulness & <br className="hidden lg:block" /> Meditation for Kids (4-14)
          </h1>
          <p className="opacity-80 font-medium text-sm sm:text-base animate-fadeIn delay-100">
            Fun, story-based meditation that build focus, kindness, and confidence. <br className="hidden sm:block" />
            Safe, ad-free, and crafted with child-development experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-6 animate-slideUp">
            <button
              onClick={() => setIsOpen(true)}
              className="btn primary-bg text-white rounded-xl px-5 py-3 transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start Free Trial
            </button>
            <a
              href="#"
              className="btn accent-bg text-white rounded-xl px-5 py-3 transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slideUp delay-200">
          {[
            { icon: "🧠", label: "Improves", value: "Focus" },
            { icon: "😌", label: "Reduces", value: "Stress" },
            { icon: "💤", label: "Better", value: "Sleep" },
            { icon: "❤️", label: "Builds", value: "Empathy" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-3 shadow-lg w-36 sm:w-40 rounded-xl transition transform hover:scale-105 animate-fadeIn delay-[${i * 100}ms]"
            >
              <span>{item.icon}</span>
              <div>
                <p className="text-sm">{item.label}</p>
                <h1 className="text-lg font-bold">{item.value}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-10 lg:mt-0 animate-fadeIn delay-200">
        <div className="bg-[#E4E4E4] w-64 h-64 sm:w-96 sm:h-96 lg:w-[650px] lg:h-[650px] rounded-md"></div>
        <div className="py-4 px-3 sm:py-6 sm:px-4 shadow-md w-56 sm:w-64 md:w-72 rounded-xl absolute bg-white bottom-10 sm:bottom-16 lg:bottom-20 transform -rotate-3 sm:-rotate-6 lg:-rotate-3 -left-4 sm:-left-8 lg:-left-10 animate-slideUp delay-300">
          <span className="font-bold block mb-2">Today's Journey</span>
          <ul className="list-disc ml-6 text-sm sm:text-base">
            <li>🌬️ Dragon Breath (3 min)</li>
            <li>🦋 Butterfly Body Scan (5 min)</li>
            <li>🌙 Sleep Story: Star Boat</li>
          </ul>
        </div>
      </div>

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative animate-zoomIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Start Free Trial</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="class"
                placeholder="Class"
                className="border rounded-lg px-3 py-2"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border rounded-lg px-3 py-2"
              ></textarea>
              <button
                type="submit"
                className="btn bg-purple-600 text-white rounded-lg py-2 mt-2 hover:bg-purple-700"
              >
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