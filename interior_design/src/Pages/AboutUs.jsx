import Navbar from "../Components/Navbar/Navbar";
import SubNav from "../Components/SubNav/SubNab";
import Footer from "../Components/Footer/Footer";
import Developer from '../Components/Developer/Developer'
import CopyRight from "../Components/CopyRight/Copyright";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    return (
        <div className="container"> 
            <SubNav data-aos="fade-down"/>
            <Navbar data-aos="fade-down"/>
            <Developer />
            <Footer />
            <CopyRight />
            
        </div>
    );
}
 
export default AboutUs;