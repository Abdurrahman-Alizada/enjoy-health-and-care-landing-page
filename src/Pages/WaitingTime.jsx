import React from "react";
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";
import { Link } from "react-router-dom";
import Social from "../Components/Social/Social";

const WaitingTime = () => {
  const heroData = {
    bgImg: `/images/hero-bg21.png`,
    title: "Geen Wachttijden voor Jeugdzorg bij Enjoy health & care",
    subTitle: `Home / wachttijden`,
  };

  const timeTable = [
    {
      product: "Diagnostiek/ Ambulant",
      time: "0",
    },
    {
      product: "Behandelgroep (Leef- en ontwikkelhuis",
      time: "0",
    },
    {
      product: "Zelfstandigheidshuis in Zaandam	",
      time: "0",
    },
    {
      product: "Zelfstandigheidshuis Plus	",
      time: "0",
    },
    {
      product: "Crisisopvang",
      time: "0",
    },
  ];

  return (
    <div className="st-content">
      <div className="marginTop">
        <MultiplePageHeading {...heroData} />
      </div>

      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8" style={{ padding: "30px" }}>
            <div className="st-post-details">
              <p>
                De druk op de jeugdzorg is de afgelopen jaren enorm toegenomen.
                Veel instellingen kennen helaas lange wachttijden, waardoor de
                noodzakelijke zorg wordt vertraagd. Bij Enjoy Health & Care is dit echter
                niet het geval. Wij hebben momenteel geen wachttijden en je kunt
                direct bij ons terecht voor de zorg die je nodig hebt.
              </p>
              <p style={{ marginTop: "30px", marginBottom: "10px" }}>
                Hieronder staan de wachttijden per zorgvorm.
              </p>

              <div
                className="col-lg-12 wow fadeInRight"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <div className="st-shedule">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4 className="">Product</h4>
                    <h4 className="">Gemiddelde wachttijd in weken</h4>
                  </div>
                  <ul className="st-shedule-list">
                    {timeTable.map((element, index) => (
                      <li key={index}>
                        <div className="st-shedule-left">{element.product}</div>
                        <div className="st-shedule-right">{element.time}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="st-height-b30 st-height-lg-b30" />
            <div className="st-widget st-sidebar-widget">
              <Link
                to="/services/Crisis"
                className="st-btn st-style1 st-color1 st-smooth-move st-size-large w-100"
              >
                Crisisopvang jongvolwassenen : <br /> 085-4014489
              </Link>
              <div className="st-height-b40 st-height-lg-b30" />

              <h3 className="st-widget-title">Contact</h3>
              <h3 className="st-widget-text">
                Wil je meer informatie of vrijblijvend met ons in gesprek.
                Schroom dan niet om contact met ons op te nemen.
              </h3>
              <Social />
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </div>
  );
};

export default WaitingTime;
