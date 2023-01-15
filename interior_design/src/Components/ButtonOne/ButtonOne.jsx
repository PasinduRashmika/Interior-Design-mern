import React  from "react";
import {Container} from './ButtonOneElements';
import Aos from "aos";
import "aos/dist/aos.css";
const Button = ({title}) => {
    return (
        <Container data-aos="fade-down">
            <button>{title}</button>
        </Container>
    );
}
 
export default Button;