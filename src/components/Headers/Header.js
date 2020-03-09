import React from "react";
import logo from "../../assets/img/logo.png";
import logo2 from "../../assets/img/logo2.png";
import { Navbar, Container, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header_area">
      <div className="main_menu">
        <Navbar light expand="lg">
          <Container>
            <a className="navbar-brand logo_h" href="index.html">
              <img src={logo} alt="Logo" />
            </a>
            <a className="navbar-brand logo_inner_page" href="index.html">
              <img src={logo2} alt="Logo 2" />
            </a>
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
              <Nav className="menu_nav">
                <NavItem>
                  <NavLink to="/" tag={NavLinkRRD} activeClassName="active">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/about"
                    tag={NavLinkRRD}
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </NavItem>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="services.html">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="portfolio-details.html">
                        Portfolio Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="single-blog.html">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
