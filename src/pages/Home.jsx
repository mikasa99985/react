import React, { useEffect } from "react";
import { database, db } from "../../firebase.config";
import Slidercard from "../components/slidercard";
import Card from "../components/card";
import Nav from "../components/Nav";
import Bigcard from "../components/Bigcard";
import Features from "../components/Features";
import Statistic from "../components/Statistic";

const Home = () => {
  return (
    <>
      <Nav />
      <Slidercard />
      <Bigcard />
      <Features />
      <Statistic/>
    </>
  );
};

export default Home;