import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ img, title, subTitle, author, date, postLink, buttonText }) => {
  return (
    <div className="col-lg-6" style={{marginTop:"50px",padding:"10px"}}>
      <div className="st-post st-style3">
        <Link
          to={postLink}
          className="st-post-thumb st-link-hover-wrap st-zoom"
        >
          <img className="st-zoom-in" src={img} alt={img} />
          <span className="st-link-hover">
            <i>
              <Icon icon="fa6-solid:link" />
            </i>
          </span>
        </Link>
        <div className="st-post-info" style={{padding:"10px"}}>
          <h2 className="st-post-title">
            <Link to={postLink}>{title}</Link>
          </h2>
          <div className="st-post-text">{subTitle}</div>
        </div>
        <div className="st-post-footer">
          <Link
            to={postLink}
            state={{ postLink:postLink, title:title, subTitle:subTitle, author:author, date:date, }}
            className="st-btn st-style2 st-color1 st-size-medium"
          >
            {buttonText}
          </Link>
        </div>
      </div>
      <div className="st-height-b0 st-height-lg-b30" />
    </div>
  );
};

export default Post;
