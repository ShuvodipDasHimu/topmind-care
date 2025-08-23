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

const FAQ = ({ id }) => {
  return (
    // The id is applied to the main container for in-page navigation
    <div id={id} className="py-16 lg:py-24 px-4 container mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
          Frequently Asked Questions
        </h2>
        <p className="max-w-prose mx-auto text-lg text-gray-600 animate-fadeIn">
          Have more questions? Here are the most common ones we receive.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full rounded-lg border border-gray-200 animate-fadeIn max-w-5xl mx-auto">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="collapse collapse-arrow border-b border-gray-200 transition-transform duration-300 hover:bg-gray-50"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={item.defaultOpen}
            />
            <div className="collapse-title text-lg md:text-lg font-bold text-gray-800 px-4 py-3 md:px-6 md:py-4">
              {item.q}
            </div>
            <div className="collapse-content px-4 py-2 md:px-6 md:py-3">
              <p className="text-gray-600 text-sm md:text-base">{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="w-full mt-12 rounded-2xl shadow-sm bg-gradient-to-r from-purple-50 via-green-50 to-purple-50 p-6 sm:p-8 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-4 animate-fadeIn">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-3">
            Start Your Child’s Mindfulness Journey
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-base">
            Try it free. Build calm, focus, and kindness—one small practice a day.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#"
            className="btn btn-primary text-white primary-bg font-semibold shadow-md py-2 px-6 rounded-lg hover:shadow-lg transition"
          >
            Create Account
          </a>
          <a
            href="#"
            className="btn btn-accent text-white accent-bg font-semibold shadow-md py-2 px-6 rounded-lg hover:shadow-lg transition"
          >
            Download App
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;