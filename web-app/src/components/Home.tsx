import React from 'react';
import NavBar from "./navBar/navBar";
import AboutUs from "./aboutUs/aboutUs";
import Pricing from "./pricing/pricing";
import ContactUs from "./contactUs/contactUs";
import Footer from "./footer/footer";
import Banner from "./banner/Banner";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <AboutUs/>
            <Pricing/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;