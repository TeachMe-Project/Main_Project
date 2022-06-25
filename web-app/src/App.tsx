import React from 'react';
// import Pricing from "./components/pricing/pricing";
// import AboutUs from "./components/aboutUs/aboutUs";
// import Footer from "./components/footer/footer";
// import Home from "./components/home/Home";
// import ContactUs from "./components/contactUs/contactUs";
import NavBar from "./components/navBar/navBar";
import Institute from './components/institute/institute';

const App: React.FC = () => {
    return (
        <div>
            <NavBar/>
            <Institute/>
            {/* <Home/>
            <AboutUs/>
            <Pricing/>
            <ContactUs/>
            <Footer/> */}
        </div>
    );
};

export default App;