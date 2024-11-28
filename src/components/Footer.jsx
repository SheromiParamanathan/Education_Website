import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="flex flex-col">
          <span className='primary-color text-lg font-bold mb-2'>eduVoie</span>
          <div className="flex space-x-4">
            <p className="text-gray-600">Follow Us:</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <i className="fab fa-facebook-square fa-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <i className="fab fa-twitter-square fa-lg"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <i className="fab fa-instagram-square fa-lg"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <span className='primary-color text-lg font-bold mb-2'>Services</span>
          <ul className="pl-4">
            <li className="text-gray-600">Courses</li>
            <li className="text-gray-600">Tutorials</li>
            <li className="text-gray-600">Career Guidance</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <span className='primary-color text-lg font-bold mb-2'>Policies</span>
          <ul className="pl-4">
            <li className="text-gray-600">Privacy Policy</li>
            <li className="text-gray-600">Terms of Service</li>
            <li className="text-gray-600">Refund Policy</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <span className='primary-color text-lg font-bold mb-2'>Contact</span>
          <div className="mb-2">
            <p className="text-gray-600">Contact Number: +1 234 567 8901</p>
            <p className="text-gray-600 mt-2">Address: 123 Main Street, London.</p>
          </div>
          <a href="mailto:eduWeb@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            eduVoie@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600">&copy; eduVoie. All Rights Reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
