import React from "react";
import {
  FooterContainer,
  FooterColOne,
  FooterSubColOne,
  FooterSubColOneBody,
  TitleOne,
  SubTitleOne,
  ConName,
  Date,
  ConVenue,
  ConeAddress,
  FooterSubColTwo,
  FooterSubColTwoBody,
  TitleTwo,
  SubTitleTwo,
  Office,
  OfficeAddress,
  ConvContact,
  ConContactInfo,
  FooterColTwo,
  FooterContactP
} from "./FooterElements";
import img1 from "../../Images/LogoHigh.png";
const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterColOne>
        <FooterSubColOne>
          <FooterSubColOneBody>
            <TitleOne>Latest News</TitleOne>
            {/* <SubTitleOne>information</SubTitleOne> */}
            <ConeAddress>
              <p>10 Patio Design Ideas</p>
              <p>8 Interior Design Ideas for Photography Studio 2022</p>
              <p>Best 7 Interior Design Ideas For Office Reception 2022</p>
              <p>10 Interior Design Ideas for Hospitals 2022</p>
              <p>10 Interior Design Ideas For Bungalow 2022</p>
            </ConeAddress>
          </FooterSubColOneBody>
        </FooterSubColOne>
        <FooterSubColTwo>
            <FooterSubColTwoBody>
            <TitleTwo>Contact Us</TitleTwo>
          {/* <SubTitleTwo>Contact us</SubTitleTwo> */}


          <OfficeAddress>
            <p><pre>Address:</pre>No.60,first Lane, Mount Lavinia, Colombo, Sri Lanka. </p>
            <p><pre>Phone:</pre>+94 11 22222222, +98 11 3333333</p>
            <p><pre>Mobile:</pre>+9477 5555555</p>
            <p><pre>Email:</pre>info@galaxyinterior@gmail.com</p>
            <p><pre>Web:</pre>www.galaxyinteriorone.com</p>
            <p><pre>Design :</pre> <a href="/aboutus">Pasindu Rashmika</a></p>
            
          </OfficeAddress>
          <ConContactInfo>
            <FooterContactP></FooterContactP>
          </ConContactInfo>
            </FooterSubColTwoBody>
          
        </FooterSubColTwo>
      </FooterColOne>

      <FooterColTwo>
      <a href="/home"> <img src={img1} alt="" /></a>
      </FooterColTwo>
    </FooterContainer>
  );
};

export default Footer;
