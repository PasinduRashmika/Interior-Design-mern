import Navbar from "../Components/Navbar/Navbar";
import SubNav from "../Components/SubNav/SubNab";
import Footer from "../Components/Footer/Footer";
import { AccountBox } from "../Components/Login/accountBox";
import CopyRight from "../Components/CopyRight/Copyright";
const Login = () => {
    return (
        <div className="container">
            <SubNav data-aos="fade-down"/>
            <Navbar data-aos="fade-down"/>
            <AccountBox />
            <Footer />
            <CopyRight />
        </div>
    );
}
 
export default Login;