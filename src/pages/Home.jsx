import React, { useEffect } from "react";
import { database, db } from "../../firebase.config";
import Slidercard from "../components/slidercard";
import Card from "../components/card";
import Nav from "../components/Nav";
import Bigcard from "../components/Bigcard";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <Nav />
      <Slidercard />
      <Bigcard />
      {/* <Features /> */}
    </>
  );
};

export default Home;