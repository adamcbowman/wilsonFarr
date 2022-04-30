import React from 'react';
import Button from '../Button';
import { Link } from 'gatsby';

const ServiceCard = ({ bgImg, className, title, text, id }) => (
  <>
    <div className="container flex rounded-lg" style={{ position: `relative` }}>
      <div
        className="rounded-lg m-4 h-full w-full"
        style={{
          position: `absolute`,
          top: `0`,
          left: `0`,
          backgroundColor: `black`,
          height: `300px`,
          width: `95%`,
        }}
      ></div>
      <div
        className="flex-1 rounded-lg m-4 bg-cover"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          height: `300px`,
          opacity: `50%`,
        }}
      ></div>
      <div
        className={`p-12 rounded-lg ${className}`}
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

export default ServiceCard;
