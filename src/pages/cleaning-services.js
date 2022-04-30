import { StaticImage } from "gatsby-plugin-image";
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
            <h1 className="text-4xl text-white font-bold">
              House Cleaning Services
            </h1>
          </div>
        </div>
      </section>

      {/* house cleaning services */}
      <section>
        <div className="flex w-full bg-white p-12" style={{ width: `100vw` }}>
          {/* left column desktop*/}
          <div className="flex flex-col justify-center w-1/2 px-24">
            <StaticImage
              src="../images/bathroom.png"
              alt="Wilson Farr Cleaning Services logo"
              className="w-1/2 self-center"
              style={{ minHeight: `300px`, minWidth: `360px` }}
            />

            <h1 className="text-xl font-semibold text-gray-900 pt-8">
              Standard, Deep Clean & Move In/Move Out Services
            </h1>
            <p className=" text-gray-800 pt-6 font-light">
              Schedule a{" "}
              <span className="font-bold ">Standard Cleaning Service</span> to
              maintain the day-to-day living in your home
            </p>
            <p className="text-gray-800 pt-6 font-light">
              Our <span className="font-bold ">Deep Cleaning Services</span>{" "}
              will get you back on track. Every Deep Clean includes a Standard
              Clean, in addition to a detailed focus on the build-up
            </p>
            <p className=" text-gray-800 pt-6 font-light">
              Planning on moving soon? Let our cleaning professionals make your
              move easier and stress-free with our{" "}
              <span className="font-bold ">Move In/Move Out Service </span>
            </p>
            <p className=" text-gray-800 pt-6 font-light">
              Add our{" "}
              <span className="font-bold ">Window Cleaning Service </span>
              to your next Deep Clean. This includes interior & exterior windows
              glass, tracks, sills, and screens
            </p>
          </div>

          {/* right column desktop*/}
          <div className="flex justify-center w-1/2 px-12">

            <div className="w-1/2 px-6 text-left align-middle items-center justify-items-center text-gray-800 font-light">
              <h1 className="text-xl font-semibold text-gray-900">Kitchen</h1>
              <ul className="list-disc p-4">
                <li>Disinfect sink, countertops </li>
                <li>Clean refrigerator (interior & exterior)</li>
                <li>Clean oven (stovetop, interior & exterior)</li>
                <li>Clean microwave (interior & exterior)</li>
                <li>Clean & sanitize cabinets (interior & exterior)</li>
                <li>Vacuum & mop floor</li>
                <li>Windows (interior glass, sills & tracks)</li>
              </ul>
              <h1 className="text-xl font-semibold text-gray-900">Bedrooms</h1>
              <ul className="list-disc p-4">
                <li>
                  Dust & wet wipe (blinds, light fixtures/ceiling fans, corners,
                  ceiling & baseboards)
                </li>
                <li>Cobweb removal</li>
                <li>Vacuum floors/carpets & mop</li>
                <li>Windows (interior glass, sills & tracks)</li>
                <li>Turndown service</li>
              </ul>
            </div>

            <div className="w-1/2 px-6 text-left align-middle items-center justify-items-center text-gray-800 font-light">
              <h1 className="text-xl font-semibold text-gray-900">
                Dining & Common Areas
              </h1>
              <ul className="list-disc p-4">
                <li>
                  Dust & wet wipe (blinds, light fixtures/ceiling fans, corners,
                  ceiling & baseboards)
                </li>
                <li>Vacuum floors/carpets & mop</li>
                <li> Clean tracks and doors</li>
                <li>Cobweb removal</li>
                <li>Garbage removal</li>
                <li>Windows (interior glass, sills & tracks)</li>
              </ul>
              <h1 className="text-xl font-semibold text-gray-900">Bathrooms</h1>
              <ul className="list-disc p-4">
                <li>Disinfect (sinks, countertops, showers, tubs, and toilets)</li>
                <li>Vacuum floors/carpets & mop</li>
                <li>Dirty linen removal</li>
              </ul>
            </div>
          </div>
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
            <h1 className="text-4xl text-white font-bold">
              Office Cleaning Services
            </h1>
          </div>
        </div>
      </section>

      {/* office cleaning services */}
      {/* house cleaning services */}
      <section>
        <div
          className="flex flex-col w-full bg-white h-screen"
          style={{ width: `100vw` }}
        >
          <p className="text-black">office cleaning services</p>
        </div>
      </section>
    </Layout>
  );
};

export default cleaningServices;
