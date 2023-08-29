import React, { useEffect } from "react";
import { database, db, auth } from "../../firebase.config";
import Slidercard from "../components/slidercard";
import Nav from "../components/Nav";
import Bigcard from "../components/Bigcard";
import Features from "../components/Features";
import Statistic from "../components/Statistic";
import Footer from "../components/Footer";
import Tab from "../components/Tab/Tab";
import Ourteam from "../components/Ourteam";


const Home = () => {
  return (
    <>
      <Nav home={true} />
      <Slidercard />
      <Tab/>
      <Bigcard />
      <Features />
      <Statistic />
      <Ourteam/>
      <Footer />
    </>
  );
};

export default Home;