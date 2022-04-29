import React from 'react';

import Layout from '../components/layout/Layout';

import HeroSection from '../components/index/HeroSection';
import LeafBannerSection from '../components/index/LeafBannerSection';
import ServiceCardsSection from '../components/index/ServiceCardsSection';
import ServiceFeatures from '../components/index/ServiceFeatures';
import Reviews from '../components/index/Reviews';

const Index = () => (
  <Layout>
    <HeroSection />
    <LeafBannerSection />
    <ServiceCardsSection />
    <ServiceFeatures />
    <Reviews />
  </Layout>
);

export default Index;
