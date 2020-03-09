import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

function Banner({ header, link, to }) {
  return (
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <Container>
          <div class="banner_content text-center">
            <h2>{header}</h2>
            <div class="page_link">
              <Link to="/">Home</Link>
              <Link to={to}>{link}</Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Banner;
