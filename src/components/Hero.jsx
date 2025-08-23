import React from 'react';

const Hero = () => {
  return (
    <div className="mt-12 flex flex-col lg:flex-row justify-center items-center lg:items-start">
      {/* Left Content */}
      <div className="mt-8 flex flex-col gap-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-1/2 self-center text-center lg:text-left">
        <div>
          <span className="primary bg-purple-200 font-bold px-2 py-1 rounded-lg mt-2 mb-2 inline-block">
            🌈Calm Minds, Happy Hearts
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 mb-2">
            Mindfulness & <br className="hidden lg:block" /> Meditation for Kids (4-14)
          </h1>
          <p className="opacity-80 font-medium mt-2 mb-2 text-sm sm:text-base">
            Fun, story-based meditation that build focus, kindness, and confidence. <br className="hidden sm:block" /> 
            Safe, ad-free, and crafted with child-development experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 mt-4">
            <a href="" className="btn primary-bg text-white rounded-xl px-4 py-2">
              Start Free Trial
            </a>
            <a href="" className="btn accent-bg text-white rounded-xl px-4 py-2">
              Explore Programs
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <div className="flex flex-row gap-2 px-4 py-3 shadow-lg w-36 sm:w-40 rounded-xl">
            <div>🧠</div>
            <div>
              <p className="text-sm">Improves</p>
              <h1 className="text-lg font-bold">Focus</h1>
            </div>
          </div>
          <div className="flex flex-row gap-2 px-4 py-3 shadow-lg w-36 sm:w-40 rounded-xl">
            <div>😌</div>
            <div>
              <p className="text-sm">Reduces</p>
              <h1 className="text-lg font-bold">Stress</h1>
            </div>
          </div>
          <div className="flex flex-row gap-2 px-4 py-3 shadow-lg w-36 sm:w-40 rounded-xl">
            <div>💤</div>
            <div>
              <p className="text-sm">Better</p>
              <h1 className="text-lg font-bold">Sleep</h1>
            </div>
          </div>
          <div className="flex flex-row gap-2 px-4 py-3 shadow-lg w-36 sm:w-40 rounded-xl">
            <div>❤️</div>
            <div>
              <p className="text-sm">Builds</p>
              <h1 className="text-lg font-bold">Empathy</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-10 lg:mt-0">
        <div className="bg-[#E4E4E4] w-64 h-64 sm:w-96 sm:h-96 lg:w-[650px] lg:h-[650px] rounded-md"></div>
        <div className="py-4 px-3 sm:py-6 sm:px-4 shadow-md w-56 sm:w-64 md:w-72 rounded-xl absolute bg-white bottom-10 sm:bottom-16 lg:bottom-20 transform -rotate-3 sm:-rotate-6 -left-4 sm:-left-8 lg:-left-10">
          <span className="font-bold block mb-2">Today's Journey</span>
          <ul className="list-disc ml-6 text-sm sm:text-base">
            <li>🌬️ Dragon Breath (3 min)</li>
            <li>🦋 Butterfly Body Scan (5 min)</li>
            <li>🌙 Sleep Story: Star Boat</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
