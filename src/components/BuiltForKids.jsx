import React from "react";

const BuiltForKids = () => {
  return (
    <div className="my-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-left md:text-center mb-10">
        Built for Kids, Loved by Parents
      </h1>

      {/* Grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Ad-Free & Safe</h2>
          <p className="text-gray-600">
            Child-first design with privacy controls and no external ads.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Rewards that Motivate</h2>
          <p className="text-gray-600">
            Stars, badges, and gentle streaks encourage healthy habits—no pressure.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Offline Access</h2>
          <p className="text-gray-600">
            Download favorite sessions for calm on the go.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Sleep Mode</h2>
          <p className="text-gray-600">
            Fade-out music and dim visuals help kids drift off peacefully.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Classroom Friendly</h2>
          <p className="text-gray-600">
            Teacher packs with 5-minute start-of-class resets and posters.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Multi-Child Profiles</h2>
          <p className="text-gray-600">
            Personalized tracks for each child in the family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuiltForKids;
