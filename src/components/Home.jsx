import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WhyMindery from './WhyMindery';
import Programs from './Programs';
import BuiltForKids from './BuiltForKids';
import Pricing from './Pricing';
import ParentTeacherHub from './ParentTeacherHub';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero id="hero" />
        <WhyMindery id="whymindery" />
        <Programs id="programs" />
        <BuiltForKids id="builtforkids" />
        <Pricing id="pricing" />
        <ParentTeacherHub id="parentteacherhub" />
        <FAQ id="faq" />
      </main>
      <Footer />
    </>
  );
};

export default Home;