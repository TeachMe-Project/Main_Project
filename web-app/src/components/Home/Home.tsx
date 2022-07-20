import React from 'react';
import NavBar from "../navBar/navBar";
import AboutUs from "./aboutUs/aboutUs";
import Pricing from "./pricing/pricing";
import ContactUs from "./contactUs/contactUs";
import FooterHome from "./footer/footerHome";
import Banner from "./banner/Banner";

const Home = () => {
    return (
        <>
            <NavBar/>
            <Banner/>
            <AboutUs/>
            <Pricing/>
            <ContactUs/>
            <FooterHome/>

        </>
    );
};

export default Home;