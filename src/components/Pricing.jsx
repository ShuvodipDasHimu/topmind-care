import React from "react";

const comparisonData = [
  {
    feature: "Child-Friendly Guided Meditations",
    mindery: { ok: true, text: "Story-based, fun & short" },
    others: { ok: false, text: "Generic adult content" },
  },
  {
    feature: "Safe & Ad-Free Environment",
    mindery: { ok: true, text: "100% secure for kids" },
    others: { ok: false, text: "Ads & distractions" },
  },
  {
    feature: "Age-Specific Programs",
    mindery: { ok: true, text: "Tailored for 4–14" },
    others: { ok: false, text: "One-size-fits-all" },
  },
  {
    feature: "Parent & Teacher Support",
    mindery: { ok: true, text: "Guides, printables, progress insights" },
    others: { ok: false, text: "Limited or none" },
  },
];

const plans = [
  {
    name: "Starter",
    desc: "Perfect for new explorers",
    price: "Free",
    features: ["5 guided meditations", "2 sleep stories", "Parent starter kit"],
    button: "Get Started",
  },
  {
    name: "Premium",
    desc: "Unlock full potential",
    price: "₹299/mo",
    features: [
      "Unlimited meditations",
      "Sleep stories & calming music",
      "Printable guides for parents",
    ],
    button: "Upgrade Now",
  },
  {
    name: "Family",
    desc: "For multiple kids",
    price: "₹499/mo",
    features: [
      "4 child profiles",
      "Rewards & streaks",
      "Classroom meditation pack",
    ],
    button: "Get Family Plan",
  },
];

const Pricing = () => {
  return (
    <div className="my-16 px-6 max-w-6xl mx-auto">
      {/* === Comparison Table === */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Why Choose Mindery Kids Over Others?
      </h2>

      <div className="overflow-x-auto">
        <div className="min-w-[760px] rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="grid [grid-template-columns:40%_30%_30%] bg-purple-100 divide-x divide-gray-200">
            <div className="p-4 font-semibold text-center">Feature</div>
            <div className="p-4 font-semibold text-center">Mindery Kids</div>
            <div className="p-4 font-semibold text-center">Other Apps</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-200">
            {comparisonData.map((row, i) => (
              <div
                key={i}
                className={`grid [grid-template-columns:40%_30%_30%] divide-x divide-gray-200 ${
                  i % 2 === 1 ? "bg-gray-50" : "bg-white"
                } transition-transform duration-300 hover:scale-[1.01]`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="p-4 text-center">{row.feature}</div>
                {[row.mindery, row.others].map((col, j) => (
                  <div
                    key={j}
                    className="p-4 flex flex-col items-center gap-2 text-center"
                  >
                    <span
                      className={`inline-flex h-5 w-5 items-center justify-center rounded-[4px] text-white text-xs ${
                        col.ok ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {col.ok ? "✓" : "✗"}
                    </span>
                    <span className="text-gray-800">{col.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === Pricing Plans === */}
      <div className="mt-16 bg-purple-50 rounded-xl p-10 animate-fadeIn">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Choose Your Plan
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Start free, cancel anytime. No hidden charges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col 
                         transition-transform duration-300 hover:scale-105 hover:shadow-md animate-fadeIn"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-3 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-800">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;