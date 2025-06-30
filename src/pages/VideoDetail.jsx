import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import Footer from '../components/Footer';
import download from '../assets/download.jpg';

const VideoDetail = () => {
  const [isVisible, setIsVisible] = useState({
    video: false,
    article: false,
    social: false,
    videoCard: false,
    footer: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector('.video-section');
      const article = document.querySelector('.article-content');
      const social = document.querySelector('.social-tags');
      const videoCard = document.querySelector('.video-card');
      const footer = document.querySelector('.footer');

      const isElementInViewport = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.8;
      };

      setIsVisible({
        video: isElementInViewport(video),
        article: isElementInViewport(article),
        social: isElementInViewport(social),
        videoCard: isElementInViewport(videoCard),
        footer: isElementInViewport(footer),
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <section className="px-4 sm:px-6 py-8">
          <div
            className={`relative max-w-full mx-auto sm:max-w-7xl rounded-lg transition-all duration-1000 ${
              isVisible.video ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } video-section`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${download})`,
                opacity: 0.15,
              }}
            ></div>
            <div className="relative pt-[40.25%] bg-black z-10">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="mt-4 px-2">
              <p className="text-sm text-gray-500">Cameron Williamson · 23 April 2023</p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-8">
          <div
            className={`max-w-full mx-auto sm:max-w-7xl text-gray-800 transition-all duration-1000 delay-100 ${
              isVisible.article ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } article-content`}
          >
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Charge two devices at the same time with this magnetic wireless Charging Dock
              </h1>
              <p className="text-sm text-gray-500">Cameron Williamson · 23 April 2023</p>
            </div>

            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className="mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure fugit quae impedit numquam, expedita aperiam ad, assumenda inventore soluta sint explicabo? Libero, debitis harum quidem eaque nostrum ipsum maiores omnis eum quod veritatis voluptatem! Explicabo exercitationem vel cum earum, temporibus unde perferendis veritatis! Repellat tenetur esse commodi quae explicabo temporibus illo. Velit autem quos numquam illum ratione, cum voluptate cumque nam, iste quas delectus quod aut id aliquam soluta quo sunt rerum perspiciatis, in aliquid molestiae. Nemo corporis, dolorum perspiciatis quae aliquid ipsum ex laboriosam totam obcaecati? Ipsa, nihil. Deserunt, enim quam. Deleniti est, voluptas rem officiis hic fugit. Porro expedita consectetur nisi nobis ipsa adipisci recusandae id doloribus error placeat asperiores iste nesciunt voluptates est sed laudantium harum, dicta et, nulla possimus voluptatum rem ullam. Voluptates, at cum repellat culpa mollitia itaque? Reiciendis, iste? Sit natus quidem illo sint architecto, veritatis similique inventore nisi expedita culpa! Dolores rem exercitationem a molestias quam fugiat obcaecati culpa ab aut qui ex mollitia quas, commodi vitae, molestiae totam illo dolore debitis sunt ducimus? Deserunt eligendi officia magni? Similique ipsam alias nobis obcaecati reprehenderit officiis commodi quia reiciendis non, accusamus, voluptates eos amet asperiores dolorem sequi. Aspernatur fugiat ratione, quibusdam nihil magnam provident?
              </p>
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
              className={`flex flex-col sm:flex-row items-start justify-between sm:items-center mt-12 pt-6 border-t border-gray-200 transition-all duration-1000 delay-200 ${
                isVisible.social ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } social-tags`}
            >
              <div className="flex space-x-4 mb-4 sm:mb-0">
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
        </section>

        <section className="px-4 sm:px-6 py-8">
          <div
            className={`max-w-full mx-auto sm:max-w-7xl transition-all duration-1000 delay-300 ${
              isVisible.videoCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } video-card`}
          >
            <VideoCard />
          </div>
        </section>
      </main>

      <footer
        className={`transition-all duration-1000 delay-400 ${
          isVisible.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } footer`}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default VideoDetail;