import React from "react";
import {MissionContainer,MissionLeft,MissonRight,MissionHead,MissionBody,MissionButtons} from './MissionElements'
import ButtonOne from '../ButtonOne/ButtonOne'
import ButtonTwo from '../ButtonTwo/ButtonTwo'
import img from '../../Images/img11.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

const Mission = () => {
    return ( 
        <MissionContainer id="mission">
            <MissionLeft src={img} data-aos="fade-right">
                {/* <missionImage >
                    <img  />
                </missionImage> */}
            </MissionLeft>

            <MissonRight>
                <MissionHead data-aos="fade-right">
                    <h1>Mission is design & develop the best interior</h1>
                </MissionHead>
                <MissionBody data-aos="fade-right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero quas quia nostrum? Quisquam voluptates minus omnis deleniti totam cum. Ipsam dolore libero eaque pariatur culpa incidunt ut magni officiis fugit, reiciendis doloribus error cum? Velit adipisci doloremque et quis accusantium sint facilis. Maxime, fugit architecto harum at iste assumenda.</p>
                </MissionBody>
                <MissionButtons>
                <ButtonOne title={"CONTACT US"} />
                <ButtonTwo title={"VIW PORTFOLIO"} />
                </MissionButtons>
            </MissonRight>
        </MissionContainer>
    );
}
 
export default Mission;