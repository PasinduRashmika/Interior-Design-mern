import React from "react";
import {Link} from 'react-router-dom';
import ButtonOne from "../ButtonOne/ButtonOne";
import ButtonTwo from "../ButtonTwo/ButtonTwo";
import Aos from "aos";
import "aos/dist/aos.css";

function SliderContent({ activeIndex, sliderImage }) {


  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title" data-aos="fade-down">
            {slide.title}
          </h2>
          <h3 className="slide-text" data-aos="fade-down">
            {slide.description}
          </h3>
          <div className="buttonInside">
          <a href="/login"><ButtonOne title={"Login"}  href="/login"/></a>
          <ButtonTwo title={"EXPORE ME"} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
