import React from "react";
import { SubNavContainer, SubLeft, SubMid, SubRight,SubLink,SubLinkLog } from "./SubNavElements";

import Aos from "aos";
import "aos/dist/aos.css";
const SubNav = () => {
  return (
    <SubNavContainer>
      <SubLeft>
        <SubLink to="" >Join Us</SubLink>
      </SubLeft>
      <SubMid>
        <SubLink to="" >Customer Support</SubLink>
      </SubMid>
      <SubRight>
        <SubLinkLog to="" ><a href="/login">Login/Register</a></SubLinkLog>
      </SubRight>
    </SubNavContainer>
  );
};

export default SubNav;
