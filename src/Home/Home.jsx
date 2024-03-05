import React from "react";
import Carousel from "./Carousel/Caraousel";
import Category from "./Category/Category";
import PopularPackage from "./PopularPackage/PopularPackage";
import Map from "./Map/Map";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <PopularPackage />
      <Map />
    </div>
  );
};

export default Home;
