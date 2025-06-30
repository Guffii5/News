import React from 'react';
import { ChevronDown, Search as SearchIcon } from 'lucide-react';
import Postgrid from '../components/PostGrid';
import Footer from '../components/Footer';

const Search = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4 sm:p-6 bg-white">
        <div className="flex items-center gap-2 mb-6 w-full max-w-7xl mx-auto">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:ml-3"
          />
          <button className="p-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition">
            <SearchIcon size={20} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 w-full max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 ml-4 sm:ml-0">Search Result</h2>

          <div className="relative inline-block text-left mt-4 sm:mt-0 sm:mr-4">
            <button className="inline-flex justify-center items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Sort by
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <Postgrid />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;