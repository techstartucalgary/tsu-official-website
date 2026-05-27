import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "images/tech-start-logo-white.png";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const toggleNavbarExpanded = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const hideNavbar = () => {
    setNavbarExpanded(false);
  };

  const scrollToTarget = (target: string, offset: number) => {
    scroller.scrollTo(target, {
      duration: 500,
      smooth: true,
      offset,
    });
  };

  type NavbarLinkProps = {
    top: string;
    link: string;
    name: string;
  };

  const NavbarLink = (props: NavbarLinkProps) => (
    <li>
      <Link
        to={props.link}
        onClick={() => {
          hideNavbar();
          scrollToTarget(props.top, -80);
        }}
        aria-label={`Navigate to ${props.name}`}
      >
        {props.name}
      </Link>
    </li>
  );

  return (
    <header className="navbar__container">
      <div className="navbar">
        <input
          type="checkbox"
          checked={navbarExpanded}
          onChange={toggleNavbarExpanded}
          id="navbar__nav-toggle"
          className="navbar__nav-toggle"
          aria-label="Toggle navigation menu"
        />
        <Link
          to="/"
          onClick={() => {
            hideNavbar();
            scrollToTarget("homePageTop", -70);
          }}
          aria-label="Tech Start UCalgary home"
        >
          <motion.img
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            src={logo}
            alt="Tech Start UCalgary logo"
            className="navbar__logo"
          />
        </Link>
        <nav className="navbar__content" aria-label="Main navigation">
          <motion.ul initial={{ y: -250 }} animate={{ y: 0 }}>
            <li className="navbar__section">
              <a href="#">
                <LinkScroll to="homePageTop" spy={true} offset={-80} duration={500}>
                  <Link onClick={hideNavbar} to="/">
                    About
                  </Link>
                </LinkScroll>
              </a>
              <ul className="navbar__subsections">
                <li>
                  <Link onClick={hideNavbar} to="/#projects">
                    Tech Start Projects
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/#events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/#sponsors">
                    Our Sponsors
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar__section">
              <a href="#">
                <LinkScroll to="teamPageTop" spy={true} offset={-80} duration={500}>
                  <Link onClick={hideNavbar} to="/team">
                    Team
                  </Link>
                </LinkScroll>
              </a>
              <ul className="navbar__subsections">
                <li>
                  <Link onClick={hideNavbar} to="/team#the-board">
                    The Board
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/team#our-team">
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar__section">
              <a href="#">
                <LinkScroll to="projectsPageTop" spy={true} offset={-80} duration={500}>
                  <Link onClick={hideNavbar} to="/projects">
                    Projects
                  </Link>
                </LinkScroll>
              </a>
              <ul className="navbar__subsections">
                <li>
                  <Link onClick={hideNavbar} to="/projects#showcase-winners">
                    Final Showcase Winners
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/projects#featured-projects">
                    Featured Projects
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/projects#past-projects">
                    Past Projects
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar__section">
              <a href="#">
                <LinkScroll to="applyPageTop" spy={true} offset={-80} duration={500}>
                  <Link onClick={hideNavbar} to="/apply">
                    Apply
                  </Link>
                </LinkScroll>
              </a>
              <ul className="navbar__subsections">
                <li>
                  <Link onClick={hideNavbar} to="/apply#what-we-do">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/apply#faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/apply#applications">
                    Applications
                  </Link>
                </li>
              </ul>
            </li>

            <NavbarLink top="merchPageTop" link="/merch" name="Merch" />
            <NavbarLink top="galleryPageTop" link="/gallery" name="Gallery" />
            <NavbarLink top="docsPageTop" link="/resources" name="Resources" />
          </motion.ul>
        </nav>
        <label
          htmlFor="navbar__nav-toggle"
          className="navbar__nav-toggle-label"
          aria-label="Open navigation menu"
        >
          <span></span>
        </label>
      </div>
      <div className="navbar__placeholder"></div>
    </header>
  );
};
export default Header;
