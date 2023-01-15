import {
    GuaranteeContainer,GuaranteeOne,GuaranteeRowOne,GuaranteeRowTwo
} from "./GuaranteeElements"

import Aos from "aos";
import "aos/dist/aos.css"
const Guarantee = () => {
    return (
        <GuaranteeContainer>
            <GuaranteeOne >
                <GuaranteeRowOne data-aos="fade-down">On-time</GuaranteeRowOne>
                <GuaranteeRowTwo data-aos="fade-down">Delivery</GuaranteeRowTwo>
            </GuaranteeOne>
            <GuaranteeOne>
                <GuaranteeRowOne data-aos="fade-down">Best</GuaranteeRowOne>
                <GuaranteeRowTwo data-aos="fade-down">Price</GuaranteeRowTwo>
            </GuaranteeOne>
            <GuaranteeOne>
                <GuaranteeRowOne data-aos="fade-down">Superior</GuaranteeRowOne>
                <GuaranteeRowTwo data-aos="fade-down">Quality</GuaranteeRowTwo>
            </GuaranteeOne>
            <GuaranteeOne>
                <GuaranteeRowOne data-aos="fade-down">Safety</GuaranteeRowOne>
                <GuaranteeRowTwo data-aos="fade-down">Assured</GuaranteeRowTwo>
            </GuaranteeOne>

        </GuaranteeContainer>
    );
}
 
export default Guarantee;