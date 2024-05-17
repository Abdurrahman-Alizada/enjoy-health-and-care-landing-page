import React from 'react'
import Hero from '../Components/Hero/Hero';
import Department from '../Components/Services/Department';
import SpecialistsSlider from '../Components/Slider/SpecialistsSlider';
import Appointment from '../Components/Appointment/Appointment';
import TestimonialSlider from '../Components/Slider/TestimonialSlider';
import Spacing from '../Components/Spacing/Spacing';
import About6 from '../Components/About/About6';
import Iconbox from '../Components/Iconbox/Iconbox';


const heroData = [
  {
    title: "Safe your own health. <br /> Get best Service.",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Tempor incididunt ut labore et dolore magna.",
    bgImg: '/images/hero-bg21.png',
  },
  {
    title: "Safe your own health. <br /> Get best Service.",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Tempor incididunt ut labore et dolore magna.",
    bgImg: '/images/hero-bg22.png',
  },
  {
    title: "Safe your own health. <br /> Get best Service.",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Tempor incididunt ut labore et dolore magna.",
    bgImg: '/images/hero-bg.jpg',
  }
];

const iconboxData = [
  {
    bg: 'purple',
    icon: '/icons/icon1.svg',
    title: 'Qualified Staff',
    subTitle:
      'Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.',
  },
  {
    bg: 'green',
    icon: '/icons/icon2.svg',
    title: '24 Hours Service',
    subTitle:
      'Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.',
  },
  {
    bg: 'red',
    icon: '/icons/icon3.svg',
    title: 'Need Emergency',
    subTitle:
      'Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.',
  },
];

const aboutData = {
  title:
    'We are a health care institution providing patient treatment with specialized methods',
  subTitle:
    "Stap binnen in de wereld van holistisch welzijn met Enjoy Health & Care, waar individuen een transformerende reis naar vitaliteit en welzijn beginnen.<br /><br /> Onze missie is om iedere persoon te begeleiden naar een verbeterde staat van gezondheid, ervoor zorgend dat zij uit onze op maat gemaakte zorgprogramma's komen gerevitaliseerd en gesterkt.<br /> <br /> De kernwaarden van onze ethos worden gevat in de symboliek van het getal 8, wat de holistische principes vertegenwoordigt die verweven zijn in onze benadering van welzijn.",

  avater: {
    img: '/images/avatar1.png',
    name: 'David Ambrose',
    designation: 'Founder & Director',
  },
  timeTable: [
    {
      day: 'Monday',
      startTime: '8:00',
      endTime: '7:00',
    },
    {
      day: 'Tuesday',
      startTime: '9:00',
      endTime: '6:00',
    },
    {
      day: 'Wednesday',
      startTime: '9:00',
      endTime: '6:00',
    },
    {
      day: 'Thursday',
      startTime: '8:00',
      endTime: '7:00',
    },
    {
      day: 'Friday',
      startTime: '9:00',
      endTime: '5:00',
    },
    {
      day: 'Saturday',
      startTime: '8:00',
      endTime: '7:00',
    },
    {
      day: 'Sunday',
      startTime: '9:00',
      endTime: '3:00',
    },
  ],
  contact: '(+31) - 234 567 890',
};

const specialistData = [
  {
    img: '/images/member1.jpg',
    name: 'Dr. Philip Bailey',
    designation: 'Psychologist',
  },
  {
    img: '/images/member2.jpg',
    name: 'Dr. Vera Hasson',
    designation: 'Clinical Psychologist',
  },
  {
    img: '/images/member3.jpg',
    name: 'Dr. Matthew Hill',
    designation: 'Counseling Psychologist',
  },
  {
    img: '/images/member4.jpg',
    name: 'Dr. Jeanette Hoff',
    designation: 'Psychologist',
  },
  {
    img: '/images/member1.jpg',
    name: 'Dr. Philip Bailey',
    designation: 'Urology',
  },
  {
    img: '/images/member2.jpg',
    name: 'Dr. Vera Hasson',
    designation: 'Cardiology',
  },
  {
    img: '/images/member3.jpg',
    name: 'Dr. Matthew Hill',
    designation: 'Neurosurgery',
  },
  {
    img: '/images/member4.jpg',
    name: 'Dr. Jeanette Hoff',
    designation: 'Surgery',
  },
];

const testimonialData = [
  {
    img: '/images/avatar2.png',
    name: 'Ralph Jones',
    designation: 'Executive',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar3.png',
    name: 'Francis Jara',
    designation: 'Biographer',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar4.png',
    name: 'David Baer',
    designation: 'UX Designer',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar2.png',
    name: 'Ralph Jones',
    designation: 'Executive',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar3.png',
    name: 'Francis Jara',
    designation: 'Biographer',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
  {
    img: '/images/avatar4.png',
    name: 'David Baer',
    designation: 'UX Designer',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.",
  },
];

const Multipage = () => {
  return (
    <>
      <Hero data={heroData} />
      <About6 data={aboutData} />
      <Iconbox data={iconboxData} varient="st-type3" />
      <Spacing lg={120} md={80} />
      <hr />
      <Department />
      <hr />
      <SpecialistsSlider data={specialistData} />
      <Appointment />
      <TestimonialSlider data={testimonialData} />
    </>
  )
}

export default Multipage
