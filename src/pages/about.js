import React from "react";
import Layout from "../components/layout/Layout";
import bgImg from "../images/AboutUs.jpg";

const about = () => {
  return (
    <Layout>
      <section id="header">
        <div
          className="container flex flex-col justify-items-center justify-center w-full"
          style={{ position: `relative` }}
        >
          <div
            className="w-screen bg-cover hidden md:block"
            style={{
              backgroundImage: `url(${bgImg})`,
              minHeight: `400px`,
              minWidth: `100%`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              opacity: `65%`,
            }}
          ></div>
          <div
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
        </div>
      </section>
      <section id="about">
        <div className="flex flex-col justify-center items-center bg-white p-8 md:p-20 text-justify ">
          <p className="text-gray-800 font-light p-2 text-justify">
          Wilson & Farr Cleaning Solutions was established in 2020 by
          proprietors Alex and Tamara. Using their managerial skills,
          backgrounds in production facilities and healthcare they were able to
          make attention to detail an essential part of their day-to-day
          operations. Quality, integrity and professionalism were integral
          values that enabled them to thrive in their fields. 
          </p>
          <p className="text-gray-800 font-light p-2 text-justify">
          Helping their clients celebrate milestones and assisting clients
          through life transitions, Wilson & Farr Cleaning Solutions helps to
          give back to their community. Whether preparing homes for listing,
          assisting older adults, alleviating stress in busy households, or
          creating a safe and healthy work environment, they are devoted to
          making spaces sparkle.
          </p>
          <p className="text-gray-800 font-light p-2 text-justify">
          Their goal when starting Wilson & Farr Cleaning Solutions was simple;
          to exceed client’s expectations by providing outstanding customer
          service, and delivering meticulous quality-focused cleaning
          operations.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default about;
