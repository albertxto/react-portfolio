import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import firebase from "../../firebase.js";
import "firebase/firestore";
import { useUserContext } from "../../contexts/user.context.js";

function HomeBanner() {
  const [isLoading, setIsLoading] = useState(true);
  const [fullname, setFullname] = useState("");
  const [headline, setHeadline] = useState("");
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
          setFullname(snapshot.data().fullname);
          setHeadline(snapshot.data().headline);
          setSocialMedia(snapshot.data().socialMedia);
        }
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [userId]);

  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <Container>
          <Row className="align-items center justify-content-between">
            <Col lg="6">
              <div className="banner_content">
                <h3>Hello, I am</h3>
                <h1 className="text-uppercase">
                  {isLoading ? <Skeleton /> : fullname}
                </h1>
                <h5 className="text-uppercase">
                  {isLoading ? <Skeleton /> : headline}
                </h5>
                <div className="social_icons my-5">
                  {isLoading ? (
                    <>
                      <span className="mr-2">
                        <Skeleton circle={true} height={25} width={25} />
                      </span>
                      <span className="mr-2">
                        <Skeleton circle={true} height={25} width={25} />
                      </span>
                      <span className="mr-2">
                        <Skeleton circle={true} height={25} width={25} />
                      </span>
                      <span>
                        <Skeleton circle={true} height={25} width={25} />
                      </span>
                    </>
                  ) : (
                    <>
                      <a
                        href={socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti ti-facebook"></i>
                      </a>
                      <a
                        href={socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti ti-twitter"></i>
                      </a>
                      <a
                        href={socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti ti-linkedin"></i>
                      </a>
                      <a
                        href={socialMedia.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ti ti-github"></i>
                      </a>
                    </>
                  )}
                </div>
                <Link className="primary_btn" to="/portfolio">
                  <span>See My Work</span>
                </Link>
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
