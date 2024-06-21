import React from "react";
// import LocationInMap from "../Components/Map/LocationInMap";
import Contact4 from "../Components/Contact/Contact4";
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";

const heroData = {
  bgImg: `/images/hero-bg5.jpg`,
  title: `Blijf met ons in contact`,
  subTitle: `Home / Contact`,
};

// const mapLocationURL =
//   "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193175.30893635444!2d-74.373409!3d40.841927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy%20Meadows%20Wetlands!5e0!3m2!1sen!2sbd!4v1701067943819!5m2!1sen!2sbd";

const ContactPage = () => {
  return (
    <div className="marginTop">
      <MultiplePageHeading {...heroData} />
      <div className="st-height-b60 st-height-lg-b80" />

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="st-widget st-sidebar-widget">
              <h5>Telefoon</h5>
              <p style={{ color: "#EB9F5C" }}>0681672853</p>

              <h5 style={{ marginTop: "30px" }}>Adres</h5>
              <p style={{ color: "#EB9F5C" }}>
                 Acaciastraat 5 1505TG <br/> Zaandam
              </p>
              <h5 style={{ marginTop: "30px" }}>Vertrouwenspersoon</h5>
              <p style={{ color: "#EB9F5C" }}></p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="st-funfact st-style1 st-visable-element">
                  <div className="st-funfact-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ marginRight: "10px" }}
                      fill="#EB9F5C"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </div>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aissam-allaoui-6438512a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" style={{ marginTop: "5px" }}>
                  https://www.linkedin.com/in/aissam-allaoui-6438512a8
                  </a>
                </div>
                <div className="st-height-b30 st-height-lg-b30" />
              </div>
              {/* .col */}
              <div className="col-lg-6">
                <div className="st-funfact st-style1 st-visable-element">
                  <div className="st-funfact-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#EB9F5C"
                      style={{ marginRight: "10px" }}
                    >
                      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                    </svg>
                    Email
                  </div>
                  <p style={{ marginTop: "5px" }}>
                  info@enjoyhealthandcare.nl
                  </p>
                </div>
                <div className="st-height-b30 st-height-lg-b30" />
              </div>
              <div className="col-lg-6">
                <div className="st-funfact st-style1 st-visable-element">
                  <div className="st-funfact-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ marginRight: "10px" }}
                      fill="#EB9F5C"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-8v-9h2v7h6v2z" />
                    </svg>
                    Openingstijden kantoor
                  </div>
                  <p style={{ marginTop: "10px" }}>
                    Maandag – Vrijdag: 09.00 – 17.00
                  </p>
                </div>
                <div className="st-height-b30 st-height-lg-b30" />
              </div>
              <div className="col-lg-6">
                <div className="st-funfact st-style1 st-visable-element">
                  <div className="st-funfact-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ marginRight: "10px" }}
                      fill="#EB9F5C"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-8v-9h2v7h6v2z" />
                    </svg>
                    Crisisopvang
                  </div>
                  <p style={{ marginTop: "10px" }}>24 uur per dag bereikbaar</p>
                </div>
                <div className="st-height-b30 st-height-lg-b30" />
              </div>
              <h3>Klachten</h3>
              <p>
                Bent u ergens ontevreden over, of heeft u een klacht over onze
                zorg? We gaan graag met u in gesprek en op zoek naar een
                oplossing.
                <br />
                <br />
                Wilt of kunt u de klacht niet bespreekbaar maken met ons, of
                wenst u onafhankelijke ondersteuning hierbij, dan kunt contact
                opnemen met Klachtenportaal Zorg. Klachtenportaal Zorg is een
                externe organisatie waar we zijn aangesloten om onvrede en
                klachten over onze zorg te helpen oplossen.
                <br />
                <br />
                Heeft u uw klacht of onvrede opgestuurd, dan beoordeelt
                Klachtenportaal Zorg of deze voldoet aan de voorwaarden deze in
                behandeling te nemen en welke procedure erbij past.
                <br />
                <br />
                Als er informatie ontbreekt of onduidelijk is, nemen zij contact
                met u op om het volledig te maken en ervoor te zorgen dat de
                klachtenprocedure goed opgestart wordt.
                <br />
                <br />
                Wilt u advies over hoe u om kunt gaan met een situatie waar u
                ontevreden over bent? Ook dan kunt u contact opnemen met
                Klachtenportaal Zorg. U start dan nog geen procedure op.
                <br />
                <br />
                Geef uw klacht door met het klachtenformulier op de website van
                Klachtenportaal Zorg. U kunt ook een e-mail sturen
                aan info@klachtenportaalzorg.nl. Weet u niet welke
                klachtenprocedure voor u geldt? Ook daar kan Klachtenportaal
                Zorg u mee helpen.
                <br />
                <br />
                Het doel blijft het oplossen van onvrede en klachten.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contact4 />
      {/* <LocationInMap data={mapLocationURL} /> */}
    </div>
  );
};

export default ContactPage;
