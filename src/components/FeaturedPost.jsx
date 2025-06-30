import React from 'react';
import download from '../assets/download.jpg';

const FeaturedPost = () => {
  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8"> 
      <div className="mx-auto" style={{ maxWidth: '1800px' }}> {/* Increased max-width */}
        <div
          className="relative text-white px-8 sm:px-12 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-lg shadow-lg min-h-[500px]" 
          style={{ 
            backgroundImage: `url(${download})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%' 
          }}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-60 pointer-events-none rounded-lg"></div> 

          <div className="relative flex-1 z-10 max-w-2xl pr-0 md:pr-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full mr-4"></div>
              <span className="text-sm font-semibold">Cameron Williamson</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Charge two devices at the same time with this magnetic wireless Charging Dock
            </h2>
            <p className="text-base text-gray-200 mb-6 max-w-lg">
              Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
            </p>
            <a href="#" className="text-base flex items-center group">
              Read More
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="relative flex-none mt-8 md:mt-0 md:ml-12 z-10 flex flex-col justify-end self-stretch">
            <div className="p-4 rounded-lg bg-black bg-opacity-50">
              <p className="text-sm font-semibold">
                Men may be 2.5 times more likely to die from COVID-19 than women
              </p>
              <a href="#" className="text-base flex items-center group mt-2">
                <svg className="mr-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;