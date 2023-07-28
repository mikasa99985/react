import React, { useEffect } from "react";
import { database, db } from "../../firebase.config";
import Slidercard from "../components/slidercard";
import Card from "../components/card";
import Nav from "../components/Nav";
import Bigcard from "../components/Bigcard";
import Features from "../components/Features";
import Statistic from "../components/Statistic";
import Footer from "../components/Footer";

const Home = () => {
  
  return (
    <>
       
      <Nav home={true} />
      <Slidercard />
      <Bigcard />
      <Features />
      <Statistic/>
      <Footer/>
    </>
  );
};

export default Home;