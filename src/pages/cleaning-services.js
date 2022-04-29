import React from "react";
import Layout from "../components/layout/Layout";
import bgImg from "../images/cleaning-4.png";
import bgImg2 from "../images/cleaning-7.png";

const cleaningServices = () => {
  return (
    <Layout>
      {/* house cleaning header */}
      <section>
        <div
          className="container flex flex-col justify-items-center justify-center w-full"
          style={{ position: `relative` }}
        >
          <div
            className="w-screen bg-cover"
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
            <h1 className="text-4xl text-white font-bold">House Cleaning Services</h1>
          </div>
        </div>
      </section>

      {/* house cleaning services */}
      <section>
        <div className="flex flex-col w-full bg-white h-screen" style={{ width: `100vw` }}>
          <p className="text-black">home cleaning services</p>
        </div>
      </section>

      {/* office header */}
      <section>
        <div
          className="container flex flex-col justify-items-center justify-center w-full"
          style={{ position: `relative` }}
        >
          <div
            className="w-screen bg-cover"
            style={{
              backgroundImage: `url(${bgImg2})`,
              minHeight: `300px`,
              minWidth: `100%`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              opacity: `60%`,
            }}
          ></div>
          <div
            className="w-full justify-items-center align-items-center text-center"
            style={{ position: `absolute`, width: `100vw` }}
          >
            <h1 className="text-4xl text-white font-bold">Office Cleaning Services</h1>
          </div>
        </div>
      </section>

      {/* office cleaning services */}
            {/* house cleaning services */}
            <section>
        <div className="flex flex-col w-full bg-white h-screen" style={{ width: `100vw` }}>
          <p className="text-black">office cleaning services</p>
        </div>
      </section>

    </Layout>
  );
};

export default cleaningServices;
