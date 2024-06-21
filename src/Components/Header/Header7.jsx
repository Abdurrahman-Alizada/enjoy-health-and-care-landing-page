import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header7 = ({ data }) => {

  const [mobileToggle, setMobileToggle] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.scrollY || document.documentElement.scrollTop;

      if (windowTop >= headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setLastScrollTop(windowTop);
    };

    const headerHeight =
      document.querySelector(".st-sticky-header").offsetHeight + 120;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky, lastScrollTop]);

  return (
    <header
      className={`st-site-header st-style1 st-type1 st-sticky-header ${
        isSticky ? "st-sticky-active" : ""
      }`}
    >
      <div className="st-top-header">
        <div className="container">
          <div className="st-top-header-in">
            <Link className="st-site-branding" to="/">
              <img src="/images/logo1.svg" alt={"logo"} />
            </Link>
            <ul className="st-top-header-list">
              <li>
                <svg
                  enableBackground="new 0 0 479.058 479.058"
                  viewBox="0 0 479.058 479.058"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
                <a href="mailto:info@enjoyhealthandcare.nl">info@enjoyhealthandcare.nl</a>
              </li>
              <li>
                <svg
                  enableBackground="new 0 0 512.021 512.021"
                  viewBox="0 0 512.021 512.021"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m367.988 512.021c-16.528 0-32.916-2.922-48.941-8.744-70.598-25.646-136.128-67.416-189.508-120.795s-95.15-118.91-120.795-189.508c-8.241-22.688-10.673-46.108-7.226-69.612 3.229-22.016 11.757-43.389 24.663-61.809 12.963-18.501 30.245-33.889 49.977-44.5 21.042-11.315 44.009-17.053 68.265-17.053 7.544 0 14.064 5.271 15.645 12.647l25.114 117.199c1.137 5.307-.494 10.829-4.331 14.667l-42.913 42.912c40.482 80.486 106.17 146.174 186.656 186.656l42.912-42.913c3.837-3.837 9.36-5.466 14.667-4.331l117.199 25.114c7.377 1.581 12.647 8.101 12.647 15.645 0 24.256-5.738 47.224-17.054 68.266-10.611 19.732-25.999 37.014-44.5 49.977-18.419 12.906-39.792 21.434-61.809 24.663-6.899 1.013-13.797 1.518-20.668 1.519zm-236.349-479.321c-31.995 3.532-60.393 20.302-79.251 47.217-21.206 30.265-26.151 67.49-13.567 102.132 49.304 135.726 155.425 241.847 291.151 291.151 34.641 12.584 71.867 7.64 102.132-13.567 26.915-18.858 43.685-47.256 47.217-79.251l-95.341-20.43-44.816 44.816c-4.769 4.769-12.015 6.036-18.117 3.168-95.19-44.72-172.242-121.772-216.962-216.962-2.867-6.103-1.601-13.349 3.168-18.117l44.816-44.816z" />
                    <path d="m496.02 272c-8.836 0-16-7.164-16-16 0-123.514-100.486-224-224-224-8.836 0-16-7.164-16-16s7.164-16 16-16c68.381 0 132.668 26.628 181.02 74.98s74.98 112.639 74.98 181.02c0 8.836-7.163 16-16 16z" />
                    <path d="m432.02 272c-8.836 0-16-7.164-16-16 0-88.224-71.776-160-160-160-8.836 0-16-7.164-16-16s7.164-16 16-16c105.869 0 192 86.131 192 192 0 8.836-7.163 16-16 16z" />
                    <path d="m368.02 272c-8.836 0-16-7.164-16-16 0-52.935-43.065-96-96-96-8.836 0-16-7.164-16-16s7.164-16 16-16c70.58 0 128 57.42 128 128 0 8.836-7.163 16-16 16z" />
                  </g>
                </svg>
                <Link to="">0681672853</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <div className="st-nav">
                <ul
                  className={`st-nav-list st-onepage-nav ${
                    mobileToggle ? "d-block" : "none"
                  }`}
                >
                  <li>
                    <Link to="home" onClick={() => setMobileToggle(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="22"
                        fill="#666"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 3l9 8h-3v9h-5v-6H9v6H4v-9H1l9-8z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="services" onClick={() => setMobileToggle(false)}>
                      Wij bieden {/* What we offer */}
                    </Link>
                  </li>
                  <li>
                    <Link to="forWhom" onClick={() => setMobileToggle(false)}>
                      Voor wie {/* For whom */}
                    </Link>
                  </li>
                  <li>
                    <Link to="method" onClick={() => setMobileToggle(false)}>
                      Werkwijze {/* Method */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="waiting-time"
                      onClick={() => setMobileToggle(false)}
                    >
                      Wachttijden {/* Waithing time */}
                    </Link>
                  </li>
                  <li>
                    <Link to="work-at" onClick={() => setMobileToggle(false)}>
                      Werken bij {/* Work at */}
                    </Link>
                  </li>

                  <li>
                    <Link to="about" onClick={() => setMobileToggle(false)}>
                      Over ons {/* About */}
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" onClick={() => setMobileToggle(false)}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="/Aanmeldformulierinclbijlagegezinnen-15.pdf" onClick={() => setMobileToggle(false)}>
                    Aanmeldformulier
                    </a>
                  </li>
                  {/* <li>
                    <Link to="gallery" onClick={() => setMobileToggle(false)} >Gallery</Link>
                  </li> */}
                  {/* <li>
                    <Link to="pricing" onClick={() => setMobileToggle(false)} >Pricing</Link>
                  </li> */}
                  {/* <li className="menu-item-has-children">
                    <Link to="post" onClick={() => setMobileToggle(false)}>
                      News
                    </Link>
                    <ul>
                      <li>
                        <Link to="post/post_details">Single Details</Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>

                <div
                  className="st-munu-toggle"
                  // className={`st-munu-toggle ${
                  //   mobileToggle ? "st-toggle-active" : ""
                  // } `}
                  // onClick={handleMobileToggle}
                >
                  {/* <span></span> */}
                  <Link className="st-site-branding1" to="/">
                    <img src="/images/logo1.svg" alt={"logo"} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="st-main-header-right">
              <div
                className={`st-munu-toggle ${
                  mobileToggle ? "st-toggle-active" : ""
                } `}
                onClick={handleMobileToggle}
              >
                <span></span>
              </div>

              <Link
                to="/services/Crisis"
                className="st-btn st-style1 st-color4 st-smooth-move st-size-medium w-100"
              >
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1C8.68629 1 6 3.68629 6 7V10H5C3.34315 10 2 11.3431 2 13V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V13C22 11.3431 20.6569 10 19 10H18V7C18 3.68629 15.3137 1 12 1ZM8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10H8V7ZM4 13C4 12.4477 4.44772 12 5 12H19C19.5523 12 20 12.4477 20 13V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V13ZM12 15C11.4477 15 11 15.4477 11 16V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V16C13 15.4477 12.5523 15 12 15Z"
                    fill="white"
                  />
                </svg>
                Crisisopvang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header7;
