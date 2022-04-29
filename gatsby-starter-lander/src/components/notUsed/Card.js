import React from 'react';

const Card = ({ bgImg, className, children }) => (
  <div  style={{ position: `relative` }}>
    <div
      className="rounded m-4 h-full w-full"
      style={{
        position: `absolute`,
        top: `0`,
        left: `0`,
        backgroundColor: `black`,
        backgroundSize: `cover`,
        height: `300px`,
        width: `95%`
      }}
    ></div>
    <div
      className="flex-1 rounded m-4"
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
      {children}
    </div>
  </div>
);

export default Card;
