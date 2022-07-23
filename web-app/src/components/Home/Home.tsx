import React from 'react';
import NavBar from "../navBar/navBar";
import AboutUs from "./aboutUs/aboutUs";
import Pricing from "./pricing/pricing";
import ContactUs from "./contactUs/contactUs";
import FooterHome from "./footer/footerHome";
import Banner from "./banner/Banner";
import {Row} from "react-bootstrap";

const Home = () => {
    return (
        <>
            <NavBar/>
            <Row className='p-0 m-0'>
                <Banner/>
                <AboutUs/>
                <Pricing/>
                <ContactUs/>
                <FooterHome/>
            </Row>

        </>
    );
};

export default Home;