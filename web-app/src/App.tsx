import React from 'react';
import Pricing from "./components/pricing/pricing";
import Feature from "./components/aboutUs/feature";
import AboutUs from "./components/aboutUs/aboutUs";
import Footer from "./components/footer/footer";
import Home from "./components/home/Home";
import ContactUs from "./components/contactUs/contactUs";

const App: React.FC = () => {
    return (
        <div>
            <Home/>
            <AboutUs/>
            <Pricing/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default App;