import React from "react";
import bgImg from "../../images/green-leaf-wallpapers.jpg";
import ReviewCarousel from "./ReviewCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";




const Reviews = () => {
  return (
    <section id="features" className="pt-10 bg-white" style={{ position: 'relative' }}>
      <div className="flex w-screen bg-black">
        <div
          className="w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})`, height: "50vh", opacity: "0.8" }}
        ></div>
         
          <div className="flex flex-col items-center justify-items-center" style={{ position: 'absolute'}}>
            <div className="py-6">
              <FontAwesomeIcon icon={faStar} className=" py-12 px-4 text-yellow-400 text-6xl" />
              <FontAwesomeIcon icon={faStar} className=" py-12 px-4 text-yellow-400 text-6xl" />
              <FontAwesomeIcon icon={faStar} className=" py-12 px-4 text-yellow-400 text-6xl" />
              <FontAwesomeIcon icon={faStar} className=" py-12 px-4 text-yellow-400 text-6xl" />
              <FontAwesomeIcon icon={faStar} className=" py-12 px-4 text-yellow-400 text-6xl" />
            </div>
            <ReviewCarousel />
         </div>
      </div>
    </section>
  );
};

export default Reviews;
