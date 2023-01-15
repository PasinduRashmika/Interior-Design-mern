import Navbar from "../Components/Navbar/Navbar";
import SubNav from "../Components/SubNav/SubNab";
import Hero from "../Components/Hero/Slider";
import Counter from '../Components/WhyGalaxy/Why';
import Mission from '../Components/Mission/Mission';
import CopyRight from "../Components/CopyRight/Copyright";
import Guarantee from "../Components/Guarantee/Guarantee";
import Service from "../Components/Servic/Servic";
import PromoHead from '../Components/PromoHead/PromoHead'
import PromoSub from "../Components/PromoSub/PromoSub";
import Promo from '../Components/Promo/Promo';
import Footer from "../Components/Footer/Footer";
import Trending from '../Components/Trending/Trending'
import TrendingData from '../Components/Trending/data'
import Customer from "../Components/HappyCustomer/Customer";
import QuoteData from '../Components/HappyCustomer/data'
import Gallery from "../Components/Gallery/WSPGallery";

const Home = () => {
    return (
        <div className="container">
            <SubNav data-aos="fade-down"/>
            <Navbar data-aos="fade-down"/>
            <Hero />
            <Mission />
            <Guarantee />
            <Counter />
            <Trending pro={TrendingData}/>
            <Service  />
            <Gallery />
            <PromoHead />
            <PromoSub />
            <Promo />
            <Customer pro={QuoteData} />
            <Footer />
            <CopyRight />
            
        </div>
    );
}
 
export default Home;