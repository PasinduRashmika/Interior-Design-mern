import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AboutcsscContainer,
  CsscThings,
  CsscHeading,
  CsscImg1,
  CsscImg2,
  CsscSub,
  Name,
  Carrer,
  Degree,
  Uni,
  Social,
  SociaLinks
} from "./DeveloperElements";
import img1 from "../../Images/Pasindu.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { IconName,RiWhatsappFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";


import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialDribbbleCircular,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiMail,
  TiSocialGithubCircular
} from "react-icons/ti";


const csscRuhsh = () => {
  return (
    
    <AboutcsscContainer>
      <CsscHeading >
        <h1>Design & Developed by</h1>
      </CsscHeading>
      <CsscThings>
        <CsscImg1>
          <img src={img1} />
          <CsscSub ></CsscSub>
        </CsscImg1>
        <CsscImg2>
          <Name>
            <h1>Pasindu Rashmika</h1>
          </Name>
          <Carrer>
            <p> Full Stack Developer</p>
          </Carrer>
          <Degree>
            <p>Bachelor of Computer Science (BCS) (Undergratuate)</p>
          </Degree>
          <Uni>
            <p>University of Ruhuna</p>
          </Uni>
          <Social>
          
          <span>
              <TiSocialLinkedin size="25px" /><SociaLinks><a href="https://www.linkedin.com/in/pasindu-rashmika-3787a0206" target="_blank">www.linkedin.com/in/pasindu-rashmika-3787a0206</a></SociaLinks>
            </span>
            <span>
              <TiSocialGithubCircular size="25px" /><SociaLinks><a href="https://github.com/PasinduRashmika" target="_blank">PasinduRashmika</a></SociaLinks>
            </span>
            <span>
              <TiSocialFacebook size="25px" /><SociaLinks><a href="https://www.facebook.com/profile.php?id=100009460623393" target="_blank">Pasindu Rashmika</a></SociaLinks>
            </span>
            <span>
              <TiMail size="25px" /><SociaLinks>rashmikaofficial98@gmail.com</SociaLinks>
            </span>
            <span>
              <RiWhatsappFill size="25px" /><SociaLinks>+94 71 5722 313 / +94 76 1405 188</SociaLinks>
            </span>
          </Social>
          <CsscSub></CsscSub>
        </CsscImg2>
      </CsscThings>
    </AboutcsscContainer>
   
  );
};

export default csscRuhsh;
