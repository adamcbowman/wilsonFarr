import React from "react";
import Layout from "../components/layout/Layout";
import Seo from "../components/seo";
import backgroundImage from "../images/125189448_-113758903875472-_3951410496181531443_n.jpg";

// import bgImg from "../images/AboutUs.jpg";

const about = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <section>
        <div
          className="flex flex-col justify-items-center justify-center w-full"
          style={{ position: `relative` }}
        >
          <div
            className="w-screen bg-cover"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: `bottom`,
              backgroundRepeat: `no-repeat`,
              minWidth: `100%`,
              backgroundSize: `cover`,
              minHeight: `300px`,
              opacity: `75%`,
            }}
          ></div>
          <div
            className="w-full justify-items-center align-items-center text-center"
            style={{ position: `absolute`, width: `100vw` }}
          >
            <h1 className="text-4xl text-white font-bold">
              About
            </h1>
          </div>
        </div>
      </section>

      {/* previous header */}
      {/* <section id="header">
        <div
          className="container flex flex-col justify-items-center justify-center w-full"
          style={{ position: `relative` }}
        >

        {/* xl banner */}
                   {/* <div
            className="w-screen bg-cover hidden xl:block"
            style={{
              backgroundImage: `url(${bgImg})`,
              minHeight: `500px`,
              minWidth: `100%`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              opacity: `65%`,
            }}
          ></div>  */}
          {/* md banner */}
          {/* <div
            className="w-screen bg-cover hidden md:block xl:hidden"
            style={{
              backgroundImage: `url(${bgImg})`,
              minHeight: `400px`,
              minWidth: `100%`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              opacity: `65%`,
            }}
          ></div> */}
          {/* mobile banner */}
          {/* <div
            className="w-screen bg-cover block md:hidden "
            style={{
              backgroundImage: `url(${bgImg})`,
              minHeight: `300px`,
              minWidth: `100%`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              opacity: `65%`,
            }}
          ></div>
          <div
            className="w-full justify-items-center align-items-center text-center"
            style={{ position: `absolute`, width: `100vw` }}
          >
            <h1 className="text-4xl text-white font-bold">About</h1>
          </div>
        </div> */}
      {/* </section> */}
      
      <section id="about">
        <div className="flex flex-col justify-center items-center bg-white p-8 md:p-16  text-justify ">
          <div className="xl:w-1/2 w-full">
          <p className="text-gray-800 font-light lg:text-lg p-2 lg:p-6 text-justify lg:text-center">
          Wilson & Farr Cleaning Solutions was established in 2020 by
          proprietors Alex and Tamara. Using their managerial skills,
          backgrounds in production facilities and healthcare they were able to
          make attention to detail an essential part of their day-to-day
          operations. Quality, integrity and professionalism were integral
          values that enabled them to thrive in their fields. 
          </p>
          <p className="text-gray-800 font-normal p-6 lg:text-lg lg:p-12 text-center lg:text-center">
          The goal when starting Wilson & Farr Cleaning Solutions was simple;<br />
          To exceed client’s expectations by providing outstanding customer
          service, and delivering meticulous quality-focused cleaning
          operations.
          </p>
          <p className="text-gray-900 font-light p-2 lg:text-lg lg:p-6 text-justify lg:text-center">
          Helping their clients celebrate milestones and assisting clients
          through life transitions, Wilson & Farr Cleaning Solutions helps to
          give back to their community. Whether preparing homes for listing,
          assisting older adults, alleviating stress in busy households, or
          creating a safe and healthy work environment, they are devoted to
          making spaces <em>sparkle</em>.
          </p>
        </div>
        </div>
      </section>
    </Layout>
  );
};

export default about;
