import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Card from "./Parts";
import Review from "./Review";

const Home = () => {
  return (
    <div className="text-black">
      <Banner />
      <div >
        <Card />
       
      </div>
      <BusinessSummary />
      <Review />
      
    </div>
  );
};

export default Home;
