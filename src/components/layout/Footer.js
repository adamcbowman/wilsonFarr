import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="container flex justify-center mx-auto pt-4 px-3 mt-20 mb-8 text-gray-800">
    <div className="flex flex-col mx-3 items-center justify-center">
      <StaticImage src="../../images/logo.jpg" alt="logo" width="250" />
      <div className="flex text-xl">
        <a
          href="https://www.facebook.com/Wilson-Farr-Cleaning-Solutions-113754693875893"
          className="p-6"
        >
          <FontAwesomeIcon icon={faFacebookF}  style={{ height: `27px`}}/>
        </a>
        <a
          href="https://www.instagram.com/wilsonandfarrcleaningsolutions/"
          className="p-6"
        >
          <FontAwesomeIcon icon={faInstagram} style={{ height: `30px`}}/>
        </a>
      </div>
      <p className="p-2 font-thin text-lg">Kentville, Nova Scotia</p>
      <p className="p-2 text-lg font-sans">
        <a href="tel:+19029930049" className="text-white">
          902-993-0049
        </a>
      </p>
      <p className="p-2 font-medium md:text-lg font-mono">
        <a href="mailto:wilsonfarrcleaningsolutions@gmail.com">
          wilsonfarrcleaningsolutions@gmail.com
        </a>
      </p>
      <p className="pt-16 text-xs font-light">
        © {new Date().getFullYear()} Wilson & Farr Cleaning Solutions
      </p>
      <p className="pt-2 text-sm font-mono">
        site by <a href="https://adambowman.tech" target={ '_blank' }>ACB Consulting</a>
      </p>
    </div>
  </footer>
);

export default Footer;
