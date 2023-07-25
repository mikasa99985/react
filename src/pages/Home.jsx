import React, { useEffect } from "react";
import { database, db } from "../../firebase.config";
import Slidercard from "../components/slidercard";
import Card from "../components/card";
import Nav from "../components/Nav";
import Bigcard from "../components/Bigcard";
import Features from "../components/Features";
import belowbar from "../components/belowbar";
const Home = () => {
  return (
    <>
      <Belowbar/>    
      <Nav />
      <Slidercard />
      <Bigcard />
      <Features />
    </>
  );
};

export default Home;