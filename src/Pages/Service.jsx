import React from "react";
// import Department from "../Components/Services/Department";
import WeOffers from "../Components/Services/WeOffers";
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";

const ServiceSlider = () => {
  const heroData = {
    bgImg: `/images/hero-bg2.jpg`,
    title: `Enjoy Health & Care biedt`,
    subTitle: `Home / Enjoy Health & Care biedt`
  }
  
  return (
    <div className="marginTop">
      <MultiplePageHeading {...heroData} />
      <WeOffers />
    </div>
  );
};

export default ServiceSlider;
