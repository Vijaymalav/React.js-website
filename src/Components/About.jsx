import React from "react";
import Web from "../Images/web.jpg";
import Common from './Common';

const About = () => {
  return (
    <>
    <Common
        name="Welcome to About Page"
        imgsrc={Web}
        visit="/contact"
        btnname="Contact Now"
      />
     
    </>
  );
};

export default About;
