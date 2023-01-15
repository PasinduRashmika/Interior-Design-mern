import React, { useEffect } from "react";
import {
  ProductContainer,
  ProductTitle,
  ProductSecondRow,
  ProductCards,
  ProductImg,
  ProducCardtTitle,
  Title,TitleHR,ProductDes
} from "./TrendingElements";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";

const product = (props) => {
  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 500,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        //   autoplay: true,
          speed: 4000,
          autoplaySpeed: 500,
          cssEase: "ease",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        //   autoplay: true,
          speed: 4000,
          autoplaySpeed: 500,
          cssEase: "ease",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        //   autoplay: true,
          speed: 4000,
          autoplaySpeed: 500,
          cssEase: "ease",
        },
      },
    ],
  };
  return (
    <ProductContainer>
      <ProductTitle>
        <Title data-aos="fade-right">Trending </Title>
        <TitleHR data-aos="flip-left"><hr /></TitleHR>
      </ProductTitle>
      <ProductSecondRow data-aos="flip-left">
        <Slider {...settings}>
          {props.pro.map((item) => {
            return (
              <ProductCards>
                <ProductImg>
                  <img src={item.link} />
                </ProductImg>
                <ProducCardtTitle>
                </ProducCardtTitle>
              </ProductCards>
            );
          })}
        </Slider>
      </ProductSecondRow>
    </ProductContainer>
  );
};

export default product;
