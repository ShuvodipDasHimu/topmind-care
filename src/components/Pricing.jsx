import React from "react";

const Pricing = () => {
  return (
    <div className="my-16 px-6 max-w-6xl mx-auto">
      {/* === Comparison Table (matches screenshot) === */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Why Choose Mindery Kids Over Others?
      </h2>

      <div className="overflow-x-auto">
  <div className="min-w-[760px] rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
    {/* Header */}
    <div className="grid [grid-template-columns:40%_30%_30%] bg-purple-100 divide-x divide-gray-200">
      <div className="p-4 font-semibold text-center primary">Feature</div>
      <div className="p-4 font-semibold text-center primary">Mindery Kids</div>
      <div className="p-4 font-semibold text-center primary">Other Apps</div>
    </div>

    {/* Rows */}
    <div className="divide-y divide-gray-200">
      {/* Row 1 */}
      <div className="grid [grid-template-columns:40%_30%_30%] divide-x divide-gray-200 bg-white">
        <div className="p-4 text-center">Child-Friendly Guided Meditations</div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
          <span className="text-gray-800">Story-based, fun & short</span>
        </div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-red-500 text-white text-xs">✗</span>
          <span className="text-gray-800">Generic adult content</span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid [grid-template-columns:40%_30%_30%] divide-x divide-gray-200 bg-gray-50">
        <div className="p-4 text-center">Safe & Ad-Free Environment</div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
          <span className="text-gray-800">100% secure for kids</span>
        </div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-red-500 text-white text-xs">✗</span>
          <span className="text-gray-800">Ads & distractions</span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid [grid-template-columns:40%_30%_30%] divide-x divide-gray-200 bg-white">
        <div className="p-4 text-center">Age-Specific Programs</div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
          <span className="text-gray-800">Tailored for 4–14</span>
        </div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-red-500 text-white text-xs">✗</span>
          <span className="text-gray-800">One-size-fits-all</span>
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid [grid-template-columns:40%_30%_30%] divide-x divide-gray-200 bg-gray-50">
        <div className="p-4 text-center">Parent & Teacher Support</div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
          <span className="text-gray-800">Guides, printables, progress insights</span>
        </div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-red-500 text-white text-xs">✗</span>
          <span className="text-gray-800">Limited or none</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* === Pricing Plans === */}
      <div className="mt-16 bg-purple-50 rounded-xl p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Choose Your Plan
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Start free, cancel anytime. No hidden charges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-1">Starter</h3>
            <p className="text-gray-600 mb-4">Perfect for new explorers</p>
            <p className="text-3xl font-bold text-indigo-600 mb-6">Free</p>
            <ul className="space-y-3 flex-grow">
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                5 guided meditations
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                2 sleep stories
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                Parent starter kit
              </li>
            </ul>
            <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg">
              Get Started
            </button>
          </div>

          {/* Premium */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-1">Premium</h3>
            <p className="text-gray-600 mb-4">Unlock full potential</p>
            <p className="text-3xl font-bold text-purple-600 mb-6">₹299/mo</p>
            <ul className="space-y-3 flex-grow">
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                Unlimited meditations
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                Sleep stories & calming music
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                Printable guides for parents
              </li>
            </ul>
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg">
              Upgrade Now
            </button>
          </div>

          {/* Family */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-1">Family</h3>
            <p className="text-gray-600 mb-4">For multiple kids</p>
            <p className="text-3xl font-bold text-purple-600 mb-6">₹499/mo</p>
            <ul className="space-y-3 flex-grow">
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                4 child profiles
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                Rewards & streaks
              </li>
              <li className="flex items-center gap-2 text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-green-500 text-white text-xs">✓</span>
                Classroom meditation pack
              </li>
            </ul>
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg">
              Get Family Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
