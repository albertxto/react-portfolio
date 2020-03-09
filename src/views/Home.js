import React from "react";
import Header from "../components/Headers/Header.js";
import HomeBanner from "../components/Banners/HomeBanner.js";
import Skill from "../components/Skills/Skill.js";
import Portfolio from "../components/Portfolios/Portfolio.js";
import Footer from "../components/Footers/Footer.js";

function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Skill />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
