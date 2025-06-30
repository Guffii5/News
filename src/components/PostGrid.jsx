import React, { useState } from 'react';
import download from '../assets/download.jpg';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg transform overflow-hidden transition duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
      <div className="w-full aspect-video overflow-hidden rounded-t-xl">
        <img
          src={post.img || download}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src = download; }}
        />
      </div>

      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-yellow-500 mr-3 flex-shrink-0">
            <img
              src={download}
              alt={post.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-gray-600">
              By <span className="font-semibold text-gray-900">{post.author}</span>
            </p>
            <p className="text-xs text-yellow-600 font-bold">{post.date}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 font-sans text-gray-900 leading-tight line-clamp-2">
          {post.title}
        </h3>

        <div className="relative">
          <p 
            className={`text-gray-700 text-sm ${
              expanded ? '' : 'line-clamp-1'
            }`}
          >
            {post.description}
          </p>
          {!expanded && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(true);
              }}
              className="text-yellow-600 text-sm font-medium mt-1 hover:underline focus:outline-none"
            >
              Read more...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center space-x-3 text-gray-700">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-full transition-colors duration-200 ${
          currentPage === 1
            ? 'text-gray-300 cursor-not-allowed'
            : 'hover:bg-yellow-100 text-yellow-600'
        }`}
        aria-label="Previous Page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`w-9 h-9 rounded-full font-semibold flex justify-center items-center transition-colors duration-200 ${
            number === currentPage
              ? 'bg-yellow-600 text-white shadow-lg'
              : 'hover:bg-yellow-100 text-yellow-700'
          }`}
          aria-current={number === currentPage ? 'page' : undefined}
          aria-label={`Page ${number}`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full transition-colors duration-200 ${
          currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'hover:bg-yellow-100 text-yellow-600'
        }`}
        aria-label="Next Page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
};

const PostGrid = ({ posts, gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" }) => (
  <div className={`grid ${gridCols} gap-8`}>
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default function App() {
  const dummyPosts = [
    {
      id: 1,
      img: '',
      author: 'Jane Cooper',
      date: '2 March - Social Media',
      title: '18 Instagram Moments You May Have Missed This Week',
      description: 'We will help to develop every smallest thing into a big one for your company. We will help to develop every smallest thing into a big one for your company.',
    },
    {
      id: 2,
      img: '',
      author: 'Jitne Comper',
      date: '2 March - Soon Media',
      title: 'How to Boost Your Creativity in Remote Work Environment',
      description: 'Embrace new tools and techniques to foster innovation and productivity while working from home. Explore collaborative platforms and time management strategies.',
    },
    {
      id: 3,
      img: '',
      author: 'Soon Media',
      date: '5 April - Tech News',
      title: 'The Future of AI: What to Expect in the Next Decade',
      description: 'Artificial intelligence continues to evolve at a rapid pace. This article delves into predictions for AI\'s impact on various industries over the next ten years.',
    },
    {
      id: 4,
      img: '',
      author: 'John Doe',
      date: '10 April - Health',
      title: 'Mindfulness Practices for Daily Stress Reduction',
      description: 'Discover simple yet effective mindfulness techniques that can be integrated into your daily routine to alleviate stress and improve overall well-being.',
    },
    {
      id: 5,
      img: '',
      author: 'Alice Smith',
      date: '15 May - Innovation',
      title: 'Breakthroughs in Renewable Energy Technologies',
      description: 'Explore the latest advancements in solar, wind, and geothermal energy, and how these innovations are shaping a sustainable future for our planet.',
    },
    {
      id: 6,
      img: '',
      author: 'Bob Johnson',
      date: '20 May - Industry',
      title: 'The Impact of E-commerce on Traditional Retail',
      description: 'Analyze how the rapid growth of online shopping is transforming the retail landscape, pushing traditional stores to adapt and innovate their business models.',
    },
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  };

  return (
    <div className="min-h-screen font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-black">
            Our Latest Posts
          </h2>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </header>
        <PostGrid posts={dummyPosts} />
      </div>
    </div>
  );
}