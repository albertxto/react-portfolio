import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../components/Headers/Header";
import HomeBanner from "../../components/Banners/HomeBanner";
import Profile from "../About/Profile";
import Education from "../About/Education";

function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <section className="about_area section_gap">
        <Container>
          <Row>
            <Col className="mb-5 mb-lg-0" lg="5">
              <Profile />
            </Col>
            <Col className="offset-lg-1" lg="6">
              <Education />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
