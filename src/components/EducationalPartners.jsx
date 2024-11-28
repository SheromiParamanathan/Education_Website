import React from 'react';
import Partners from './Partners';
import partner1Image from '../assets/partner1.png';
import partner2Image from '../assets/partner2.png';
import partner3Image from '../assets/partner3.png';
import partner4Image from '../assets/partner4.png';
import partner5Image from '../assets/partner5.png';
import partner6Image from '../assets/partner6.png';

const partnersData = [
  { id: 1, name: 'GOOGLE', image: partner1Image },
  { id: 2, name: 'MICROSOFT', image: partner2Image },
  { id: 3, name: 'META', image: partner3Image },
  { id: 4, name: 'GITHUB', image: partner4Image },
  { id: 5, name: 'CISCO', image: partner5Image },
  { id: 6, name: 'IBM', image: partner6Image },
];

const EducationalPartners = () => {
  return (
    <div className="border border-gray-600 bg-gray-300 text-gray-700 max-w-[1200px] mx-auto py-3">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
        <h2 className="text-gray-900 text-2xl md:text-4xl font-bold m-4 text-center md:text-left">
          Educational Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {partnersData.map((partner) => (
            <Partners key={partner.id} name={partner.name} image={partner.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalPartners;
