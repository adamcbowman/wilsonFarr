import React from 'react'
import backgroundImage from '../../images/125189448_-113758903875472-_3951410496181531443_n.jpg';

const LeafBannerSection = () => {
  return (
    <section className="pt-6 md:pt-10" style={{ overflow: `clip` }}>
    <div className="w-screen" style={{ position: `relative`}}>
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: `bottom`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          minHeight: `350px`,
          opacity: `75%`,
        }}
      ></div>
      <div
        className=" flex flex-col w-screen text-center "
        style={{ position: `absolute`, top: `0`, left: `0` }}
      >
        <h1 className="hidden">Wilson & Farr Cleaning Solutions - Annapolis Valley Nova Scotia</h1>
        <h1 className="text-3xl lg:text-4xl px-6 lg:px-20 text-gray-100 mt-24 lg:mt-32 font-bold">
          HOME & OFFICE CLEANING PROFESSIONALS
        </h1>
        <h3 className="lg:text-lg px-6 pt-4 lg:px-20 font-semibold text-gray-200 ">
          Proudly Serving the Annapolis Valley: Coldbrook, Kentville, New Minas, Port WIlliams,
          Canning, Wolfville, Hantsport & Windsor
        </h3>        
      </div>
    </div>
  </section>
  )
}

export default LeafBannerSection