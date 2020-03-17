import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer_area">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <Link to="/">
                  <img
                    src={require("../../assets/img/logo2.png")}
                    alt="Logo 2"
                  />
                </Link>
                <div className="d-lg-block d-none">
                  <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                    <div className="collapse navbar-collapse offset">
                      <ul className="nav navbar-nav menu_nav mx-auto">
                        <li className="nav-item">
                          <Link className="nav-link text-white" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white" href="about.html">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link text-white"
                            href="portfolio.html"
                          >
                            Portfolio
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link text-white"
                            href="services.html"
                          >
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="footer_social mt-lg-0 mt-4">
                <a
                  href="https://www.facebook.com/albert.prawono"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/albertxto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/albert-p-58156413b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/albertxto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            Copyright &copy;
            {year} All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colorlib
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
