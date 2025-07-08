import React from 'react';
import { Rocket, SatelliteDish, Telescope } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#3C50A0] to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id='about'>
  
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 z-0" />

  
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-2xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-500 rounded-full opacity-30 blur-3xl z-0" />

      {/* Main */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Explore the Future with <span className="text-[#e9eaee]">Haptechs</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          Haptechs is your gateway to the final frontier. We bring you real-time insights,
          visuals, and updates on SpaceX rocket launches—curated for space enthusiasts,
          students, and tech lovers alike. Join us as we track humanity’s journey beyond Earth.
        </p>

      
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#3b4ca3]/20 text-[#3b4ca3] p-4 rounded-full">
              <Rocket className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold">Live Launch Coverage</h4>
            <p className="text-sm text-gray-400">
              Watch SpaceX missions as they happen with detailed mission data.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#3b4ca3]/20 text-[#3b4ca3] p-4 rounded-full">
              <SatelliteDish className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold">Mission Tracking</h4>
            <p className="text-sm text-gray-400">
              Follow spacecraft telemetry, orbital paths, and launch milestones.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#3b4ca3]/20 text-[#3b4ca3] p-4 rounded-full">
              <Telescope className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold">Future Launch Insights</h4>
            <p className="text-sm text-gray-400">
              Discover what's next with upcoming SpaceX launch schedules and stats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
