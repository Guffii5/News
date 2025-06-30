import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const getNavLinkClass = (path, currentPath) =>
  `${currentPath === path ? 'bg-yellow-600 font-bold rounded px-2 py-1' : ''}`;

const TopNav = () => {
  const location = useLocation(); 

  return (
    <div className="hidden md:flex items-center justify-between text-sm px-4 md:px-3 py-2 max-w-7xl mx-auto">
      <div className="flex flex-wrap space-x-6">
        <Link to="/news" className={getNavLinkClass("/news", location.pathname)}>News</Link>
        <Link to="/innovation" className={getNavLinkClass("/innovation", location.pathname)}>Innovation</Link>
        <Link to="/science" className={getNavLinkClass("/science", location.pathname)}>Science</Link>
        <Link to="/industry" className={getNavLinkClass("/industry", location.pathname)}>Industry</Link>
        <div className="relative group">
          <button className="flex hover:text-gray-700 items-center">
            More <span className="ml-1">▼</span>
          </button>
          <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
            <Link to="/tech" className="block px-4 py-2 hover:bg-gray-100">Tech</Link>
            <Link to="/health" className="block px-4 py-2 hover:bg-gray-100">Health</Link>
          </div>
        </div>
      </div>
      <div className="flex space-x-5 text-xs text-gray-500">
        <span className="hover:text-gray-700 cursor-pointer">IG</span>
        <span className="hover:text-gray-700 cursor-pointer">TW</span>
        <span className="hover:text-gray-700 cursor-pointer">FB</span>
        <span className="hover:text-gray-700 cursor-pointer">YT</span>
      </div>
    </div>
  );
};

const MainNav = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center py-4 px-4 md:px-2 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 md:space-x-10">
        <div className="flex items-center space-x-2">
          <img src="https://placehold.co/40x24?text=logo" alt="logo" className="h-4 w-auto" />
          <span className="font-semibold text-lg">ipsum</span>
        </div>
        <div className="hidden md:flex space-x-6 mt-2 text-sm">
          <Link to="/" className={getNavLinkClass("/", location.pathname)}>Home</Link>
          <Link to="/news-detail" className={getNavLinkClass("/news-detail", location.pathname)}>Feature</Link>
          <Link to="/video-details" className={getNavLinkClass("/video-details", location.pathname)}>Shop</Link>
          <Link to="/author" className={getNavLinkClass("/author", location.pathname)}>Gallery</Link>
          <Link to="/search" className={getNavLinkClass("/search", location.pathname)}>Blog</Link>
          <Link to="/about" className={getNavLinkClass("/about", location.pathname)}>About</Link>
          <Link to="/contact" className={getNavLinkClass("/contact", location.pathname)}>Contact Us</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-yellow-600 hover:bg-yellow-600 text-white px-3 py-1 md:px-5 md:py-2 rounded transition text-sm font-semibold">
          Subscribe
        </button>
        <button
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white px-4 py-2 border-t`}>
      <div className="flex flex-col space-y-3 py-3">
        <Link 
          to="/" 
          className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/", location.pathname)}`}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link 
          to="/news-detail" 
          className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/news-detail", location.pathname)}`}
          onClick={handleLinkClick}
        >
          Feature
        </Link>
        <Link 
          to="/video-details" 
          className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/video-details", location.pathname)}`}
          onClick={handleLinkClick}
        >
          Shop
        </Link>
        <Link 
          to="/author" 
          className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/author", location.pathname)}`}
          onClick={handleLinkClick}
        >
          Gallery
        </Link>
        <Link 
          to="/search" 
          className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/search", location.pathname)}`}
          onClick={handleLinkClick}
        >
          Blog
        </Link>
        <Link 
          to="/about" 
          className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/about", location.pathname)}`}
          onClick={handleLinkClick}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/contact", location.pathname)}`}
          onClick={handleLinkClick}
        >
          Contact Us
        </Link>
      </div>
      <div className="pt-4 border-t">
        <div className="flex space-x-6 text-sm pb-3">
          <Link 
            to="/news" 
            className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/news", location.pathname)}`}
            onClick={handleLinkClick}
          >
            News
          </Link>
          <Link 
            to="/innovation" 
            className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/innovation", location.pathname)}`}
            onClick={handleLinkClick}
          >
            Innovation
          </Link>
          <Link 
            to="/science" 
            className={`hover:bg-yellow-400 px-2 py-1 rounded ${getNavLinkClass("/science", location.pathname)}`}
            onClick={handleLinkClick}
          >
            Science
          </Link>
        </div>
        <div className="flex space-x-5 text-xs text-gray-500 pb-3">
          <span className="hover:bg-yellow-400 cursor-pointer">IG</span>
          <span className="hover:bg-yellow-400 cursor-pointer">TW</span>
          <span className="hover:bg-yellow-400 cursor-pointer">FB</span>
          <span className="hover:bg-yellow-400 cursor-pointer">YT</span>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <TopNav />
      <MainNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <MobileMenu 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
    </nav>
  );
};

export default Navigation;