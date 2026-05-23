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
            <NavbarLink top="homePageTop" link="/" name="About" />
            <NavbarLink top="teamPageTop" link="/team" name="Team" />
            <NavbarLink
              top="projectsPageTop"
              link="/projects"
              name="Projects"
            />
            <NavbarLink top="applyPageTop" link="/apply" name="Apply" />
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
