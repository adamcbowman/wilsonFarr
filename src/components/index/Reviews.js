import React from 'react';
import bgImg from '../../images/green-leaf-wallpapers.jpg';

const Reviews = () => {
  return (
    <section id="features" className="pt-10 bg-white ">
      <div className="flex w-screen ">
        <div
          className="w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})`, height: '75vh' }}
        >
          Reviews
        </div>
      </div>
    </section>
  );
};

export default Reviews;
