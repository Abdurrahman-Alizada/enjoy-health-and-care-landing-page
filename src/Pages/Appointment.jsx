import React from 'react'
import Appointment from '../Components/Appointment/Appointment'
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";

function AppointmentPage() {
  const heroData = {
    bgImg: `/images/hero-bg2.jpg`,
    title: `Appointment system`,
    subTitle: `Send us a message and we will contact you within hour`
  }
  
  return (
    <div className='marginTop'>
      <MultiplePageHeading {...heroData} />
        
        <Appointment />
      <div className="st-height-b100 st-height-lg-b80" />

    </div>
  )
}

export default AppointmentPage