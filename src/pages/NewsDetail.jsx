import React, { useEffect, useState } from 'react';
import download from '../assets/download.jpg';
import PostGrid from '../components/PostGrid';
import Footer from '../components/Footer';

const recentPosts = [
];

function NewsDetail() {
  const [isVisible, setIsVisible] = useState({
    featured: false,
    article: false,
    social: false,
    recent: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const featured = document.querySelector('.featured-image');
      const article = document.querySelector('.article-content');
      const social = document.querySelector('.social-tags');
      const recent = document.querySelector('.recent-posts');

      const isElementInViewport = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.8; 
      };

      setIsVisible({
        featured: isElementInViewport(featured),
        article: isElementInViewport(article),
        social: isElementInViewport(social),
        recent: isElementInViewport(recent),
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div
        className={`flex items-center justify-center py-6 md:py-10 px-4 transition-all duration-1000 ${
          isVisible.featured
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 translate-y-10'
        } featured-image`}
      >
        <div className="w-full max-w-7xl">
          <img
            src={download}
            alt="Nature"
            className="w-full h-auto md:h-[480px] object-cover  shadow-lg rounded-md border border-gray-300"
          />
          <p className="text-sm text-gray-500  md:mt-10  mt-4 md:ml-10">
            Cameron Williamson · 23 April 2023
          </p>
        </div>
      </div>

      <div
        className={`max-w-7xl mx-auto px-4 md:px-6  text-gray-800 py-6 transition-all duration-1000 delay-100 ${
          isVisible.article
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-10'
        } article-content`}
      >
        <div className="mb-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Charge two devices at the same time with this magnetic wireless Charging Dock
          </h1>
          <p className="text-sm text-gray-500 mb-6">Cameron Williamson · 23 April 2023</p>
        </div>

        <article className="prose prose-sm md:prose-base max-w-none">
          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, dolor ipsam fuga
            quibusdam vitae impedit similique ab recusandae enim at pariatur non voluptatem eos
            veritatis sequi alias error nulla nam...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-6">
            <img
              src={download}
              alt="Sample 1"
              className="w-full h-48 md:h-64 object-cover rounded-md shadow-md"
            />
            <img
              src={download}
              alt="Sample 2"
              className="w-full h-48 md:h-64 object-cover shadow-md rounded-md"
            />
          </div>

          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro cumque minima aliquam quas
            corrupti? Perspiciatis sint quam alias id debitis libero nulla voluptatibus molestiae
            itaque architecto nesciunt...
          </p>

          <blockquote className="border-l-4 border-yellow-500 italic pl-4 my-6">
            "Override the digital divide with additional clickthroughs from DevOps. Nanotechnology
            immersion along the information highway will close the loop on focusing solely on the
            bottom line."
          </blockquote>
        </article>

        <div
          className={`flex flex-col md:flex-row  items-start justify-between md:items-center mt-8 pt-6 border-t border-gray-200 transition-all duration-1000 delay-200 ${
            isVisible.social
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          } social-tags`}
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            <span className="text-sm">❤️ 1244</span>
            <span className="text-sm">💬 32</span>
            <span className="text-sm">🔗 Share</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium">Tags:</span>
            <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">#Wireless</span>
            <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">#Dock</span>
            <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">#Tech</span>
          </div>
        </div>
      </div>

      <div
        className={`my-8 md:my-12 px-4 transition-all duration-1000 delay-300 ${
          isVisible.recent
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 translate-y-10 scale-95 '
        } recent-posts`}
      >
        <PostGrid posts={recentPosts} title="Recent Posts" />
      </div>

      <Footer />
    </div>
  );
}

export default NewsDetail;