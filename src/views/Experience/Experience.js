import React from "react";
import { Container } from "reactstrap";
import Header from "../../components/Headers/Header";
import Banner from "../../components/Banners/Banner";
import WorkExperience from "./WorkExperience";

function Experience() {
  return (
    <>
      <Header inner />
      <Banner header="My Experience" link="Experience" to="/experience" />
      <section className="about_area section_gap">
        <Container>
          <div className="mb-5">
            <WorkExperience type="working" />
          </div>
          <div>
            <WorkExperience type="organization" />
          </div>
        </Container>
      </section>
    </>
  );
}

export default Experience;
