import React, { useState } from "react";
import {
  NavContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended
} from "./NavbarElements";
import { Link } from "react-router-dom";
import img1 from "../../Images/galaxypng.png";

import { HashLink as Links } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer >
            <NavbarLink to="/home"><Link to='/home' ><a href="/home">Home</a></Link></NavbarLink>
            <NavbarLink to="/"><Links to='#Service' >services</Links></NavbarLink>
            <NavbarLink to="/"><Links to='#mission' >portfolio</Links></NavbarLink>
            <NavbarLink to="/"><Links to='#Service' >blog</Links></NavbarLink>
            <NavbarLink to="/"><Links to='#footer' >about us</Links></NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        <a href="/home"><Logo src={img1} ></Logo></a>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
        <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
        <NavbarLinkExtended to="/">services</NavbarLinkExtended>
        <NavbarLinkExtended to="/">portfolio</NavbarLinkExtended>
        
        <NavbarLinkExtended to="/">shop</NavbarLinkExtended>
        <NavbarLinkExtended to="/">about us</NavbarLinkExtended>
      </NavbarExtendedContainer>
      )}
      
    </NavContainer>
  );
};

export default Navbar;
