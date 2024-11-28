import React from 'react';
import aboutImage from '../assets/aboutImage.jpg';

const About = () => {
  return (

      <div className="text-white max-w-[1200px] mx-auto p-5 my-12" id="about">
        <div className="md:flex md:items-center" data-aos="fade-down" data-aos-delay="50">
          
          <img
            className="mx-auto rounded-3xl md:mr-8 mb-8 md:mb-0"
            src={aboutImage}
            width={600}
            height={600}
            alt="AboutImage"
          />

          <div className="md:w-1/2" data-aos="fade-down" data-aos-delay="250">
            <div className="pb-8">
              <p className="text-4xl mb-3 font-bold primary-color">About Us</p>
              <p className="text-gray-400">
                Welcome to our eduVoie Community. <br />
                Boost up your skills with a new way of learning. <br />
                Discover courses tailored to your goals and learn from industry experts.
              </p>
            </div>

            <div className="pb-8">
              <p className="text-2xl mb-3 font-semibold">Our Mission</p>
              <p className="text-gray-400">
                At eduVoie, our mission is to provide accessible and quality education to learners
                worldwide. We aim to empower individuals through innovative learning experiences.
              </p>
            </div>

            <div className="pb-8">
              <p className="text-2xl mb-3 font-semibold">Why Choose Us?</p>
              <p className="text-gray-400">
                We offer a diverse range of courses, personalized learning paths, and opportunities
                for career growth. Join our community and embark on a journey of continuous
                improvement and success.
              </p>
            </div>
          </div>
        </div>
    </div>

  );
};

export default About;
