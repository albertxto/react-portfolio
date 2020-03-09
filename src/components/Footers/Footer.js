import React from "react";
import logo2 from "../../assets/img/logo2.png";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer_area">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <div class="footer_top flex-column">
              <div class="footer_logo">
                <Link to="/">
                  <img src={logo2} alt="Logo 2" />
                </Link>
                <div class="d-lg-block d-none">
                  <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
                    <div class="collapse navbar-collapse offset">
                      <ul class="nav navbar-nav menu_nav mx-auto">
                        <li class="nav-item">
                          <Link class="nav-link text-white" to="/">
                            Home
                          </Link>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="about.html">
                            About
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="portfolio.html">
                            Portfolio
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="services.html">
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="footer_social mt-lg-0 mt-4">
                <a
                  href="https://www.facebook.com/albert.prawono"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook-f"></i>
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
            </div>
          </Col>
        </Row>
        <div class="row footer_bottom justify-content-center">
          <p class="col-lg-8 col-sm-12 footer-text">
            Copyright &copy;
            {year} All rights reserved | This template is made with{" "}
            <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
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
