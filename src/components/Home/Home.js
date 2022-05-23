import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Card from "./Parts";

const Home = () => {
  return (
    <div className="text-black">
      <Banner />
      <div className="grid grid-cols-1 mt-7  lg:grid-cols-3  md:grid-cols-2  gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <BusinessSummary />
    </div>
  );
};

export default Home;
