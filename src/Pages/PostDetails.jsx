import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const PostDetails = () => {
  const postImages = [
    { img: "/images/hero-bg3.jpg" },
    { img: "/images/hero-bg4.jpg" },
    { img: "/images/hero-bg5.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    loop: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="st-content">
      <div
        className="st-page-heading st-dynamic-bg"
        style={{ backgroundImage: `url('/images/hero-bg2.jpg')` }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h4>
              <Link to="/" className="st-back-to-home">
                <Icon icon="ph:arrow-left-bold" />
                Back To Home
              </Link>
            </h4>
            <h1 className="st-page-heading-title">
              This disease occurs when nerve cells <br />
              or neurons in a certain.
            </h1>
            <div className="st-post-label">
              <span>
                By <Link>Jhon Doe</Link>
              </span>
              <span>Jan 02, 2020</span>
            </div>
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="col-lg-8">
          <div className="st-post-details st-style1">
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps.
            </p>
            <img
              className="st-zoom-in"
              src="/images/hero-bg3.jpg"
              alt="blog1"
            />
            <h2>Collaboratively administrate empowered.</h2>
            <div className="st-post-info">
              <div className="st-post-text">
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail.
                </p>
                <h2>Blog video post can also added.</h2>
                {/* For Youtube */}
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="embeded video"
                    className="embed-responsive-item"
                    width={816}
                    height={459}
                    src="https://www.youtube.com/embed/vGOL7ZvuGMc"
                    allowFullScreen=""
                  ></iframe>
                </div>
                {/* For Vimeo */}

                <p>
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas. Dynamically innovate
                  resource-leveling customer service for state of the art
                  customer service.
                </p>
                <blockquote>
                  Integer accumsan arcu ligula, eget dictum augue egestas sed.
                  Curabitur bibendum, lorem ac dapibus pellentesque, justo
                  lectus bibendum enim.
                  <small>
                    by: <span>Mark Parker</span>
                  </small>
                </blockquote>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use passage of
                  Lorem Ipsum.
                </p>
                <h2>Phosfluorescently engage worldwide?</h2>
                <p>
                  Proactively envisioned multimedia based expertise and
                  cross-media growth strategies. Seamlessly visualize quality
                  intellectual capital without superior collaboration and
                  idea-sharing. Holistically pontificate installed base portals
                  after maintainable products.
                </p>
                <Slider {...settings} className="st-slider-style1">
                  {postImages.map((elements, index) => (
                    <img
                      key={index}
                      className="st-gallery-img st-style1 st-dynamic-bg st-bg"
                      src={elements.img}
                      alt={elements.img}
                    />
                  ))}
                </Slider>
              </div>
            </div>
            {/* .st-slider */}
            <div className="st-height-b20 st-height-lg-b20" />
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line.
            </p>
            <div className="st-height-b35 st-height-lg-b35" />
            <div className="st-post-meta">
              <div className="st-post-tages">
                <h4 className="st-post-tage-title">Tags:</h4>
                <ul className="st-post-tage-list st-mp0">
                  <li>
                    <Link to="">app</Link>
                  </li>
                  <li>
                    <Link to="">php</Link>
                  </li>
                  <li>
                    <Link to="">web</Link>
                  </li>
                  <li>
                    <Link to="">business</Link>
                  </li>
                  <li>
                    <Link to="">agency</Link>
                  </li>
                  <li>
                    <Link to="">development</Link>
                  </li>
                </ul>
              </div>
              <div className="st-post-share">
                <h4 className="st-post-share-title">Share:</h4>
                <div className="st-post-share-btn-list">
                  <Link to="">
                    <Icon icon="fa6-brands:facebook-f" />
                  </Link>
                  <Link to="">
                    <Icon icon="fa6-brands:twitter" />
                  </Link>
                  <Link to="">
                    <Icon icon="fa6-brands:behance" />
                  </Link>
                  <Link to="">
                    <Icon icon="fa6-brands:instagram" />
                  </Link>
                  <Link to="">
                    <Icon icon="fa6-brands:pinterest-p" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="st-height-b60 st-height-lg-b60" />
            <div className="st-post-btn-gropu">
              <Link to="" className="st-btn st-style2 st-color1 st-size-medium">
                Previous Post
              </Link>
              <Link to="" className="st-btn st-style2 st-color1 st-size-medium">
                Next Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
