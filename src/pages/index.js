import React from 'react';

import Layout from '../components/layout/Layout';
import Seo from '../components/seo';

import HeroSection from '../components/index/HeroSection';
import LeafBannerSection from '../components/index/LeafBannerSection';
import ServiceCardsSection from '../components/index/ServiceCardsSection';
import ServiceFeatures from '../components/index/ServiceFeatures';
import Reviews from '../components/index/Reviews';
import MobileCardsSection from '../components/index/mobileCardsSection';

const Index = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <LeafBannerSection />
    <ServiceCardsSection />
    <ServiceFeatures />
    <MobileCardsSection />
    <Reviews />
  </Layout>
);

export default Index;
