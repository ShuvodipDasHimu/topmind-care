import React from 'react';

const Programs = ({ id }) => {
  const programs = [
    {
      title: "Little Explorers (4-6)",
      desc: "Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.",
      img: "https://i.postimg.cc/V5yXdLvX/little-explorers.webp",
      features: ["🐯 Cozy Corner", "🎵 Calm Music", "🎖️ Sticker Badges"],
      reverse: false,
    },
    {
      title: "Brave Thinkers (7-10)",
      desc: "Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.",
      img: "https://i.postimg.cc/tJnhqVqX/brave-thinkers.webp",
      features: ["⏱️ Focus Timer", "📝 Gratitude Notes", "⭐ Goal Cards"],
      reverse: true,
    },
    {
      title: "Calm & Curious (11-14)",
      desc: "Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.",
      img: "https://i.postimg.cc/QtyQZqr4/hero-kids.webp",
      features: ["🧭 Mindset Minis", "🌙 Sleep Stories", "🎯 Goal Cards"],
      reverse: false,
    },
  ];

  return (
    <div id={id} className="container mx-auto px-4 py-16 lg:py-24">
      {/* Section Heading */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-center mb-12">
        Mindfulness Programs
      </h1>

      {/* Program Cards */}
      <div className="space-y-16 lg:space-y-24">
        {programs.map((program, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-16 ${
              program.reverse ? 'md:flex-row-reverse' : ''
            } animate-slideUp`}
            style={{ animationDelay: `${i * 250}ms` }}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                className="rounded-lg w-full shadow-lg"
                src={program.img}
                alt={program.title}
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
              <h2 className="font-extrabold text-3xl text-gray-800">
                {program.title}
              </h2>
              <p className="font-medium text-lg text-gray-600">
                {program.desc}
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                {program.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="font-bold bg-white text-purple-700 px-4 py-2 rounded-full border-2 border-gray-200 shadow-sm transition transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;