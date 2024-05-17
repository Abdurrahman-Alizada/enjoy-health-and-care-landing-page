import React, { useEffect, useState } from "react";
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const PostDetails = () => {
  const location = useLocation();
  const { title, subTitle, postLink } = location.state;

  const file_name = postLink;
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdown/News/${file_name}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  const heroData = {
    bgImg: `/images/hero-bg22.png`,
    title: title,
    subTitle: subTitle,
  };

  return (
    <div className="st-content">
      <div className="marginTop">
        <MultiplePageHeading {...heroData} />
      </div>

      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-lg-10">
            <div className="st-post-details st-style1">
              <ReactMarkdown className="markdown-body">{post}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </div>
  );
};

export default PostDetails;
