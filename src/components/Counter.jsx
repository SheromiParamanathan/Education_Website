import React from 'react';
import { FaGraduationCap, FaUserGraduate, FaAward, FaChalkboardTeacher } from 'react-icons/fa';

const Counter = () => {
  const coursesCount = 50;
  const studentsCount = 1500;
  const careerCount = 500;
  const specialCount = 300;

  return (
    <div className="bg-gray-100 py-12 mt-16">     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Discover Our Education Hub
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our wide range of courses and join our community of learners.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
          <div className="flex items-center justify-center bg-white overflow-hidden shadow rounded-lg py-6 sm:py-8">
            <div className="p-4">
              <FaGraduationCap className="text-4xl text-blue-500" />
            </div>
            <div className="ml-4">
              <p className="text-lg leading-6 font-medium text-gray-900">Courses Offered</p>
              <p className="mt-1 text-3xl font-semibold text-gray-700">{coursesCount}</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white overflow-hidden shadow rounded-lg py-6 sm:py-8">
            <div className="p-4">
              <FaUserGraduate className="text-4xl text-green-500" />
            </div>
            <div className="ml-4">
              <p className="text-lg leading-6 font-medium text-gray-900">Students Enrolled</p>
              <p className="mt-1 text-3xl font-semibold text-gray-700">{studentsCount}</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white overflow-hidden shadow rounded-lg py-6 sm:py-8">
            <div className="p-4">
              <FaAward className="text-4xl text-yellow-500" />
            </div>
            <div className="ml-4">
              <p className="text-lg leading-6 font-medium text-gray-900">Career guidances</p>
              <p className="mt-1 text-3xl font-semibold text-gray-700">{careerCount}</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white overflow-hidden shadow rounded-lg py-6 sm:py-8">
            <div className="p-4">
              <FaChalkboardTeacher className="text-4xl text-red-500" />
            </div>
            <div className="ml-4">
              <p className="text-lg leading-6 font-medium text-gray-900">Specialised Trainings</p>
              <p className="mt-1 text-3xl font-semibold text-gray-700">{specialCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
