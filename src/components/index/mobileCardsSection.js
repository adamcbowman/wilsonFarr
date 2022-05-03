import React from "react";
import cleaningImg1 from "../../images/cleaning-4.png";
import cleaningImg2 from "../../images/cleaning-6.png";
import MobileCard  from './MobileCards';

const mobileCardsSection = () => {
  return (
    <section className="bg-white">
      <div className="container flex flex-col justify-items-center items-center justify-center w-full bg-white md:hidden">
        <MobileCard
          bgImg={cleaningImg1}
          title="House Cleaning Service"
          text="Standard, Deep Clean & Move In/Move Out Services"
          id=""
        ></MobileCard>
        <MobileCard
          bgImg={cleaningImg2}
          title="Office Cleaning Service"
          text="Leave your Office Cleaning duties to our professionals"
          id="office"
        ></MobileCard>
      </div>
    </section>
  );
};

export default mobileCardsSection;
