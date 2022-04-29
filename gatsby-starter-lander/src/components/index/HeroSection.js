import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HeroSection = () => {
  return (
    <section className="pt-4 md:pt-6">
      <div className="container mx-auto px-8 items-center text-center">
        <div className="container flex flex-col items-center">
          <StaticImage src="../images/logo.jpg" alt="logo" width="600" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
