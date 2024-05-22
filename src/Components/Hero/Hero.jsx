import { Icon } from "@iconify/react";
import React from "react";
import Slider from "react-slick";
import parser from "html-react-parser";
import { Link } from "react-router-dom";

const Hero3 = ({ data }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-arrow-left slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="fa-solid:angle-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-arrow-right slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="fa-solid:angle-right" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <Slider {...settings} className="st-slider-style1  st-slider-animation1">
        {data.map((elements, index) => (
          <div className="st-hero st-style1 st-size1" key={index} id="home">
            <div
              className="st-hero-bg st-dynamic-bg st-bg"
              style={{ backgroundImage: `url(${elements.bgImg})` }}
            />
            <div className="container">
              <div className="st-hero-text">
                <h1 className="st-hero-title">{parser(elements.title)}</h1>
                <div className="st-hero-subtitle">
                  {parser(elements.subTitle)}
                </div>
                <div className="st-hero-btn-group">
                  <Link
                    to="/services"
                    className="st-btn st-style1 st-size-medium st-color1 st-smooth-move"
                  >
                    Wij bieden
                  </Link>

                  <Link
                    className="st-btn st-style1 st-size-medium st-color3 st-smooth-move"
                    to="/about"
                  >
                    Over ons
                  </Link>
                </div>
                <div className="st-height-b15 st-height-lg-b15" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div
          style={{textAlign:"center",  backgroundColor: "#f4f4f4" }}
          >
          <div 
          className="container"
          style={{}}
          >
            <div className="st-height-b40 st-height-lg-b20" />
              <p className="col-lg-12">
                Enjoy health & care is de entree tot een nieuwe fase waarin jongeren kunnen
                werken aan hun toekomst.<br /> De kerngedachte is dat jongeren Deur8
                in een verbeterde situatie verlaten na een maatgevoerd
                ontwikkeltraject.<br /> De kenmerken van het getal 8 staan symbool
                voor de eigenschappen van het ontwikkeltraject.
              </p>
            <div className="st-height-b25 st-height-lg-b25" />
          </div>
        </div>
    </>
  );
};

export default Hero3;
