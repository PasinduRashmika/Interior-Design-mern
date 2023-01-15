import Navbar from "../Components/Navbar/Navbar";
import SubNav from "../Components/SubNav/SubNab";
import Footer from "../Components/Footer/Footer";
import ContactUs from "../Components/ContactUs/ContactUs";
import CopyRight from "../Components/CopyRight/Copyright";

const ContactUs = () => {
    return (
        <div className="container">
            <SubNav/>
            <Navbar />
            <ContactUs />
            <Footer />
            <CopyRight />
        </div>
    );
}
 
export default ContactUs;