import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WhyMindery from "./WhyMindery";
import Programs from "./Programs";
import BuiltForKids from "./BuiltForKids";
import Pricing from "./Pricing";
import ParentTeacherHub from "./ParentTeacherHub";
import FAQ from "./FAQ";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="bg-[#FFFEFC]">
        <header className="w-4/5 mx-auto">
          <Header />
        </header>
        <hr className="opacity-30"/>
        <main className="w-4/5 mx-auto">
          <Hero id="hero" />
          <WhyMindery id="whymindery" />
          <Programs id="programs" />
          <BuiltForKids id="builtforkids" />
          <Pricing id="pricing" />
          <ParentTeacherHub id="parentteacherhub" />
          <FAQ id="faq" />
        </main>
        <footer className="w-4/5 mx-auto">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
