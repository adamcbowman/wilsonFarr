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
        <div className="lg:flex w-full bg-white p-12" style={{ width: `100vw` }}>
          {/* left column desktop*/}
          <div className=" flex flex-col justify-center lg:w-1/2 lg:px-24 self-center">
            <StaticImage
              src="../images/bathroom.png"
              alt="Wilson Farr Cleaning Services logo"
              className="w-3/4 self-center"
              style={{
                maxWidth: `350px`,
              }}
            />

            <h2 className="text-xl font-semibold text-gray-900 pt-8">
              Standard, Deep Clean & Move In/Move Out Services
            </h2>
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
          <div className="md:flex justify-center lg:w-1/2 lg:px-12">

            <div className="md:w-1/2 p-6 text-left align-middle items-center justify-items-center text-gray-800 font-light">
              <h2 className="text-xl font-semibold text-gray-900">Kitchen</h2>
              <ul className="list-disc p-4">
                <li>Disinfect sink, countertops </li>
                <li>Clean refrigerator (interior & exterior)</li>
                <li>Clean oven (stovetop, interior & exterior)</li>
                <li>Clean microwave (interior & exterior)</li>
                <li>Clean & sanitize cabinets (interior & exterior)</li>
                <li>Vacuum & mop floor</li>
                <li>Windows (interior glass, sills & tracks)</li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-900">Bedrooms</h2>
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

            <div className="md:w-1/2 p-6 text-left align-middle items-center justify-items-center text-gray-800 font-light">
              <h2 className="text-xl font-semibold text-gray-900">
                Dining & Common Areas
              </h2>
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
              <h2 className="text-xl font-semibold text-gray-900">Bathrooms</h2>
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
      <section id="office">
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
      <section>
        <div className="lg:flex w-full bg-white p-12" style={{ width: `100vw` }}>
          {/* left column desktop*/}
          <div className=" flex flex-col justify-center lg:w-1/2 lg:px-24 self-center">
            <StaticImage
              src="../images/cleaning-10.png"
              alt="Wilson Farr Cleaning Services logo"
              className="w-3/4 self-center"
              style={{
                maxWidth: `350px`,
              }}
            />

            <h2 className="text-xl font-semibold text-gray-900 pt-8">
            Office Cleaning Service
            </h2>
            <p className=" text-gray-800 pt-6 font-light">
              Leave your <span className="font-bold ">Office Cleaning </span>duties to our professionals. We offer a variety of cleaning services for your business, to ensure your employees can work in a clean and healthy environment
            </p>
            
          </div>

          {/* right column desktop*/}
          <div className="md:flex justify-center lg:w-1/2 lg:px-12">

            <div className="md:w-1/2 p-6 text-left align-middle items-center justify-items-center text-gray-800 font-light">
              <h2 className="text-xl font-semibold text-gray-900">Working Areas</h2>
              <ul className="list-disc p-4">
              <li>Empty all garbage receptacles</li>
              <li>Vacuum carpeted floors </li>
              <li>Mop hard surface floors </li>
              <li>Dust all surfaces</li>
              <li>Spot clean partition glass</li>
              <li>Sanitize high-touch surfaces  (including doorknobs, light switches & telephones)</li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-900">Restrooms</h2>
              <ul className="list-disc p-4">
              <li>Empty garbage receptacles</li>
              <li>Clean and polish mirrors</li>
              <li>Sanitize toilets, urinals, sinks, and countertops</li>
              <li>Vacuum floors </li>
              <li>Mop floors</li>
              </ul>
            </div>

            <div className="md:w-1/2 p-6 text-left align-middle items-center justify-items-center text-gray-800 font-light">
              <h2 className="text-xl font-semibold text-gray-900">
              Kitchen 
              </h2>
              <ul className="list-disc p-4">
              <li>Empty all garbage receptacles</li>
              <li>Vacuum carpeted floors</li>
              <li>Mop hard surface floors</li>
              <li>Dust all horizontal surfaces</li>
              <li>Sanitize high touch surfaces (including stovetop, fridge, microwave, countertops, chairs, and tables)</li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default cleaningServices;
