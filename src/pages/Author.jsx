import React, { useEffect, useState } from 'react'; 
import download from '../assets/download.jpg';
import PostGrid from '../components/PostGrid';
import Footer from '../components/Footer';

const ProfileHeader = () => {
    const [isVisible, setIsVisible] = useState({
        headerContent: false,
        postGrid: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const headerContent = document.querySelector('.profile-header-content');
            const postGrid = document.querySelector('.profile-post-grid');

            const offset = window.innerHeight * 0.8; 

            if (headerContent && window.scrollY + window.innerHeight > headerContent.offsetTop + offset) {
                setIsVisible(prev => ({ ...prev, headerContent: true }));
            }
            if (postGrid && window.scrollY + window.innerHeight > postGrid.offsetTop + offset) {
                setIsVisible(prev => ({ ...prev, postGrid: true }));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 

    const dummyPosts = [
        {
            id: 1,
            img: 'https://via.placeholder.com/300x200?text=My+Project+1',
            title: 'My First React Project',
            author: 'Ghufran',
            date: 'June 18, 2025',
            description: 'Building a dynamic web application with React and Tailwind CSS.'
        },
        {
            id: 2,
            img: 'https://via.placeholder.com/300x200?text=Design+Concept',
            title: 'Exploring Modern UI Design',
            author: 'Ghufran',
            date: 'June 17, 2025',
            description: 'A deep dive into minimalist and user-centric design principles.'
        },
        {
            id: 3,
            img: 'https://via.placeholder.com/300x200?text=Code+Snippet',
            title: 'Optimizing Component Performance',
            author: 'Ghufran',
            date: 'June 16, 2025',
            description: 'Tips and tricks for making your React components render faster.'
        },
        {
            id: 4,
            img: 'https://via.placeholder.com/300x200?text=Web+Dev',
            title: 'Journey into Full-Stack Development',
            author: 'Ghufran',
            date: 'June 15, 2025',
            description: 'My experiences learning technologies of backend  and connecting them to the frontend.'
        },
    ];

    return (
        <div className="min-h-screen flex flex-col"> 
            <div className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-3">
                <div className={`
                    profile-header-content 
                    transition-all duration-700 ease-out
                    ${isVisible.headerContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}>
                    <img src={download} alt="Profile Picture" className="h-20 w-20 rounded-full object-cover" />

                    <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight max-w-xl">
                        Hey! I'm Ghufran and welcome to my profile.
                    </h1>

                    <p className="text-gray-700 mt-4 text-lg max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nobis, quam facilis laboriosam voluptas vero. Eaque, enim excepturi eveniet optio ipsa, non temporibus impedit blanditiis consequuntur harum hic quisquam? Nobis cum rerum, ipsam est aut impedit aperiam molestiae fugit deleniti enim placeat, at natus nihil, cumque ullam voluptate! Labore odit fugiat neque quis dolorum deserunt, commodi enim quae, voluptate inventore quam perferendis cupiditate blanditiis sint molestiae a dolore saepe hic. Aut amet blanditiis sit corrupti voluptates, explicabo tempore minima distinctio qui repellat, quis, iure ullam illum! Optio, quasi asperiores quaerat saepe, ipsa ipsum voluptatem non voluptates facilis aperiam eligendi harum!
                    </p>
                </div>

                <div className={`
                    my-10
                    profile-post-grid {/* Class for useEffect to target */}
                    transition-all duration-700 ease-out {/* Animation properties */}
                    ${isVisible.postGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}>
                    <PostGrid posts={dummyPosts} title="My Latest Work" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfileHeader;