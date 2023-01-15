import React, { useEffect } from "react";
import {
  ServiceContainer,
  ServiceBodyOne,
  ServiceCard,
  ServiceImg,
  ServiceInfo,
  ServiceTitle,
  ServiceDesc,
  ServiceHead,
  ServiceHeadTitle,
  ServiceHeadDes,ServiceCardOne,ServiceImgOne,
  ServiceInfoOne,ServiceTitleOne,ServiceDescOne
} from "./ServicElements";
import Button from "../ButtonOne/ButtonOne";
import Aos from "aos";
import "aos/dist/aos.css";

import img1 from '../../Images/dolar.png'
import img2 from '../../Images/earth.png'
import img3 from '../../Images/fork.png'
import img4 from '../../Images/home.png'
import img5 from '../../Images/wench.png'
const Service = () => {
  return (
    <ServiceContainer id="Service">
      <ServiceBodyOne >
              <ServiceCardOne data-aos="fade-down">
                <ServiceImgOne src={img1} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
                <ServiceInfoOne>
                  <ServiceTitleOne data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Our Services
                  </ServiceTitleOne>
                  <ServiceDescOne data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, deserunt unde! Aut assumenda soluta necessitatibus atque provident molestiae laborum</ServiceDescOne>
                    <Button title={"VIEW ALL"} />
                </ServiceInfoOne>
                </ServiceCardOne>
            
                <ServiceCard data-aos="fade-down">
                <ServiceImg src={img2} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
                <ServiceInfo>
                  <ServiceTitle data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Residential Design
                  </ServiceTitle>
                  <ServiceDesc data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, deserunt unde! Aut assumenda soluta necessitatibus atque provident molestiae laborum</ServiceDesc>
                </ServiceInfo>
              </ServiceCard>

              <ServiceCard data-aos="fade-down">
                <ServiceImg src={img3} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
                <ServiceInfo>
                  <ServiceTitle data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Restuarant Design
                  </ServiceTitle>
                  <ServiceDesc data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, deserunt unde! Aut assumenda soluta necessitatibus atque provident molestiae laborum</ServiceDesc>
                </ServiceInfo>
              </ServiceCard>
              
        </ServiceBodyOne>

        <ServiceBodyOne >
              <ServiceCard data-aos="fade-down">
                <ServiceImg src={img4} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
                <ServiceInfo>
                  <ServiceTitle data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Corporate Design
                  </ServiceTitle>
                  <ServiceDesc data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, deserunt unde! Aut assumenda soluta necessitatibus atque provident molestiae laborum</ServiceDesc>
                </ServiceInfo>
                </ServiceCard>

                <ServiceCard data-aos="fade-down">
                <ServiceImg src={img5} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
                <ServiceInfo>
                  <ServiceTitle data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Commercial Design
                  </ServiceTitle>
                  <ServiceDesc data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, deserunt unde! Aut assumenda soluta necessitatibus atque provident molestiae laborum</ServiceDesc>
                </ServiceInfo>
              </ServiceCard>

              <ServiceCard data-aos="fade-down">
                <ServiceImg src={img1} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
                <ServiceInfo>
                  <ServiceTitle data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Industrial Design
                  </ServiceTitle>
                  <ServiceDesc data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, deserunt unde! Aut assumenda soluta necessitatibus atque provident molestiae laborum</ServiceDesc>
                </ServiceInfo>
              </ServiceCard>
        </ServiceBodyOne>
    </ServiceContainer>
  );
};

export default Service;
