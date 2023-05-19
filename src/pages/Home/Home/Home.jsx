// import React from 'react';

import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div className="md:space-y-28 mb-28">
           <Banner/>
           <Gallery/>
           <ShopByCategory/>
        </div>
    );
};

export default Home;