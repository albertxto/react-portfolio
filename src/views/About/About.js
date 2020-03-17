import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../components/Headers/Header";
import Banner from "../../components/Banners/Banner";
import Profile from "./Profile";
import Education from "./Education";
// import Experience from "./Experience";

function About() {
  return (
    <>
      <Header inner />
      <Banner header="About Me" link="About" to="/about" />
      <section className="about_area section_gap">
        <Container>
          <Row>
            <Col className="mb-5" lg="5">
              <Profile />
            </Col>
            <Col className="offset-lg-1 mb-5" lg="6">
              <Education />
            </Col>
          </Row>
          <Row>
            <Col>{/* <Experience /> */}</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
