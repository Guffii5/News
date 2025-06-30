import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 flex flex-col md:flex-row justify-between items-start px-8">
      <div className="mb-6 md:mb-0 w-full md:w-1/2">
        <div className="flex items-center mb-4">
          <span className="text-2xl text-yellow-500 mr-2">✉</span>
          <h3 className="text-2xl font-bold text-white">Sign Up for Our Newsletters</h3>
        </div>
        <p className="text-sm mb-4">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="input your email here"
            className="p-2 border border-gray-600 bg-gray-800 text-gray-300 rounded-l-md focus:outline-none w-full md:w-3/4"
          />
          <button className="bg-yellow-600 text-white p-3 rounded-r-md w-1/4 md:w-auto">
            <span>&gt;</span>
          </button>
        </div>
        <p className="text-xs mt-2 text-gray-500">Copyright Tonah Air Studio</p>
      </div>
      <div className="flex flex-col w-full md:flex-row justify-between md:w-1/2">
        <div className="mb-6 md:mb-0 md:ml-8">
          <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">International</a></li>
            <li><a href="#" className="hover:text-yellow-500">Regional</a></li>
            <li><a href="#" className="hover:text-yellow-500">Politics</a></li>
            <li><a href="#" className="hover:text-yellow-500">Business</a></li>
            <li><a href="#" className="hover:text-yellow-500">Sports</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 md:ml-8">
          <h3 className="text-xl font-bold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Privacy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms of Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Features</a></li>
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
          </ul>
        </div>
        <div className="md:ml-8">
          <h3 className="text-xl font-bold text-white mb-4">Social Media</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Instagram</a></li>
            <li><a href="#" className="hover:text-yellow-500">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-500">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;