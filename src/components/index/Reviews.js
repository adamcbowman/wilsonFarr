import React from "react";
import bgImg from "../../images/green-leaf-wallpapers.jpg";
import ReviewCarousel from "./ReviewCarousel";
import Star from "../../svg/Star";


const Reviews = () => {
  return (
    <section id="features" className="md:pt-10 bg-white" style={{ position: 'relative' }}>
      <div className="flex bg-black">
        <div
          className="w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})`, minHeight: `600px`, opacity: "0.8" }}
        ></div>
         
          <div className="flex flex-col w-full items-center justify-items-center" style={{ position: 'absolute'}}>
            <div className="p-4 pt-8 md:pt-20 flex">
              {/* 5 stars loop*/}
              {
                [1,2,3,4,5].map(i => (
                  <Star className="pt-12 px-2 m-6 text-yellow-400" />   
                ))
                }
              </div>
            <ReviewCarousel />
         </div>
      </div>
    </section>
  );
};

export default Reviews;
