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
import '../utility/css/home.css';


const Home = () => {
  return (
    <>
      <Nav home={true} />
      <Slidercard />

      <div className="tab-bg pt-5 pb-1 mb-5">
        <Tab/>
      </div>

      <Bigcard />

      <div className="FS-bg pt-1 mt-5 pb-1 mb-5">
        <Features />
        <Statistic />
      </div>

      <Ourteam/>
      <Footer />
    </>
  );
};

export default Home;