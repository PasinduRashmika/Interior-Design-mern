import React, { useEffect } from "react";
import {
  CustomerContainer,
  CustomerTitle,
  CustomerSecondRow,
  CustomerCards,
  CustomerQuote,
  Title,
  TitleHR
} from "./CustomerElements";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomerPromo from '../CustomerPromo/CustomerPromo';


const Customer = (props) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 8000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 8000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 8000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <CustomerContainer>
      <CustomerTitle>
      
        <Title data-aos="fade-right">Our Customers</Title>
        <TitleHR><hr  data-aos="flip-left"/></TitleHR>
      </CustomerTitle>
      <CustomerPromo />
      <CustomerSecondRow data-aos="zoom-in">
        <Slider {...settings}>
          {props.pro.map((item) => {
            return (
              <CustomerCards>
                <CustomerQuote>
                  <span>"</span>
                    <span>{item.des}</span>
                    <span>"</span>
                </CustomerQuote>
              </CustomerCards>
            );
          })}
        </Slider>
      </CustomerSecondRow>
    </CustomerContainer>
  );
};

export default Customer;