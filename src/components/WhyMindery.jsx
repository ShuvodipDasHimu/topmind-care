import React from "react";

const WhyMindery = () => {
  const cards = [
    {
      badge: "Story Meditations",
      title: "Guided Adventures",
      desc: "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
    },
    {
      badge: "Anytime Calm",
      title: "Tools for Big Feelings",
      desc: 'Quick "reset" audios for anger, worry, pre-exam jitters, and bedtime battles.',
    },
    {
      badge: "Parent Hub",
      title: "Guided & Routines",
      desc: "Weekly tips, printable charts, and simple routines you can use at home or school.",
    },
  ];

  return (
    <div className="my-16 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 md:ml-40 animate-fadeIn">
        Why Mindery Kids?
      </h1>
      <p className="text-left md:ml-40 max-w-2xl animate-slideUp">
        Children learn best through play and stories. Our sessions blend gentle
        breathing, guided imagery, and music to make mindfulness enjoyable and effective.
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-full md:w-96 border-2 border-gray-100 p-8 rounded-md shadow-sm transition transform hover:-translate-y-2 hover:shadow-lg animate-slideUp"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <div className="badge text-green-700 font-bold bg-green-200 mb-3 px-3 py-1 rounded-md">
              {card.badge}
            </div>
            <h1 className="font-bold mb-2">{card.title}</h1>
            <p className="font-medium">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMindery;