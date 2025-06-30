import React, { useState, useRef } from 'react';

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowPlayButton(false);
    }
  };

  return (
    <div className="bg-white flex rounded-xl h-full overflow-hidden shadow-md  hover:shadow-lg transition-shadow duration-300  flex-col ">
      <div className="relative pt-[56.25%] bg-gray-100 overflow-hidden">
        {video.videoUrl ? (
          <>
            <video 
              ref={videoRef}
              src={video.videoUrl}
              className="absolute w-full inset-0  h-full object-cover"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onMouseEnter={() => setShowPlayButton(true)}
              onMouseLeave={() => !isPlaying && setShowPlayButton(true)}
              loop
              muted
            />
            {showPlayButton && (
              <div 
                className="absolute flex items-center justify-center inset-0 bg-black bg-opacity-30 cursor-pointer"
                onClick={togglePlay}
              >
                <div className={`w-16 h-16 flex items-center justify-center bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all duration-200 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                  <svg className="h-8 w-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    {isPlaying ? (
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    ) : (
                      <path d="M8 5v14l11-7z" />
                    )}
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
            <svg className="h-12 w-12 text-white opacity-75" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration || '4:32'}
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {video.title}
        </h3>
        <div className="flex items-center mt-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
            {video.authorAvatar && (
              <img src={video.authorAvatar} alt={video.author} className="w-full h-full object-cover"/>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">{video.author}</p>
            <p className="text-xs text-gray-500">{video.date} • {video.views || '1.2K views'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxVisiblePages = 5;
    let startPage, endPage;
    
    if (totalPages <= maxVisiblePages) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
        const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;
        
        if (currentPage <= maxPagesBeforeCurrent) {
            startPage = 1;
            endPage = maxVisiblePages;
        } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
            startPage = totalPages - maxVisiblePages + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrent;
            endPage = currentPage + maxPagesAfterCurrent;
        }
    }

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <div className="flex items-center justify-center space-x-1 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {startPage > 1 && (
                <>
                    <button
                        onClick={() => onPageChange(1)}
                        className={`w-9 h-9 flex items-center justify-center rounded-md ${1 === currentPage ? 'bg-yellow-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                        1
                    </button>
                    {startPage > 2 && <span className="px-2">...</span>}
                </>
            )}

            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`w-9 h-9 flex items-center justify-center rounded-md ${number === currentPage ? 'bg-yellow-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    {number}
                </button>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="px-2">...</span>}
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className={`w-9 h-9 flex items-center justify-center rounded-md ${totalPages === currentPage ? 'bg-yellow-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

const VideoGrid = ({ videos, gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }) => {
    return (
        <div className={`grid ${gridCols} gap-6`}>
            {videos.map(video => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};

const FilterBar = ({ activeFilter, setActiveFilter }) => {
    const filters = ['All', 'Popular', 'Recent', 'Science', 'Technology', 'Nature'];
    
    return (
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeFilter === filter ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default function App() {
    const dummyVideos = [
        {
            id: 1,
            title: 'Space tourism: The next frontier for adventurous travelers',
            author: 'Guffii',
            authorAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            date: 'Just Now',
            views: '456 views',
            category: 'Science',
            videoUrl:'/video.mp4'
        },
        {
            id: 2,
            title: 'Wildlife conservation efforts around the world',
            author: 'Guffii',
            authorAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            date: '2 Weeks Ago',
            views: '5.6K views',
            category: 'Nature',
            videoUrl:'/video.mp4'
        },
       {
            id: 3,
            title: 'Wildlife conservation efforts around the world',
            author: 'Guffii',
            authorAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            date: '2 Weeks Ago',
            views: '5.6K views',
            category: 'Nature',
            videoUrl:'/video.mp4'
        },
        {
            id: 4,
            title: 'Wildlife conservation efforts around the world',
            author: 'Guffii',
            authorAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            date: '2 Weeks Ago',
            views: '5.6K views',
            category: 'Nature',
            videoUrl:'/video.mp4'
        },
    ];

    const [currentPage, setCurrentPage] = React.useState(1);
    const [activeFilter, setActiveFilter] = React.useState('All');
    const totalPages = 5;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const filteredVideos = activeFilter === 'All' 
        ? dummyVideos 
        : dummyVideos.filter(video => video.category === activeFilter);

    return (
        <div className="min-h-screen bg-gray-50 font-sans antialiased">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Discover Videos</h2>
                    <div className="w-full sm:w-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search videos..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

                <VideoGrid 
                    videos={filteredVideos} 
                    gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                />

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}