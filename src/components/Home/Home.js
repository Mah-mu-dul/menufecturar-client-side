import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Card from "./Parts";

const Home = () => {
  return (
    <div className="text-black">
      <Banner />
      <div >
        <Card />
       
      </div>
      <BusinessSummary />
    </div>
  );
};

export default Home;
