import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";

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
    // subTitle: `All detail of our services`
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
