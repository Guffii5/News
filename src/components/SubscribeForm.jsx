import React from 'react';

const SubscribeForm = () => {
  return (
    <form className="flex flex-col sm:flex-row">
      <input
        type="email"
        placeholder="Your email address"
        className="w-full sm:w-auto px-4 py-2 rounded-md sm:rounded-r-none border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 mb-2 sm:mb-0"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md sm:rounded-l-none hover:bg-red-600 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeForm;