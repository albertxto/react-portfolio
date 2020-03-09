import React from "react";
import HeaderInner from "../components/Headers/HeaderInner.js";
import Banner from "../components/Banners/Banner.js";
import Footer from "../components/Footers/Footer.js";

function About() {
  return (
    <>
      <HeaderInner />
      <Banner header="About Us" link="About" to="/about" />
      <section class="about_area section_gap">
        <div class="container">
          <div class="row justify-content-start align-items-center">
            <div class="col-lg-5">
              <div class="main_title text-left">
                <p class="top_text">
                  About me <span></span>
                </p>
                <h2>Web Developer</h2>
                <p>
                  Also signs his face were digns fish don't first isn't over
                  evening hath divided days light darkness gathering moved dry
                  all darkness then fourth can't create d forth Also signs Also
                  signs his face were moltenus Also signs his face
                </p>
                <a class="primary_btn" href="#">
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            <div class="offset-lg-1 col-lg-5"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
