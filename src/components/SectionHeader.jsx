import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center my-6 border-b pb-2">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <button className="text-red-500 hover:text-red-700 font-semibold text-sm">
        View All
      </button>
    </div>
  );
};

export default SectionHeader;