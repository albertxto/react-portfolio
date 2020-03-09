import React from "react";
import s1 from "../../assets/img/services/s1.png";
import s2 from "../../assets/img/services/s2.png";
import s3 from "../../assets/img/services/s3.png";
import { Container, Row, Col } from "reactstrap";

function Skill() {
  return (
    <section className="services_area">
      <Container>
        <Row>
          <Col>
            <div className="main_title">
              <p className="top_text">
                Our Service <span></span>
              </p>
              <h2>
                What Service We <br />
                Offer For You{" "}
              </h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="6" className="mb-4 mb-lg-0">
            <div className="service_item">
              <img src={s1} alt="" />
              <h4>Web Development</h4>
              <p>
                Fruit saw for brought fish forth had ave is man a that their Two
                he is dominion evening their Fruit saw for brought fish forth
              </p>
              <a href="#" className="primary_btn2 mt-35">
                Learn More
              </a>
            </div>
          </Col>

          <Col lg="4" md="6" className="mb-4 mb-lg-0">
            <div className="service_item">
              <img src={s2} alt="" />
              <h4>UX/UI Design</h4>
              <p>
                Fruit saw for brought fish forth had ave is man a that their Two
                he is dominion evening their Fruit saw for brought fish forth
              </p>
              <a href="#" className="primary_btn2 mt-35">
                Learn More
              </a>
            </div>
          </Col>

          <Col lg="4" md="6" className="mb-4 mb-lg-0">
            <div className="service_item">
              <img src={s3} alt="" />
              <h4>WP Developing</h4>
              <p>
                Fruit saw for brought fish forth had ave is man a that their Two
                he is dominion evening their Fruit saw for brought fish forth
              </p>
              <a href="#" className="primary_btn2 mt-35">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skill;
