import CountUp from "react-countup";
import { useState, useEffect } from "react";
import {
  WhyContainer,
  WhySec,
  WhyBody,
  WhySubSec,
  WhyH2,
  WhyP,
  WhyCount,
  WhyHead
} from "./whyElements";
import Aos from "aos";
import "aos/dist/aos.css";


const Why = () => {
  const [ScrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 1180) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  },[]);


  useEffect(()=>{
    Aos.init({duration:500})
  },[]);

  return (
    <WhyContainer id="event" >
      <WhyBody>
        <WhyHead data-aos="zoom-in">Why <pre> GALAXY</pre></WhyHead>
        <WhySec>
          <WhySubSec>
            <WhyH2>
              {ScrollToTop && (
                <WhyCount>
                  <CountUp end={45} duration={1} data-aos="flip-right"/>
                </WhyCount>
              )}
            </WhyH2>
            <WhyP data-aos="zoom-in"><pre>Pay rent</pre></WhyP>
          </WhySubSec>
          <WhySubSec>
            <WhyH2>
              {ScrollToTop && (
                <WhyCount>
                  <CountUp end={8000} duration={1} data-aos="flip-right"/>{" "}
                </WhyCount>
              )}
            </WhyH2>
            <WhyP data-aos="zoom-in">Customers</WhyP>
          </WhySubSec>
          <WhySubSec>
            <WhyH2>
              {ScrollToTop && (
                <WhyCount>
                  <CountUp end={600} duration={1} data-aos="flip-right"/>
                </WhyCount>
              )}
            </WhyH2>
            <WhyP data-aos="zoom-in">Experts</WhyP>
          </WhySubSec>
          <WhySubSec>
            <WhyH2>
              {ScrollToTop && (
                <WhyCount>
                  <CountUp end={10} duration={1} data-aos="flip-right"/>
                </WhyCount>
              )}
            </WhyH2>
            <WhyP data-aos="zoom-in">Warranty</WhyP>
          </WhySubSec>
        </WhySec>
      </WhyBody>
      {/* <EventCounteFooter>
        <EventCounteFooterColOne>
            <EventCounteFooterColOneBody>
            <FooterSetOne><pre>Hurry Up! </pre></FooterSetOne>
          <FooterSetTwo><pre>Only </pre></FooterSetTwo>
          <FooterSetThree><pre>60 </pre></FooterSetThree>
          <FooterSetFour><pre>Seats Remaining Currently...</pre></FooterSetFour>
            </EventCounteFooterColOneBody>
          <FooterSetPara>
            
          </FooterSetPara>
        </EventCounteFooterColOne>
        <EventCounteFooterColTwo>
            <Button title ={"Register Now"} />
        </EventCounteFooterColTwo>
      </EventCounteFooter> */}
    </WhyContainer>
  );
};

export default Why;