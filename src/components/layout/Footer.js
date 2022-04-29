import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className="container flex justify-center mx-auto py-16 px-3 mt-24 mb-2 text-gray-800">
    <div className="flex flex-col -mx-3 items-center justify-center">
      <StaticImage src="../../images/logo.jpg" alt="logo" width="250"/>
      <div className="flex ">
        <a
          href="https://www.facebook.com/Wilson-Farr-Cleaning-Solutions-113754693875893"
          className="p-6"
        >
         <FontAwesomeIcon icon={faFacebookF} className="h-10"/>
        </a>
        <a href="https://www.instagram.com/wilsonandfarrcleaningsolutions/" className="p-6">
          <FontAwesomeIcon icon={faInstagram} className="h-10"/>
        </a>
      </div>
      <p className='p-2 font-medium text-lg'>Kentville, Nova Scotia</p>
      <p className='p-2 font-medium text-lg'>(902)993-0049</p>
      <p className='p-2 font-medium text-lg'><a href="mailto:wilsonfarrcleaningsolutions@gmail.com">wilsonfarrcleaningsolutions@gmail.com</a></p>
    </div>
  </footer>
);

export default Footer;
