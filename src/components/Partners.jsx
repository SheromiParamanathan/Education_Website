import React from 'react';

const Partners = ({ name, image }) => {
  return (
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
      <img src={image} alt={name} />
      <p className='mt-2'>{name}</p>
    </div>
  );
};

export default Partners;
