import React from "react";
import Carousel from "./Carousel/Caraousel";
import Category from "./Category/Category";
import PopularPackage from "./PopularPackage/PopularPackage";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <PopularPackage />
    </div>
  );
};

export default Home;
