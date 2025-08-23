import React from "react";
import { Download, BookOpen, Users } from "lucide-react"; // icons

const resources = [
  {
    label: "Download Starter Kit (PDF)",
    icon: Download,
    hover: "hover:bg-purple-50",
  },
  { label: "7-Day Calm Plan", icon: BookOpen, hover: "hover:bg-pink-50" },
  { label: "Classroom Pack", icon: Users, hover: "hover:bg-purple-50" },
];

const testimonials = [
  {
    text: "“Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.”",
    author: "— Priya, Mom of 6-year-old",
  },
  {
    text: "“The 5-minute ‘reset’ before homework has been a game changer for focus.”",
    author: "— Ravi, Dad of 10-year-old",
  },
  {
    text: "“Our class uses the breathing games after lunch. Kids come back calm and ready.”",
    author: "— Anika, Grade 4 Teacher",
  },
];

const ParentTeacherHub = () => {
  return (
    <div className="my-16">
      {/* === Parent & Teacher Hub Section === */}
      <div className="rounded-2xl p-8 bg-gradient-to-r from-purple-50 to-blue-50 shadow-sm animate-fadeIn">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Parent & Teacher Hub
        </h2>
        <p className="text-gray-600 font-semibold mb-6 max-w-2xl">
          Practical guides, printable routines, and progress insights so you can
          support mindfulness at home and school.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {resources.map((res, i) => {
            const Icon = res.icon;
            return (
              <button
                key={i}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white primary font-semibold shadow border transition ${res.hover} 
                            transform hover:scale-105 duration-300 animate-fadeIn`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon size={16} />
                {res.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* === Testimonials Section === */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          What Families Say
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm 
                         transition-transform duration-300 hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-3 text-yellow-500">
                {"★★★★★".split("").map((star, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{t.text}</p>
              <p className="text-sm text-gray-500">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentTeacherHub;