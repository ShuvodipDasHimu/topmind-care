import React from 'react';

const Hero = () => {
  return (
    <div className='mt-12 flex flex-row justify-center'>
      <div className='mt-8 flex flex-col gap-2 w-1/2 self-center'>
              <div className=''>
          <span className='primary bg-purple-200 font-bold px-2 py-1 rounded-lg mt-2 mb-2'>🌈Calm Minds, Happy Hearts</span>
        <h1 className='text-5xl font-semibold mt-2 mb-2'>Mindfulness & <br /> Meditation for Kids (4-14)</h1>
        <p className='opacity-80 font-medium mt-2 mb-2'>Fun, story-based meditation that build focus, kindness, and confidence. <br /> Safe, ad-free, and crafted with child-development experts.</p>
        <a href="" className='btn primary-bg text-white rounded-xl mt-2 mb-2 mr-2'><button>Start Free Trial</button></a>
        <a href="" className='btn accent-bg text-white rounded-xl mt-2 mb-2'><button>Explore Programs</button></a>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <div className='flex flex-row gap-2 px-6 py-4 shadow-lg w-40 rounded-xl'>
            <div>🧠</div>
            <div>
              <p>Improves</p>
              <h1 className='text-xl font-bold'>Focus</h1>
            </div>
          </div>
          <div className='flex flex-row gap-2 px-6 py-4 shadow-lg w-40 rounded-xl'>
            <div>😌</div>
            <div>
              <p>Reduces</p>
              <h1 className='text-xl font-bold'>Stress</h1>
            </div>
          </div>
          <div className='flex flex-row gap-2 px-6 py-4 shadow-lg w-40 rounded-xl'>
            <div>💤</div>
            <div>
              <p>Better</p>
              <h1 className='text-xl font-bold'>Sleep</h1>
            </div>
          </div>
           <div className='flex flex-row gap-2 px-6 py-4 shadow-lg w-40 rounded-xl'>
            <div>❤️</div>
            <div>
              <p>Builds</p>
              <h1 className='text-xl font-bold'>Empathy</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='bg-[#E4E4E4] w-[650px] h-[650px] rounded-md'></div>
        <div className='py-8 px-4 shadow-md w-72 rounded-xl absolute bg-white bottom-20 transform -rotate-7 right-100'>
          <span className='font-bold'>Today's Journey</span>
          <ul className='list-disc ml-10'>
            <li>🌬️ Dragon Breath (3 min)</li>
            <li>🦋 Butterfly Body Scan (5 min)</li>
            <li>🌙 Sleep Story: Star Boat</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;