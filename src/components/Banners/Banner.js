import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

function Banner({ header, link, to }) {
  return (
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <Container>
          <div className="banner_content text-center">
            <h2>{header}</h2>
            <div className="page_link">
              <Link to="/index">Home</Link>
              <Link to={to}>{link}</Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Banner;
