import React from "react";
import PostWrapper from '../Post/PostWrapper'
import postPageData from '../../utils/data/servicesPageData.json';

const Department = () => {
  
  return (
    <section id="department">
      <div className="st-height-b120 st-height-lg-b80" />
     
      <PostWrapper data={postPageData} />
    </section>
  );
};

export default Department;
