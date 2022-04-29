import React from 'react';
import ServiceCard from './ServiceCard';

import cleaningImg1 from '../../images/cleaning-4.png';
import cleaningImg2 from '../../images/cleaning-6.png';

const CardsSection = () => {
  return (
    <section id="features" className=" hidden md:block py-10 lg:pt-10 bg-white ">
      <div className="container mx-auto">
          <hr />
        <div className="lg:flex sm:-mx-3 my-8">
          <ServiceCard
            bgImg={cleaningImg1}
            title="House Cleaning Service"
            text="Standard, Deep Clean & Move In/Move Out Services"
          ></ServiceCard>
          <ServiceCard bgImg={cleaningImg2}
          title="Office Cleaning Service"
          text="Leave your Office Cleaning duties to our professionals"
          >
          </ServiceCard>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default CardsSection;
