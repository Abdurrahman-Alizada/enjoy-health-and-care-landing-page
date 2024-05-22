import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";
import { Link } from "react-router-dom";
import Social from "../Components/Social/Social";

const AboutPage = () => {
  const file_name = "about";
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdown/${file_name}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  const heroData = {
    bgImg: `/images/hero-bg21.png`,
    title: "Over Enjoy Health & Care",
    subTitle: `Home / Over Enjoy Health & Care`,
  };
  return (
    <div className="st-content">
      <div className="marginTop">
        <MultiplePageHeading {...heroData} />
      </div>

      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8" style={{ paddingRight: "50px" }}>
            <div className="st-post-details">
              <ReactMarkdown
                className="markdown-body"
              >
                {post}
              </ReactMarkdown>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="st-widget st-sidebar-widget">
              <Link
                to="/services/Crisis"
                className="st-btn st-style1 st-color1 st-smooth-move st-size-large w-100"
              >
                Crisisopvang jongeren: <br /> 085-4014489
              </Link>
              <div className="st-height-b40 st-height-lg-b30" />

              <h3 className="st-widget-title">Contact</h3>
              <h4 className="st-widget-text">
                Wil je meer informatie of vrijblijvend met ons in gesprek.
                Schroom dan niet om contact met ons op te nemen.
              </h4>
              <Social />
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </div>
  );
};

export default AboutPage;
