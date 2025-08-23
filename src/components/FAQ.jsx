import React from "react";

const faqs = [
  {
    q: "What ages is this for?",
    a: "The sessions are designed for children ages 4–14, with programs tailored for different stages.",
  },
  {
    q: "How long are the sessions?",
    a: "Most guided practices are 3–7 minutes long—perfect for short attention spans.",
  },
  {
    q: "Is it safe and ad-free?",
    a: "Yes. We designed this for children. No external ads, clear privacy options, and parent controls.",
    defaultOpen: true,
  },
  {
    q: "Can schools use it?",
    a: "Absolutely. We provide classroom packs, posters, and quick 5-minute reset activities for teachers.",
  },
];

const FAQ = () => {
  return (
    <div className="w-full py-12 px-4">
      {/* FAQ Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fadeIn">
        Frequently Asked Questions
      </h2>

      {/* FAQ Accordion */}
      <div className="w-full rounded-lg border border-gray-200 animate-fadeIn">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`collapse collapse-arrow border-b border-gray-200 transition-transform duration-300 hover:bg-gray-50`}
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={item.defaultOpen}
            />
            <div className="collapse-title text-lg font-medium text-gray-800">
              {item.q}
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 text-sm mt-2">{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="w-full mt-12 rounded-2xl shadow-sm bg-gradient-to-r from-white via-blue-50 to-purple-50 p-8 animate-fadeIn">
        <h3 className="text-xl md:text-2xl font-bold mb-3">
          Start Your Child’s Mindfulness Journey
        </h3>
        <p className="text-gray-600 mb-6">
          Try it free. Build calm, focus, and kindness—one small practice a day.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
            Create Account
          </button>
          <button className="px-6 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;