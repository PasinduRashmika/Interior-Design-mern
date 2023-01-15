import {
    PromoSubContainer,PromoSubHead,PromoSubBody
  } from "./PromoSubElemets";
import Aos from "aos";
import "aos/dist/aos.css";

const PromoSub = () => {
    return (
        <PromoSubContainer id="promo">
            <PromoSubHead data-aos="fade-down">
                Ensuring a safe experience from design to installation
            </PromoSubHead>
            <PromoSubBody data-aos="fade-down">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At tempora molestiae animi molestias ipsum reiciendis, ipsa assumenda esse unde ab.</p>
            </PromoSubBody>
        </PromoSubContainer>
    );
}
 
export default PromoSub;