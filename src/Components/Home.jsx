import React from "react";
import Web from "../Images/web.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
       <Common
        name="Grow Your Career With "
        imgsrc={Web}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
