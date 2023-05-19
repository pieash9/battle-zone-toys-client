// import React from 'react';

import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ExcitingScenarios from "../ExcitingScenarios/ExcitingScenarios";


const Home = () => {
    return (
        <div className="md:space-y-28 mb-28">
           <Banner/>
           <Gallery/>
           <ShopByCategory/>
           <ExcitingScenarios/>
           <Services/>
        </div>
    );
};

export default Home;