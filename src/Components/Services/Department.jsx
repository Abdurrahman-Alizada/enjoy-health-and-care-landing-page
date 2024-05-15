import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const Department = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <section id="department">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading
        title="Our services"
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum the industry's standard dummy text."
      />
      <div className="container">
        <div className="st-tabs st-fade-tabs st-style1">
          <ul className="st-tab-links st-style1 st-mp0">
            <li
              className={`st-tab-title ${isActive === 0 ? "active" : ""}`}
              onClick={() => setIsActive(0)}
            >
              <span className="st-blue-box">
                <svg
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M699.4 214.1H424.5c-29 0-52.8-23.8-52.8-52.8V151c0-29 23.8-52.8 52.8-52.8h274.9c29 0 52.8 23.8 52.8 52.8v10.3c0 29-23.8 52.8-52.8 52.8z"
                      fill="#FFB89A"
                    ></path>
                    <path d="M770.1 128c-16.6 0-30 13.4-30 30s13.4 30 30 30c25.8 0 50.2 10.2 68.7 28.6 18.4 18.4 28.6 42.8 28.6 68.7v446.3h-71.1c-51 0-92.8 41.7-92.8 92.8v75.8h-451c-25.8 0-50.2-10.2-68.7-28.6-18.4-18.4-28.6-42.8-28.6-68.7V285.2c0-25.8 10.2-50.2 28.6-68.7 18.4-18.4 42.8-28.6 68.7-28.6 16.6 0 30-13.4 30-30s-13.4-30-30-30c-86.7 0-157.2 70.5-157.2 157.2v517.6c0 86.7 70.5 157.2 157.2 157.2h517.6c86.7 0 157.2-70.5 157.2-157.2V285.2c0.1-86.7-70.5-157.2-157.2-157.2z m68.7 743.5c-18.4 18.4-42.8 28.6-68.7 28.6h-32.5l129.7-120.5v23.3c0.1 25.8-10.1 50.2-28.5 68.6z"></path>
                    <path d="M382.7 191.8H640c34.9 0 63.4-28.5 63.4-63.4S674.9 65 640 65H382.7c-34.9 0-63.4 28.5-63.4 63.4s28.6 63.4 63.4 63.4z m0-66.8H640c1.7 0 3.4 1.6 3.4 3.4 0 1.7-1.6 3.4-3.4 3.4H382.7c-1.7 0-3.4-1.6-3.4-3.4 0-1.7 1.7-3.4 3.4-3.4z"></path>
                    <path d="M724.1 499.2h-33c-16.6 0-30 13.4-30 30s13.4 30 30 30h33c16.6 0 30-13.4 30-30s-13.4-30-30-30zM595.4 499.2h-53.3v-51c0-16.6-13.4-30-30-30s-30 13.4-30 30v51H319.3c-16.6 0-30 13.4-30 30s13.4 30 30 30h162.8v181.2c0 16.6 13.4 30 30 30s30-13.4 30-30V559.2h53.3c16.6 0 30-13.4 30-30s-13.4-30-30-30zM512.1 384.3c16.6 0 30-13.4 30-30v-26.4c0-16.6-13.4-30-30-30s-30 13.4-30 30v26.4c0 16.6 13.4 30 30 30z"></path>
                  </g>
                </svg>

                <span>Diagnostics</span>
              </span>
            </li>
            <li
              className={`st-tab-title ${isActive === 1 ? "active" : ""}`}
              onClick={() => setIsActive(1)}
            >
              <span className="st-red-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2 22H22"
                      stroke="#e6492d"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M2.9502 22.0003L3.0002 9.97023C3.0002 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003"
                      stroke="#e6492d"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.4"
                      d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z"
                      stroke="#e6492d"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M10 16.25V17.75"
                      stroke="#e6492d"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.4"
                      d="M10.5 7.5H13.5"
                      stroke="#e6492d"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <span>Develop House</span>
              </span>
            </li>
            <li
              className={`st-tab-title ${isActive === 2 ? "active" : ""}`}
              onClick={() => setIsActive(2)}
            >
              <span className="st-green-box">
                <svg
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M973.3 98.4L99.6 972.1c-11.7 11.7-30.9 11.7-42.6 0l-4.3-4.3C41 956 41 936.9 52.7 925.2L926.4 51.5c11.7-11.7 30.9-11.7 42.6 0l4.3 4.3c11.7 11.8 11.7 30.9 0 42.6z"></path>
                    <path d="M78.3 996.1c-12.7 0-25.4-4.8-35.1-14.5-19.4-19.4-19.4-50.9 0-70.2L912.5 42c19.4-19.4 50.9-19.4 70.2 0 9.4 9.4 14.5 21.8 14.5 35.1s-5.2 25.8-14.5 35.1L113.5 981.6c-9.7 9.7-22.4 14.5-35.2 14.5zM947.7 60.5c-4.3 0-8.5 1.6-11.8 4.9L66.6 934.7c-6.5 6.5-6.5 17 0 23.5s17 6.5 23.5 0L959.4 88.9c3.1-3.1 4.8-7.3 4.8-11.8 0-4.5-1.7-8.6-4.8-11.8-3.2-3.2-7.5-4.8-11.7-4.8z"></path>
                    <path d="M408.6 901.7l-53.9 53.9c-8.7 8.7-22.7 8.7-31.3 0L69.2 701.4c-8.7-8.7-8.7-22.7 0-31.3l53.9-53.9c8.7-8.7 22.7-8.7 31.3 0l254.2 254.2c8.7 8.6 8.7 22.7 0 31.3z"></path>
                    <path d="M339 977.7c-10.5 0-21-4-28.9-12l-251-251c-7.7-7.7-12-18-12-28.9 0-10.9 4.3-21.2 12-28.9l50.7-50.7c16-16 41.9-16 57.9 0l251 251c16 16 16 41.9 0 57.9L368 965.7c-8 8-18.5 12-29 12zM138.8 627.2c-2 0-4 0.8-5.6 2.3l-50.7 50.7c-2 2-2.3 4.4-2.3 5.6 0 1.2 0.3 3.6 2.3 5.6l251 251c3.1 3.1 8.1 3.1 11.1 0l50.7-50.7c3.1-3.1 3.1-8.1 0-11.1l-251-251c-1.5-1.7-3.5-2.4-5.5-2.4z"></path>
                    <path d="M276.4 940l-34.1 34.1c-8.7 8.7-22.7 8.7-31.3 0L50.7 813.8c-8.7-8.7-8.7-22.7 0-31.3l34.1-34.1c8.7-8.7 22.7-8.7 31.3 0l160.3 160.3c8.7 8.6 8.7 22.6 0 31.3z"></path>
                    <path d="M226.7 996.2c-10.9 0-21.2-4.3-28.9-12L40.6 827.1c-16-16-16-41.9 0-57.9l30.9-30.9c16-16 41.9-16 57.9 0l157.1 157.1c7.7 7.7 12 18 12 28.9 0 10.9-4.3 21.2-12 28.9l-30.9 30.9c-7.7 7.8-18 12.1-28.9 12.1zM100.5 759.3c-2 0-4 0.8-5.6 2.3l-30.9 31c-3.1 3.1-3.1 8.1 0 11.1l157.1 157.1c3.1 3.1 8.1 3.1 11.1 0l30.9-30.9c2-2 2.3-4.4 2.3-5.6 0-1.2-0.3-3.6-2.3-5.6L106 761.6c-1.5-1.5-3.5-2.3-5.5-2.3z"></path>
                    <path d="M902.9 407.4l53.9-53.9c8.7-8.7 8.7-22.7 0-31.3L702.6 68c-8.7-8.7-22.7-8.7-31.3 0l-53.9 53.9c-8.7 8.7-8.7 22.7 0 31.3l254.2 254.2c8.6 8.6 22.7 8.6 31.3 0z"></path>
                    <path d="M887.2 429.5c-10.5 0-21-4-28.9-12l-251-251c-16-16-16-41.9 0-57.9L658 57.9c16-16 41.9-16 57.9 0l251 251c16 16 16 41.9 0 57.9l-50.7 50.7c-8 8-18.5 12-29 12zM687 79c-2 0-4 0.8-5.6 2.3L630.7 132c-3.1 3.1-3.1 8.1 0 11.1l251 251c3.1 3.1 8.1 3.1 11.1 0l50.7-50.7c3.1-3.1 3.1-8.1 0-11.1l-251-251C691 79.7 689 79 687 79z"></path>
                    <path d="M941.2 275.2l34.1-34.1c8.7-8.7 8.7-22.7 0-31.3L815 49.5c-8.7-8.7-22.7-8.7-31.3 0l-34.1 34.1c-8.7 8.7-8.7 22.7 0 31.3l160.3 160.3c8.6 8.7 22.6 8.7 31.3 0z"></path>
                    <path d="M925.5 297.3c-10.9 0-21.2-4.3-28.9-12L739.5 128.2c-16-16-16-41.9 0-57.9l30.9-30.9c16-16 41.9-16 57.9 0l157.1 157.1c7.7 7.7 12 18 12 28.9 0 10.9-4.3 21.2-12 28.9l-30.9 30.9c-7.8 7.8-18 12.1-29 12.1zM799.3 60.5c-2 0-4 0.8-5.6 2.3l-30.9 30.9c-3.1 3.1-3.1 8.1 0 11.1L920 262c3.1 3.1 8.1 3.1 11.1 0l30.9-31c3.1-3.1 3.1-8.1 0-11.1L804.9 62.8c-1.5-1.6-3.5-2.3-5.6-2.3z"></path>
                  </g>
                </svg>
                <span>Independence training</span>
              </span>
            </li>
            <li
              className={`st-tab-title ${isActive === 3 ? "active" : ""}`}
              onClick={() => setIsActive(3)}
            >
              <span className="st-dip-blue-box">
                <svg
                  fill="#1665d8"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 94.006 94.005"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M94.006,35.071c0,2.673-0.438,5.31-1.288,7.845c-3.993,18.067-38.521,39.923-39.99,40.853 c-0.459,0.285-0.974,0.434-1.499,0.434c-0.524,0-1.046-0.132-1.505-0.434c-0.395-0.257-10.123-6.396-19.986-14.834 c-1.181-1.018-1.305-2.774-0.314-3.95c1.015-1.166,2.769-1.308,3.952-0.317c7.352,6.281,14.782,11.359,17.867,13.405 c10.37-6.761,33.263-23.962,36.069-36.648c0.733-2.241,1.064-4.279,1.064-6.348c0-7.202-3.921-13.841-10.235-17.319 c-8.063-4.474-18.856-2.411-24.755,4.7c-1.06,1.284-3.24,1.284-4.32,0c-5.917-7.116-16.702-9.163-24.754-4.708 c-6.334,3.486-10.255,10.121-10.255,17.316c0,2.055,0.348,4.102,0.996,6.079c0.416,1.85,1.212,3.659,2.225,5.536h16.356 l5.617-12.909c0.481-1.105,1.63-1.8,2.812-1.676c1.204,0.105,2.208,0.971,2.476,2.147l4.135,17.482l5.349-8.771 c0.504-0.833,1.411-1.342,2.391-1.342h10.151c1.545,0,2.801,1.251,2.801,2.803c0,1.544-1.256,2.802-2.801,2.802h-8.578 l-8.058,13.236c-0.514,0.844-1.42,1.348-2.383,1.348c-0.153,0-0.301-0.012-0.438-0.033c-1.129-0.181-2.018-1.013-2.289-2.118 L41.04,43.726l-2.986,6.873c-0.446,1.033-1.457,1.685-2.572,1.685H2.802C1.268,52.283,0,51.029,0,49.482 c0-1.544,1.268-2.802,2.802-2.802h8.217c-0.583-1.391-1.054-2.741-1.346-4.047c-0.782-2.268-1.205-4.909-1.205-7.568 c0-9.242,5.026-17.751,13.147-22.225c9.406-5.203,21.853-3.567,29.626,3.737c7.752-7.305,20.19-8.94,29.612-3.737 C88.964,17.308,94.006,25.823,94.006,35.071z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span>Crisis</span>
              </span>
            </li>
            <li
              className={`st-tab-title ${isActive === 4 ? "active" : ""}`}
              onClick={() => setIsActive(4)}
            >
              <span className="st-orange-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#F6AB2F"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 11.1667C15 11.1667 14.6941 11.1667 14.625 11.1667C13.6006 11.1667 12.7077 10.7525 12 10.0001C11.2923 10.7525 10.3995 11.1667 9.37504 11.1667C9.30596 11.1667 9.00004 11.1667 9.00004 11.1667C9.00004 11.1667 9 11.9445 9 12.398C9 14.6121 10.2748 16.4726 12 17.0001C13.7252 16.4726 15 14.6121 15 12.398C15 11.9445 15 11.1667 15 11.1667Z"
                      stroke="#F6AB2F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M3 12.1302V14.6001C3 16.8403 3 17.9604 3.43597 18.816C3.81947 19.5687 4.43139 20.1806 5.18404 20.5641C6.03969 21.0001 7.15979 21.0001 9.4 21.0001H14.6C16.8402 21.0001 17.9603 21.0001 18.816 20.5641C19.5686 20.1806 20.1805 19.5687 20.564 18.816C21 17.9604 21 16.8403 21 14.6001V12.1302C21 10.9815 21 10.4071 20.8519 9.87819C20.7208 9.40966 20.5053 8.96898 20.2159 8.5778C19.8893 8.1362 19.436 7.78358 18.5292 7.07834L15.9292 5.05612C14.5239 3.96311 13.8213 3.4166 13.0454 3.20653C12.3608 3.02116 11.6392 3.02116 10.9546 3.20653C10.1787 3.4166 9.47608 3.96311 8.07078 5.05612L5.47078 7.07834C4.56404 7.78358 4.11067 8.1362 3.78405 8.5778C3.49473 8.96898 3.2792 9.40966 3.14805 9.87819C3 10.4071 3 10.9815 3 12.1302Z"
                      stroke="#F6AB2F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <span>Independent house</span>
              </span>
            </li>
            <li
              className={`st-tab-title ${isActive === 5 ? "active" : ""}`}
              onClick={() => setIsActive(5)}
            >
              <span className="st-gray-box">
                <svg
                  fill="#9EA0A5"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 113.938 113.938"
                  stroke="#9EA0A5"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M111.138,2.337H2.802C1.256,2.337,0,3.598,0,5.139V108.8c0,1.544,1.256,2.802,2.802,2.802h39.223h29.888h39.226 c1.541,0,2.801-1.258,2.801-2.802V5.139C113.938,3.598,112.679,2.337,111.138,2.337z M108.336,105.998H74.714v-52.3 c0-1.542-1.257-2.803-2.802-2.803H42.024c-1.545,0-2.802,1.261-2.802,2.803v52.3H5.604V7.94h102.732V105.998z M43.43,30.813 c0-1.541,1.256-2.802,2.802-2.802h7.935v-7.935c0-1.541,1.256-2.802,2.803-2.802c1.544,0,2.802,1.261,2.802,2.802v7.935h7.933 c1.537,0,2.802,1.261,2.802,2.802s-1.265,2.801-2.802,2.801h-7.933v7.935c0,1.54-1.258,2.801-2.802,2.801 c-1.547,0-2.803-1.262-2.803-2.801v-7.935h-7.935C44.687,33.615,43.43,32.354,43.43,30.813z M89.183,100.745h-9.109v-9.114h9.109 V100.745z M103.54,100.745h-9.114v-9.114h9.114V100.745z M89.183,86.737h-9.109V77.62h9.109V86.737z M103.54,86.737h-9.114V77.62 h9.114V86.737z M89.183,70.279h-9.109v-9.118h9.109V70.279z M103.54,70.279h-9.114v-9.118h9.114V70.279z M89.183,56.269h-9.109 v-9.116h9.109V56.269z M103.54,56.269h-9.114v-9.116h9.114V56.269z M89.183,38.758h-9.109v-9.116h9.109V38.758z M103.54,38.758 h-9.114v-9.116h9.114V38.758z M89.183,24.75h-9.109v-9.111h9.109V24.75z M103.54,24.75h-9.114v-9.111h9.114V24.75z M20.542,100.745 H11.43v-9.114h9.112V100.745z M34.902,100.745h-9.11v-9.114h9.11V100.745z M20.542,86.737H11.43V77.62h9.112V86.737z M34.902,86.737h-9.11V77.62h9.11V86.737z M20.542,70.279H11.43v-9.118h9.112V70.279z M34.902,70.279h-9.11v-9.118h9.11V70.279z M20.542,56.269H11.43v-9.116h9.112V56.269z M34.902,56.269h-9.11v-9.116h9.11V56.269z M20.542,38.758H11.43v-9.116h9.112V38.758z M34.902,38.758h-9.11v-9.116h9.11V38.758z M20.542,24.75H11.43v-9.111h9.112V24.75z M34.902,24.75h-9.11v-9.111h9.11V24.75z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span>Independence HousePlus</span>
              </span>
            </li>
          </ul>
          <div className="st-height-b25 st-height-lg-b25" />
          <div className="tab-content">
            
            <div className={`st-tab ${isActive === 0 ? "active" : ""}`}>
              <div className="st-imagebox st-style2">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="st-imagebox-img">
                      <img src="/images/crutches.png" alt="service" />
                    </div>
                    <div className="st-height-b0 st-height-lg-b30" />
                  </div>
                  <div className="col-lg-6">
                    <div className="st-vertical-middle">
                      <div className="st-vertical-middle-in">
                        <div className="st-imagebox-info">
                          <h2 className="st-imagebox-title">
                            Welcome to <span>Diagnostics</span>
                          </h2>
                          <h4 className="st-imagebox-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni nemo libero debitis vitae sapiente quos.{" "}
                          </h4>
                          <div className="st-imagebox-text">
                            Oillum abrem deleniti adipisci suscipit dignissimos.
                            remaining essentially unchanged. It was popularised
                            in the with the . Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                        </div>
                        <div className="st-imagebox-btn">
                          <Link
                            to="/services/Diagnostics"
                            className="st-btn st-style1 st-size-medium st-color1"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`st-tab ${isActive === 1 ? "active" : ""}`}>
              <div className="st-imagebox st-style2">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="st-imagebox-img">
                      <img src="/images/xray.png" alt="service" />
                    </div>
                    <div className="st-height-b0 st-height-lg-b30" />
                  </div>
                  <div className="col-lg-6">
                    <div className="st-vertical-middle">
                      <div className="st-vertical-middle-in">
                        <div className="st-imagebox-info">
                          <h2 className="st-imagebox-title">
                            Welcome to <span>Develop House</span>
                          </h2>
                          <h4 className="st-imagebox-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni nemo libero debitis vitae sapiente quos.{" "}
                          </h4>
                          <div className="st-imagebox-text">
                            Oillum abrem deleniti adipisci suscipit dignissimos.
                            remaining essentially unchanged. It was popularised
                            in the with the . Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                        </div>
                        <div className="st-imagebox-btn">
                          <Link
                            to="/services/Develop House"
                            className="st-btn st-style1 st-size-medium st-color1"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`st-tab ${isActive === 2 ? "active" : ""}`}>
              <div className="st-imagebox st-style2">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="st-imagebox-img">
                      <img src="/images/pulmonary.png" alt="service" />
                    </div>
                    <div className="st-height-b0 st-height-lg-b30" />
                  </div>
                  <div className="col-lg-6">
                    <div className="st-vertical-middle">
                      <div className="st-vertical-middle-in">
                        <div className="st-imagebox-info">
                          <h2 className="st-imagebox-title">
                            Welcome to <span>Independence training</span>
                          </h2>
                          <h4 className="st-imagebox-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni nemo libero debitis vitae sapiente quos.{" "}
                          </h4>
                          <div className="st-imagebox-text">
                            Oillum abrem deleniti adipisci suscipit dignissimos.
                            remaining essentially unchanged. It was popularised
                            in the with the . Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                        </div>
                        <div className="st-imagebox-btn">
                          <Link
                            to="/services/Independence training"
                            className="st-btn st-style1 st-size-medium st-color1"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`st-tab ${isActive === 3 ? "active" : ""}`}>
              <div className="st-imagebox st-style2">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="st-imagebox-img">
                      <img src="/images/cardiology.png" alt="service" />
                    </div>
                    <div className="st-height-b0 st-height-lg-b30" />
                  </div>
                  <div className="col-lg-6">
                    <div className="st-vertical-middle">
                      <div className="st-vertical-middle-in">
                        <div className="st-imagebox-info">
                          <h2 className="st-imagebox-title">
                            Welcome to <span>Crisis</span>
                          </h2>
                          <h4 className="st-imagebox-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni nemo libero debitis vitae sapiente quos.{" "}
                          </h4>
                          <div className="st-imagebox-text">
                            Oillum abrem deleniti adipisci suscipit dignissimos.
                            remaining essentially unchanged. It was popularised
                            in the with the . Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                        </div>
                        <div className="st-imagebox-btn">
                          <Link
                            to={`/services/Crisis`}
                            className="st-btn st-style1 st-size-medium st-color1"

                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`st-tab ${isActive === 4 ? "active" : ""}`}>
              <div className="st-imagebox st-style2">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="st-imagebox-img">
                      <img src="/images/dental-care.png" alt="service" />
                    </div>
                    <div className="st-height-b0 st-height-lg-b30" />
                  </div>
                  <div className="col-lg-6">
                    <div className="st-vertical-middle">
                      <div className="st-vertical-middle-in">
                        <div className="st-imagebox-info">
                          <h2 className="st-imagebox-title">
                            Welcome to <span>Independent house</span>
                          </h2>
                          <h4 className="st-imagebox-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni nemo libero debitis vitae sapiente quos.{" "}
                          </h4>
                          <div className="st-imagebox-text">
                            Oillum abrem deleniti adipisci suscipit dignissimos.
                            remaining essentially unchanged. It was popularised
                            in the with the . Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                        </div>
                        <div className="st-imagebox-btn">
                          <Link
                            to="/services/Independent house"
                            className="st-btn st-style1 st-size-medium st-color1"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`st-tab ${isActive === 5 ? "active" : ""}`}>
              <div className="st-imagebox st-style2">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="st-imagebox-img">
                      <img src="/images/neurology.png" alt="service" />
                    </div>
                    <div className="st-height-b0 st-height-lg-b30" />
                  </div>
                  <div className="col-lg-6">
                    <div className="st-vertical-middle">
                      <div className="st-vertical-middle-in">
                        <div className="st-imagebox-info">
                          <h2 className="st-imagebox-title">
                            Welcome to <span>Independence HousePlus</span>
                          </h2>
                          <h4 className="st-imagebox-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni nemo libero debitis vitae sapiente quos.{" "}
                          </h4>
                          <div className="st-imagebox-text">
                            Oillum abrem deleniti adipisci suscipit dignissimos.
                            remaining essentially unchanged. It was popularised
                            in the with the . Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                        </div>
                        <div className="st-imagebox-btn">
                          <Link
                            to="/services/Independence HousePlus"
                            className="st-btn st-style1 st-size-medium st-color1"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default Department;
