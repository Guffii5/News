import React, { useEffect, useState } from 'react';
import FeaturedPost from '../components/FeaturedPost';
import PostGrid from '../components/PostGrid'; 
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard'; 

function Home() {
  const recentPosts = [
    {
      id: 1,
      img: 'https://via.placeholder.com/300x200?text=Post+1',
      title: 'Post Title One',
      author: 'John Doe',
      date: 'June 10, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/300x200?text=Post+2',
      title: 'Another Interesting Title',
      author: 'Jane Smith',
      date: 'June 9, 2025',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/300x200?text=Post+3',
      title: 'Third Post Heading',
      author: 'Mark Johnson',
      date: 'June 8, 2025',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/300x200?text=Post+4',
      title: 'A Short Story',
      author: 'Alice Brown',
      date: 'June 7, 2025',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/300x200?text=Post+5',
      title: 'React Basics',
      author: 'Bob White',
      date: 'June 6, 2025',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/300x200?text=Post+6',
      title: 'Tailwind Tips',
      author: 'Charlie Green',
      date: 'June 5, 2025',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.'
    },
  ];

  const Recommended = [
    {
      id: 7,
      img: 'https://via.placeholder.com/300x200?text=Trending+1',
      title: 'Top 10 Gadgets',
      author: 'Ella Davis',
      date: 'June 14, 2025',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
    },
    {
      id: 8,
      img: 'https://via.placeholder.com/300x200?text=Trending+2',
      title: 'Future of AI',
      author: 'Frank Miller',
      date: 'June 13, 2025',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
    },
    {
      id: 9,
      img: 'https://via.placeholder.com/300x200?text=Trending+3',
      title: 'Space Exploration',
      author: 'Grace Lee',
      date: 'June 12, 2025',
      description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
    },
    {
      id: 10,
      img: 'https://via.placeholder.com/300x200?text=Trending+4',
      title: 'Health & Wellness',
      author: 'Henry Wilson',
      date: 'June 11, 2025',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
    },
    {
      id: 11,
      img: 'https://via.placeholder.com/300x200?text=Trending+5',
      title: 'Global Economy',
      author: 'Ivy King',
      date: 'June 10, 2025',
      description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
      id: 12,
      img: 'https://via.placeholder.com/300x200?text=Trending+6',
      title: 'Digital Art Trends',
      author: 'Jack Hall',
      date: 'June 9, 2025',
      description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.'
    },
  ];

  const dummyVideos = [
    {
      id: 1,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+1',
      title: 'Tiny moon rover could be a stepping stone to Mars',
      author: 'Jacob Jones',
      date: '3 Days Ago',
    },
    {
      id: 2,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+2',
      title: 'Tiny moon rover could be a stepping stone to Mars',
      author: 'Jacob Jones',
      date: '3 Days Ago',
    },
    {
      id: 3,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+3',
      title: 'Tiny moon rover could be a stepping stone to Mars',
      author: 'Jacob Jones',
      date: '3 Days Ago',
    },
    {
      id: 4,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+4',
      title: 'Tiny moon rover could be a stepping stone to Mars',
      author: 'Jacob Jones',
      date: '3 Days Ago',
    },
    {
      id: 5,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+5',
      title: 'Tiny moon rover could be a stepping stone to Mars',
      author: 'Jacob Jones',
      date: '3 Days Ago',
    },
    {
      id: 6,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+6',
      title: 'Tiny moon rover could be a stepping stone to Mars',
      author: 'Charlie Green', 
      date: '3 Days Ago',
    },
    {
      id: 7,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+7',
      title: 'New Discoveries in Quantum Physics',
      author: 'Alice Brown',
      date: '4 Days Ago',
    },
    {
      id: 8,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+8',
      title: 'Mastering React Hooks',
      author: 'Bob White',
      date: '5 Days Ago',
    },
    {
      id: 9,
      thumbnail: 'https://via.placeholder.com/320x180?text=Video+9',
      title: 'The Art of Digital Storytelling',
      author: 'Jane Smith',
      date: '6 Days Ago',
    },
  ];

  const featuredPost = {
    id: 0,
    img: 'https://source.unsplash.com/random/1200x600/?abstract,tech',
    title: 'Featured Post: The Ultimate Guide to Modern Living in a Digital Age',
    author: 'Editorial Team',
    date: 'June 16, 2025',
    description: 'Discover the latest trends and insights that will transform your daily life. This comprehensive guide covers everything from cutting-edge technology to holistic wellness practices, offering practical tips and expert advice to help you navigate the complexities of the modern world with confidence and style. Dive deep into topics like sustainable living, smart home innovations, mental well-being, and how to maintain a healthy work-life balance in today\'s fast-paced environment. Embrace the future with knowledge and grace.'
  };

  const [isVisible, setIsVisible] = useState({
    featured: false,
    recent: false,
    recommended: false,
    videos: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const featured = document.querySelector('.featured-post-wrapper');
      const recent = document.querySelector('.recent-posts');
      const recommended = document.querySelector('.recommended-posts');
      const videos = document.querySelector('.video-cards');

      const offset = window.innerHeight * 0.8;

      if (featured && window.scrollY + window.innerHeight > featured.offsetTop + offset) {
        setIsVisible(prev => ({ ...prev, featured: true }));
      }
      if (recent && window.scrollY + window.innerHeight > recent.offsetTop + offset) {
        setIsVisible(prev => ({ ...prev, recent: true }));
      }
      if (recommended && window.scrollY + window.innerHeight > recommended.offsetTop + offset) {
        setIsVisible(prev => ({ ...prev, recommended: true }));
      }
      if (videos && window.scrollY + window.innerHeight > videos.offsetTop + offset) {
        setIsVisible(prev => ({ ...prev, videos: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`transition-opacity duration-1000 ${isVisible.featured ? 'opacity-100' : 'opacity-0 translate-y-10'} featured-post-wrapper`}>
        <FeaturedPost post={featuredPost} />
      </div>

      <main className="flex-grow w-full mx-auto px-4 py-8  sm:px-6 lg:px-8">
        <div className={`my-10 transition-opacity duration-1000 ${isVisible.recent ? 'opacity-100' : 'opacity-0 translate-y-10'} recent-posts`}>
          <PostGrid posts={recentPosts} />
        </div>

        <div className={`my-10 transition-opacity duration-1000 ${isVisible.recommended ? 'opacity-100' : 'opacity-0 translate-y-10'} recommended-posts`}>
          <PostGrid posts={Recommended} />
        </div>

        <div className={`my-10 transition-opacity duration-1000 ${isVisible.videos ? 'opacity-100' : 'opacity-0 translate-y-10'} video-cards`}>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Latest Videos</h2>
          <VideoCard videos={dummyVideos} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;