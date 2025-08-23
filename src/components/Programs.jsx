import React from 'react';

const Programs = () => {
  return (
    <div className="space-y-12">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-3xl font-bold">Programs for Every Age</h1>
          <p className="opacity-70">
            Pick a track or mix and match. Each program grows with your child.
          </p>
          <img
            className="rounded-lg w-full md:w-auto"
            src="https://i.postimg.cc/V5yXdLvX/little-explorers.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            <h1 className="font-extrabold text-2xl">Little Explorers (4-6)</h1>
            <p className="font-medium">
              Three to five-minute stories with animal friends that teach
              belly-breathing, <br className="hidden md:block" /> noticing
              sounds, and gentle stretching.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4">
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              🐯 Cozy Corner
            </span>
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              🎵 Calm Music
            </span>
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              🎖️ Sticker Badges
            </span>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            <h1 className="font-extrabold text-2xl">Brave Thinkers (7-10)</h1>
            <p className="font-medium">
              Mindset stories, focus timers, and kindness practices that build
              confidence and classroom readiness
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4">
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              ⏱️ Focus Timer
            </span>
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              📝 Gratitude Notes
            </span>
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              ⭐ Goal Cards
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img
            className="rounded-lg w-full md:w-auto"
            src="https://i.postimg.cc/tJnhqVqX/brave-thinkers.webp"
            alt=""
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex flex-col gap-2">
          <img
            className="rounded-lg w-full md:w-auto"
            src="https://i.postimg.cc/QtyQZqr4/hero-kids.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            <h1 className="font-extrabold text-2xl">Calm & Curious (11-14)</h1>
            <p className="font-medium">
              Longer meditations, reframing thoughts, and sleep stories for
              deeper rest and emotional balance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4">
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              🧭 Mindset Minis
            </span>
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              🌙 Sleep Stories
            </span>
            <span className="font-bold bg-gray-200 p-4 rounded-2xl border-gray-100 w-full sm:w-56 text-center">
              🎯 Goal Cards
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
