import React from "react";
import Department from "../Components/Services/Department";
// import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";

const ServiceSlider = () => {
  // const heroData = {
  //   bgImg: `/images/hero-bg5.jpg`,
  //   title: `What we offer`,
  //   subTitle: `All detail of our services`
  // }
  
  return (
    <div className="marginTop">
      {/* <MultiplePageHeading {...heroData} /> */}
      <Department />
    </div>
  );
};

export default ServiceSlider;
