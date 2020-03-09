import React from "react";
import { Container, Row, Col } from "reactstrap";

function HomeBanner() {
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <Container>
          <Row className="align-items center justify-content-between">
            <Col lg="6">
              <div className="banner_content">
                <h3>Hey There!</h3>
                <h1 className="text-uppercase">I am Albert Prawono</h1>
                <h5 className="text-uppercase">Web Developer</h5>
                <div class="social_icons my-5">
                  <a
                    href="https://www.facebook.com/albert.prawono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com/albertxto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/albert.xto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://github.com/albertxto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
                <a class="primary_btn" href="#">
                  <span>See My Work</span>
                </a>
              </div>
            </Col>
            <Col lg="6"></Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default HomeBanner;
