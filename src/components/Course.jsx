import React from 'react';
import course1 from '../assets/html.png';
import course2 from '../assets/css.png';
import course3 from '../assets/javascript.png';
import course4 from '../assets/c.png';
import course5 from '../assets/c++.png';
import course6 from '../assets/java.jpg';
import course7 from '../assets/python.jpg';
import course8 from '../assets/bootstrap.jpg';
import course9 from '../assets/react.jpg';

const Course = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 my-12' id='course'>
      <div className='pb-8' data-aos="fade-down" data-aos-delay="50">
        <p className='text-4xl mb-3 font-bold primary-color'>Our Popular Courses</p>
        <p className='text-gray-400'>
        Explore our specialized IT courses designed to equip you with essential skills and 
        expertise in cutting-edge technologies and practices.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course1} alt='Course 1' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course2} alt='Course 2' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course3} alt='Course 3' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course4} alt='Course 4' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course5} alt='Course 5' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course6} alt='Course 6' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course7} alt='Course 7' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course8} alt='Course 8' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={'relative overflow-hidden shadow-lg rounded-md group'}
        data-aos="fade-down" data-aos-delay="250">
          <img src={course9} alt='Course 9' className='object-cover w-full h-full' />
          <div className='absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center transition-opacity duration-300'>
            <div className=''>
              <a href='/' className='block'>
                <button className='rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg'>
                  Enroll
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
