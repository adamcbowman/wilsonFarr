import React from 'react';
import Button from '../Button';
import { Link } from 'gatsby';

const MobileCard = ({ bgImg, className, title, text, id }) => (
  <>
    <div className="container rounded flex w-screen" style={{ position: `relative` }}>
      <div
        className=" m-4 rounded h-full w-screen"
        style={{
          position: `absolute`,
          top: `0`,
          left: `0`,
          backgroundColor: `black`,
          height: `350px`,
          width: `92%`,
        }}
      ></div>
      <div
        className="flex-1 m-4 rounded bg-cover w-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          height: `350px`,
          opacity: `50%`,
        }}
      ></div>
      <div
        className={`p-12 ${className}`}
        style={{
          position: `absolute`,
          left: '0',
        }}
      >
        <p className="font-semibold text-4xl text-white mt-10">{title}</p>
        <p className="mt-2 mb-4 text-lg text-white italic">{text}</p>
        <Link to={`/cleaning-services#${id}`} className='text-white'><Button classname="outline-white" size="l">Read More</Button></Link>
      </div>
    </div>
  </>
);

export default MobileCard;