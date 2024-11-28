import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blogImg1 from '../assets/b1.png';
import blogImg2 from '../assets/b2.jpg';
import blogImg3 from '../assets/b3.jpg';

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className='max-w-[1200px] mx-auto p-5 my-12' id='blog'>
      <div className='pb-8' data-aos="fade-down" data-aos-delay="50">
        <p className='text-4xl mb-3 font-bold primary-color'>Latest Articles</p>
        <p className='text-gray-400'>Explore the latest updates and articles in our blog section.</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
        <div
          className='relative group'
          onMouseEnter={() => setHoveredItem(1)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg rounded-md`}
            data-aos='fade-down'
          >
            <img src={blogImg1} alt="Blog 1" className="object-cover w-full h-full rounded-md" />
            <div className={`opacity-0 ${hoveredItem === 1 ? 'opacity-90' : ''} bg-gray-700/70 absolute inset-0 flex flex-col justify-center items-center p-4`}>
              <span className='text-2xl font-bold text-white tracking-wider'>Responsive Web Design</span>
              <p className="text-white mt-2 text-center">An Overview of Responsive Web Design</p>
              <a href="/" className="text-center rounded-lg px-4 py-2 mt-4 bg-white text-gray-700 font-bold text-lg hover:bg-gray-200 transition-colors duration-300">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div
          className='relative group'
          onMouseEnter={() => setHoveredItem(2)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg rounded-md`}
            data-aos='fade-down'
          >
            <img src={blogImg2} alt="Blog 2" className="object-cover w-full h-full rounded-md" />
            <div className={`opacity-0 ${hoveredItem === 2 ? 'opacity-90' : ''} bg-gray-700/70 absolute inset-0 flex flex-col justify-center items-center p-4`}>
              <span className='text-2xl font-bold text-white tracking-wider'>E-Learning</span>
              <p className="text-white mt-2 text-center">Better Plans</p>
              <a href="/" className="text-center rounded-lg px-4 py-2 mt-4 bg-white text-gray-700 font-bold text-lg hover:bg-gray-200 transition-colors duration-300">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div
          className='relative group'
          onMouseEnter={() => setHoveredItem(3)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg rounded-md`}
            data-aos='fade-down'
          >
            <img src={blogImg3} alt="Blog 3" className="object-cover w-full h-full rounded-md" />
            <div className={`opacity-0 ${hoveredItem === 3 ? 'opacity-90' : ''} bg-gray-700/70 absolute inset-0 flex flex-col justify-center items-center p-4`}>
              <span className='text-2xl font-bold text-white tracking-wider'>EduLink</span>
              <p className="text-white mt-2 text-center">Our Latest Projects</p>
              <a href="/" className="text-center rounded-lg px-4 py-2 mt-4 bg-white text-gray-700 font-bold text-lg hover:bg-gray-200 transition-colors duration-300">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
