import React from 'react';
import NavBar from "../navBar/navBar";
import AboutUs from "./aboutUs/aboutUs";
import Pricing from "./pricing/pricing";
import ContactUs from "./contactUs/contactUs";
import FooterHome from "./footer/footerHome";
import Banner from "./banner/Banner";
import {Row} from "react-bootstrap";
import DownloadApp from "./download/DownloadApp";
import {useAuth0} from "@auth0/auth0-react";
// @ts-ignore
import swal from "@sweetalert/with-react";

const Home = () => {
    const {error} = useAuth0();
    console.log(error);
    if (error) {
        swal({
            title: "Error",
            text: `You are not authorized for selected action`,
            icon: "error",
            buttons: {
                cancel: true,
                confirm: true
            },
        })
    };


    return (
        <>
            <NavBar/>
            <Row className='p-0 m-0'>
                <Banner/>
                <AboutUs/>
                <Pricing/>
                <DownloadApp/>
                <ContactUs/>
                <FooterHome/>
            </Row>

        </>
    );
};

export default Home;