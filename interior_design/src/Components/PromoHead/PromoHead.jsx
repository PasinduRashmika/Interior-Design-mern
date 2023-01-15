import React from "react";
import {useRef, useState,useEffect} from "react";
import {
  PromoHeadContainer,
  PromoHeadColOne,
  PromoHeadColTwo,
  PromoHeadColThree,
  PromoHeadSenOne,
  PromoHeadSenTwo,
  PromoHeadSenThree,
  PromoHeadSenFour,
} from "./PromoHeadelements";
import Aos from "aos";
import "aos/dist/aos.css";

const PromoHead = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <PromoHeadContainer >
      <PromoHeadColOne >
        <hr data-aos="fade-up"/>
      </PromoHeadColOne>
      <PromoHeadColTwo data-aos="zoom-in">
      PROMO VIDEO
        {/* <PromoHeadSenOne><>Don't Miss this &nbsp;  </></PromoHeadSenOne>
        <PromoHeadSenTwo> <>Amazing conference &nbsp;  </></PromoHeadSenTwo>
        <PromoHeadSenThree> <>and &nbsp; </></PromoHeadSenThree>
        <PromoHeadSenFour> <>Opportunitiess! </></PromoHeadSenFour> */}
      </PromoHeadColTwo>
      <PromoHeadColThree >
      <hr data-aos="fade-up"/>
      </PromoHeadColThree>
    </PromoHeadContainer>
    //new comment
  );
};

export default PromoHead;