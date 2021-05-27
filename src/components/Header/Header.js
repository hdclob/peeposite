import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import pdf from '../../assets/peepocoin-whitepaper.pdf'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["header"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <header
      className={`${scrolled ? "scrolled" : ""} header container  m-0 px-0`}
    >
      <div className="container px-0">
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="logo img-fluid"
                onClick={() => scroll.scrollToTop()}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center align-items-center">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-90}
                duration={1000}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="peeponomics"
                spy={true}
                smooth={true}
                offset={30}
                duration={1000}
              >
                Peeponomics
              </Link>
              <Link
                activeClass="active"
                to="raodmap"
                spy={true}
                smooth={true}
                offset={30}
                duration={1000}
              >
                Roadmap
              </Link>
              <a
                href={pdf}
                className='whitepaper text-dark'
                target='blank'
              >
                Whitepaper
              </a>
              <a
                href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xFD42e634c21f493534EEd85A5820d11B6b94cd94"
                target='blank'
                className='resume'
              >
                Buy On PanCakeSwap
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
