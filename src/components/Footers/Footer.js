import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Navbar, NavItem, NavLink } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import routes from "../../routes.js";
import firebase from "../../firebase.js";
import "firebase/firestore";
import { useUserContext } from "../../contexts/user.context.js";

function Footer() {
  const year = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(true);
  const [socialMedia, setSocialMedia] = useState({});

  const { userId } = useUserContext();

  useEffect(() => {
    const userRef = firebase
      .firestore()
      .collection("users")
      .doc(userId);
    userRef
      .get()
      .then(snapshot => {
        if (snapshot) {
          setSocialMedia(snapshot.data().socialMedia);
        }
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [userId]);

  const createLinks = routes => {
    return routes.map((route, key) => {
      if (route.visible) {
        return (
          <NavItem key={key}>
            <NavLink to={route.path} tag={NavLinkRRD} className="text-white">
              {route.name}
            </NavLink>
          </NavItem>
        );
      } else {
        return null;
      }
    });
  };

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
                  <Navbar light expand="lg" className="justify-content-center">
                    <div className="collapse navbar-collapse offset">
                      <Nav className="navbar-nav menu_nav mx-auto">
                        {createLinks(routes)}
                      </Nav>
                    </div>
                  </Navbar>
                </div>
              </div>
              <div className="footer_social mt-lg-0 mt-4">
                {isLoading ? (
                  <>
                    <span className="mr-3">
                      <Skeleton circle={true} height={42} width={42} />
                    </span>
                    <span className="mr-3">
                      <Skeleton circle={true} height={42} width={42} />
                    </span>
                    <span className="mr-3">
                      <Skeleton circle={true} height={42} width={42} />
                    </span>
                    <span>
                      <Skeleton circle={true} height={42} width={42} />
                    </span>
                  </>
                ) : (
                  <>
                    <a
                      href={socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href={socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href={socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={socialMedia.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </>
                )}
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
