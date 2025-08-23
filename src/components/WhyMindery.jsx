import React from 'react';

const WhyMindery = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold mb-4 md:ml-40">Why Mindery Kids?</h1>
      <p className="text-left md:ml-40">
        Children learn best through play and stories. Our sessions blend gentle breathing,
        guided imagery, and music to make mindfulness enjoyable and effective.
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-96 border-1 border-gray-100 p-8 rounded-md border-2">
          <div className="badge badge-soft text-green-700 font-bold bg-green-200 mb-2">
            Story Meditations
          </div>
          <h1 className='font-bold'>Guided Adventures</h1>
          <p className='font-medium'>Short, age-wise journeys that help kids calm their bodies and name their feelings.</p>
        </div>

        <div className="w-96 border-1 border-gray-100 p-8 rounded-md border-2">
          <div className="badge badge-soft text-green-700 font-bold bg-green-200 mb-2">
            Anytime Calm
          </div>
          <h1 className='font-bold'>Tools for Big Feelings</h1>
          <p className='font-medium'>Quick "reset" audios for anger, worry, pre-exam jitters, and bedtime battles.</p>
        </div>

        <div className="w-96 border-1 border-gray-100 p-8 rounded-md border-2">
          <div className="badge badge-soft text-green-700 font-bold bg-green-200 mb-2">
            Parent Hub
          </div>
          <h1 className='font-bold'>Guided & Routines</h1>
          <p className='font-medium'>Weekly tips, printable charts, and simple routines you can use at home or school.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyMindery;
