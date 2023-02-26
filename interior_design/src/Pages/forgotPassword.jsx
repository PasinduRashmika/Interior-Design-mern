import Navbar from "../Components/Navbar/Navbar";
import SubNav from "../Components/SubNav/SubNab";
import ForgotPaswword from '../Components/ForgotPasssword/ForgotPasswordForm';
import CopyRight from "../Components/CopyRight/Copyright";
import Footer from "../Components/Footer/Footer";

const ForgotPassword = () => {
    return (
        <div className="container" style={{backgroundColor:"#160a09"}}>
            <SubNav />
            <Navbar />
            <ForgotPaswword />
            <Footer />
            <CopyRight />
        </div>
     );
}
 
export default ForgotPassword;