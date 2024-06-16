import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";
import SidebarContact from "../Components/Contact/sidebarContact";

const PostDetails = () => {
  const { serviceId } = useParams();
  const file_name = serviceId;
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdown/services/${file_name}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  const heroData = {
    bgImg: `/images/hero-bg21.png`,
    title: file_name,
    subTitle: `Home / Enjoy Health & Care biedt / ${serviceId}`,
  };
  return (
    <div className="st-content">
      <div className="marginTop">
        <MultiplePageHeading {...heroData} />
      </div>

      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8"
            style={{ backgroundColor: "#f4f4f4", padding: "30px" }}
          >
            <div className="st-post-details">
              <ReactMarkdown className="markdown-body">{post}</ReactMarkdown>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="st-height-b30 st-height-lg-b30" />
            <div className="st-widget st-sidebar-widget">
              <SidebarContact />
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </div>
  );
};

export default PostDetails;
