import React from "react";
import { Navbar, Container, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import routes from "../../routes.js";

function Header({ inner }) {
  const createLinks = routes => {
    return routes.map((route, key) => {
      if (route.visible) {
        return (
          <NavItem key={key}>
            <NavLink to={route.path} tag={NavLinkRRD}>
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
    <header className={`header_area ${inner ? "header_inner_page" : ""}`}>
      <div className="main_menu">
        <Navbar light expand="lg">
          <Container>
            <Link className="navbar-brand logo_h" to="/index">
              <img src={require("../../assets/img/logo.png")} alt="Logo" />
            </Link>
            <Link className="navbar-brand logo_inner_page" to="/index">
              <img src={require("../../assets/img/logo2.png")} alt="Logo 2" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <Nav className="navbar-nav menu_nav">{createLinks(routes)}</Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
