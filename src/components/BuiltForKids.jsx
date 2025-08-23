import React from "react";

const features = [
  {
    title: "Ad-Free & Safe",
    desc: "Child-first design with privacy controls and no external ads.",
  },
  {
    title: "Rewards that Motivate",
    desc: "Stars, badges, and gentle streaks encourage healthy habits—no pressure.",
  },
  {
    title: "Offline Access",
    desc: "Download favorite sessions for calm on the go.",
  },
  {
    title: "Sleep Mode",
    desc: "Fade-out music and dim visuals help kids drift off peacefully.",
  },
  {
    title: "Classroom Friendly",
    desc: "Teacher packs with 5-minute start-of-class resets and posters.",
  },
  {
    title: "Multi-Child Profiles",
    desc: "Personalized tracks for each child in the family.",
  },
];

const BuiltForKids = () => {
  return (
    <div className="my-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-left md:text-center mb-10">
        Built for Kids, Loved by Parents
      </h1>

      {/* Grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm 
                       transition-transform duration-300 ease-in-out 
                       hover:scale-105 hover:shadow-md animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }} // stagger effect
          >
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuiltForKids;