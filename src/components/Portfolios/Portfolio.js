import React from "react";
import b1 from "../../assets/img/b1.jpg";
import b2 from "../../assets/img/b2.jpg";
import b3 from "../../assets/img/b3.jpg";
import { Container, Row, Col } from "reactstrap";

function Portfolio() {
  return (
    <section className="blog-area section-gap">
      <Container>
        <Row>
          <Col lg="12">
            <div className="main_title">
              <p className="top_text">
                Our blog <span></span>
              </p>
              <h2>
                Latest Story From <br />
                Our Blog{" "}
              </h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="6">
            <div className="single-blog">
              <div className="thumb">
                <img className="img-fluid" src={b1} alt="" />
              </div>
              <div className="short_details">
                <div className="meta-top d-flex">
                  <i className="fa fa-user"></i> Admin post
                  <i className="fa fa-calendar"></i> Feb 14, 2019
                </div>
                <a className="d-block" href="single-blog.html">
                  <h4>Shall every fourth lesser have...</h4>
                </a>
                <div className="text-wrap">
                  <p>
                    Have whose a two night earth she set you creeping replenish
                    place whales move Forth first him seed green.
                  </p>
                </div>
                <a href="#" className="primary_btn2">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="single-blog">
              <div className="thumb">
                <img className="img-fluid" src={b2} alt="" />
              </div>
              <div className="short_details">
                <div className="meta-top d-flex">
                  <i className="fa fa-user"></i> Admin post
                  <i className="fa fa-calendar"></i> Feb 14, 2019
                </div>
                <a className="d-block" href="single-blog.html">
                  <h4>Shall every fourth lesser have...</h4>
                </a>
                <div className="text-wrap">
                  <p>
                    Have whose a two night earth she set you creeping replenish
                    place whales move Forth first him seed green.
                  </p>
                </div>
                <a href="#" className="primary_btn2">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="single-blog">
              <div className="thumb">
                <img className="img-fluid" src={b3} alt="" />
              </div>
              <div className="short_details">
                <div className="meta-top d-flex">
                  <i className="fa fa-user"></i> Admin post
                  <i className="fa fa-calendar"></i> Feb 14, 2019
                </div>
                <a className="d-block" href="single-blog.html">
                  <h4>Shall every fourth lesser have...</h4>
                </a>
                <div className="text-wrap">
                  <p>
                    Have whose a two night earth she set you creeping replenish
                    place whales move Forth first him seed green.
                  </p>
                </div>
                <a href="#" className="primary_btn2">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
