import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* background circle */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3">
        <div className="w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-12 ">
          {/*left side*/}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/spacex1.jpg"
                alt="SpaceX Satellite"
                className="w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl"
              />
              {/* make image float*/}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/*right Side*/}
          <div className="relative z-10 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
         
              <h1 className="text-2xl md:text-3xl font-light text-gray-800 tracking-wide">
                Haptechs
              </h1>

              {/* headline */}
              <div className="space-y-2">
                <h2 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
                  <span className="text-[#3C50A0]">SPACEX</span> 
                  <span className="text-gray-900"> SATELLITE &</span>
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  ROCKET LAUNCHES
                </h2>
              </div>

              {/* Call to Action Button, Using hybrid approach to combine Mui and tailwin */}
              <div className="pt-8">
              <Link to="/launches">

                <Button 
                  variant="contained" 
                  sx={{
                    bgcolor: '#3C50A0', 
                    '&:hover': { bgcolor: '#3C50B3' }, 
                  }}
                  size="large"
                  className="rounded-lg text-white px-8 py-4 text-lg font-semibold  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Go To Launches
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;