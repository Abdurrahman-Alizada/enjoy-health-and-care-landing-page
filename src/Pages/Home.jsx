import React from "react";
import Hero from "../Components/Hero/Hero";
// import Department from "../Components/Services/Department";
// import Department from "../Components/Services/WeOffers";
// import SpecialistsSlider from "../Components/Slider/SpecialistsSlider";
// import Appointment from "../Components/Appointment/Appointment";
import TestimonialSlider from "../Components/Slider/TestimonialSlider";
// import Spacing from "../Components/Spacing/Spacing";
// import About6 from "../Components/About/About6";
import Iconbox from "../Components/Iconbox/Iconbox";

const heroData = [
  {
    title: "7 keer vallen, <br /> 8 keer opstaan!",
    subTitle:
      "Enjoy Health & Care biedt programma's voor welzijn en herstel,<br /> afgestemd op jouw behoeften.",
    bgImg: "/images/hero-bg21.png",
  },
  // {
  //   title: "Safe your own health. <br /> Get best Service.",
  //   subTitle:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Tempor incididunt ut labore et dolore magna.",
  //   bgImg: "/images/hero-bg22.png",
  // },
  // {
  //   title: "Safe your own health. <br /> Get best Service.",
  //   subTitle:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Tempor incididunt ut labore et dolore magna.",
  //   bgImg: "/images/hero-bg.jpg",
  // },
];

const iconboxData = [
  {
    bg: "purple",
    icon: "/icons/icon1.svg",
    title: "Symmetrie – Balans en evenwicht",
    subTitle:
      "Bij Enjoy health & care stapt iedere jongere op een afzonderlijk moment binnen met een unieke en persoonlijke behoefte. Niemand is hetzelfde en dat maakt niet uit. Het einddoel (stabiliteit) is voor iedereen gelijk.",
  },
  {
    bg: "green",
    icon: "/icons/icon2.svg",
    title: "Oneindigheid – Continuïteit",
    subTitle:
      "Enjoy health & care is de toegang tot een eigen ‘thuis’ . Wij bieden jongeren een beschermde omgeving waarin ze zichzelf kunnen ontwikkelen  door naar ze te luisteren, hun vragen serieus te nemen en ondersteuning af te stemmen op hun mogelijkheden. Bij Enjoy Health & Care vliegt niemand uit de bocht, hoe scherp de bochten in het leven ook zijn. Het leven is vallen en opstaan, al val je zo vaak wij helpen je hierbij weer op te staan. Het motto hierbij is 7 keer vallen, 8 keer opstaan.",
  },
  {
    bg: "red",
    icon: "/icons/icon3.svg",
    title: "Samenhang – Focus",
    subTitle:
      "Alles wat je aandacht geeft groeit. Het ontwikkeldoel is bij iedere jongere anders en vormt de kern van alle inzet. Enjoy health & care biedt maatwerk voor elke jongere. Het maakt niet uit hoe en waar je begint, linksom of rechtsom zal de focus liggen op het bereiken van het einddoel. ",
  },
];

// const aboutData = {
//   title: "Bevorder Gezondheid en Welzijn voor Iedereen",
//   subTitle:
//     "Enjoy Health & Care biedt uitgebreide programma's voor gezondheid en welzijn. Onze diensten zijn ontworpen om je fysieke en mentale gezondheid te verbeteren. <br /><br /> Met op maat gemaakte plannen streven we ernaar dat je onze zorg in een betere conditie verlaat. We bieden ondersteuning die aansluit op jouw unieke behoeften. <br /><br/>   Onze kernwaarden weerspiegelen een holistische benadering van zorg, waarbij gezondheid en welzijn centraal staan in alles wat we doen.",
//   avater: {
//     img: "/images/avatar1.png",
//     name: "David Ambrose",
//     designation: "Founder & Director",
//   },
//   timeTable: [
//     {
//       day: "Monday",
//       startTime: "8:00",
//       endTime: "7:00",
//     },
//     {
//       day: "Tuesday",
//       startTime: "9:00",
//       endTime: "6:00",
//     },
//     {
//       day: "Wednesday",
//       startTime: "9:00",
//       endTime: "6:00",
//     },
//     {
//       day: "Thursday",
//       startTime: "8:00",
//       endTime: "7:00",
//     },
//     {
//       day: "Friday",
//       startTime: "9:00",
//       endTime: "5:00",
//     },
//     {
//       day: "Saturday",
//       startTime: "8:00",
//       endTime: "7:00",
//     },
//     {
//       day: "Sunday",
//       startTime: "9:00",
//       endTime: "3:00",
//     },
//   ],
//   contact: "(+31) - 234 567 890",
// };

// const specialistData = [
//   {
//     img: "/images/member1.jpg",
//     name: "Dr. Philip Bailey",
//     designation: "Psychologist",
//   },
//   {
//     img: "/images/member2.jpg",
//     name: "Dr. Vera Hasson",
//     designation: "Clinical Psychologist",
//   },
//   {
//     img: "/images/member3.jpg",
//     name: "Dr. Matthew Hill",
//     designation: "Counseling Psychologist",
//   },
//   {
//     img: "/images/member4.jpg",
//     name: "Dr. Jeanette Hoff",
//     designation: "Psychologist",
//   },
//   {
//     img: "/images/member1.jpg",
//     name: "Dr. Philip Bailey",
//     designation: "Urology",
//   },
//   {
//     img: "/images/member2.jpg",
//     name: "Dr. Vera Hasson",
//     designation: "Cardiology",
//   },
//   {
//     img: "/images/member3.jpg",
//     name: "Dr. Matthew Hill",
//     designation: "Neurosurgery",
//   },
//   {
//     img: "/images/member4.jpg",
//     name: "Dr. Jeanette Hoff",
//     designation: "Surgery",
//   },
// ];

const testimonialData = [
  {
    img: "/images/avatar2.png",
    name: "Ralph Jones",
    designation: "Executive",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: "/images/avatar3.png",
    name: "Francis Jara",
    designation: "Biographer",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: "/images/avatar4.png",
    name: "David Baer",
    designation: "UX Designer",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: "/images/avatar2.png",
    name: "Ralph Jones",
    designation: "Executive",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: "/images/avatar3.png",
    name: "Francis Jara",
    designation: "Biographer",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: "/images/avatar4.png",
    name: "David Baer",
    designation: "UX Designer",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
];

const Multipage = () => {
  return (
    <>
      <Hero data={heroData} />
      {/* <About6 data={aboutData} /> */}
      <Iconbox data={iconboxData} varient="st-type3" />
      {/* <Spacing lg={120} md={80} /> */}
      {/* <hr /> */}
      {/* <Department /> */}
      {/* <hr /> */}
      {/* <SpecialistsSlider data={specialistData} /> */}
      {/* <Appointment /> */}
      <TestimonialSlider data={testimonialData} />
    </>
  );
};

export default Multipage;
