import React from "react";

const Programs = () => {
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
    <div className="space-y-16">
      {programs.map((program, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center gap-8 animate-slideUp`}
          style={{ animationDelay: `${i * 250}ms` }}
        >
          {/* Image (conditional placement for reverse layout) */}
          {!program.reverse && (
            <img
              className="rounded-lg w-full md:w-auto animate-fadeIn"
              src={program.img}
              alt={program.title}
            />
          )}

          {/* Text Section */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="font-extrabold text-2xl">{program.title}</h1>
            <p className="font-medium opacity-80">{program.desc}</p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 mt-2">
              {program.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center transition transform hover:-translate-y-1 hover:shadow-md"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Image (reverse layout) */}
          {program.reverse && (
            <img
              className="rounded-lg w-full md:w-auto animate-fadeIn"
              src={program.img}
              alt={program.title}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Programs;