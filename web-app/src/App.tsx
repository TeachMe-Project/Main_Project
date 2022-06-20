import React from 'react';
import Pricing from "./components/pricing/pricing";
import Feature from "./components/aboutUs/feature";
import AboutUs from "./components/aboutUs/aboutUs";

const App: React.FC = () => {
    return (
        <div>
            <AboutUs/>
            <Pricing/>
        </div>
    );
};

export default App;