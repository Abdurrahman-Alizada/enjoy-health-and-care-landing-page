import React, { useEffect, useRef, useState } from "react";
import MultiplePageHeading from "../Components/Hero/MultiplePageHeading";
import { Icon } from "@iconify/react";
import ReactMarkdown from "react-markdown";

const WorkAt = () => {
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(false);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  const heroData = {
    bgImg: `/images/hero-bg21.png`,
    title: "Werken bij Enjoy health & Care",
    subTitle: `Home / Werken bij Enjoy health & Care`,
  };

  const faqData1 = [
    {
      title: "GZ-Psycholoog - Orthopedagoog",
      content: `Wij zijn op zoek naar een:
- GZ-Psycholoog – Orthopedagoog Generalist
      `,
    },
    {
      title: "Jeugdzorgwerker C/ D",
      content: `##### Wie zijn wij?
Enjoy health & care is een jeugdhulpaanbieder met diverse kleinschalige woonvormen, waarbij we een verscheidenheid aan zorgbehoefte bedienen. Enjoy Health & Care is de entree tot een nieuwe fase waarin jongvolwassenen  kunnen werken aan hun toekomst. De begeleiding en behandeling is gericht op persoonlijke ontwikkeling en gezamenlijkheid. Het enthousiaste team van Enjoy Health & Care bestaat uit jeugdzorgwerkers, orthopedagogen en een GZ- Psycholoog. We zijn een klein en hecht team, samen onderstrepen wij onze aanpak.
##### Waar ga je werken?
Het Leef en Ontwikkelhuis in Beneden-Leeuwen is een plek met twee huiselijke woongroepen waar maximaal zes jongvolwassenen  per groep wonen. Het is een veilige woonomgeving voor jongvolwassenen  tussen 12 en 23 jaar met complexe problematiek, zoals persoonlijkheids-, hechtings-, angst- en autisme-gerelateerde problematiek. Dit doen wij binnen de kleinschaligheid midden in een woonwijk. Het ZelfstandigheidshuisPlus staat in Zaandam. Hier wonen maximaal 7 jongvolwassenen  voor de stap naar volledige zelfstandigheid nog te groot is. Als jeugdzorgwerker ga je werken in een enthousiast team bestaande uit jeugdzorgwerkers, orthopedagogen en een GZ- Psycholoog.

##### Wie ben jij?
Je bent integer, je hebt humor en je staat stevig in je schoenen. Je hebt een pedagogische HBO opleiding of MBO4 afgerond. Je hebt passie voor jeugd en jongvolwassenen  en weet als geen ander wat nodig is om hen maximale kansen te bieden voor hun toekomst. Je houdt ervan om praktisch aan de slag te gaan, maar weet daarbij het grotere doel voor ogen te houden. Je hebt kennis van het gezin en het mogelijk disfunctioneren hierbinnen en inzicht in het hulpaanbod en de hulpverleningsmethodieken. Je bent betrokken, toont je nieuwsgierig en niet-veroordelend naar jongere en ouder(s)/ verzorgers. Je weet een positieve werkrelatie met hen op te bouwen. Je werkt onregelmatig en draait slaapdiensten.

##### Wat ga je doen?

- Observeer en analyseer je de problematiek van jeugdigen. En verzamel je actief benodigde informatie bij alle betrokkenen en voert gesprekken met hen.
- Stel en realiseer je samen met betrokkenen en de behandelcoördinator een multidisciplinair plan van aanpak waarin concrete (behandel)doelen en passende individuele- en groepsmethoden zijn geformuleerd.
- Zet je passende (specialistische/therapeutische) interventies en complexe individuele en/ of groepsbegeleiding in, zodanig dat op basis daarvan de opvoeding en begeleiding optimaal tot zijn recht kunnen komen en een veilige opgroeisituatie voor jeugdigen is gerealiseerd.
- Bespreek en registreer je de voortgang en resultaten met de jeugdigen en overige betrokkenen. Je bewaakt de voortgang, adviseert gevraagd en ongevraagd en stelt bij waar nodig. Je stelt rapportages op met bevindingen van de resultaten en wijze van hulpverlening richting belanghebbenden.
- Biedt praktische opvoedingsondersteuning aan betrokkenen uit de leefomgeving van het kind/ de jongere en coacht de kind/ de jongere om zijn eigen hulpbronnen te kunnen aanboren met het oog op vervolg hulp.

##### Wat heb je te bieden?

- Minimaal 2 jaar ervaring in een soortgelijke functie.
- Integer, flexibel en humor.
- MBO 4 of HBO werk- en denkniveau.

##### Wij bieden:

Een baan binnen een kleinschalige organisatie met alle ruimte om je te ontwikkelen.
Salaris conform CAO Jeugdzorg (schaal 7 of 8), vakantietoeslag van 8% en een vaste eindejaarsuitkering van · 8,3%
Ruimte om bij te dragen aan de ontwikkeling van een jonge organisaties.
Voldoende scholingsmogelijkheden.
Word jij onze nieuwe collega? Stuur je cv naar [werkenbij@Enjoy Health & Care.nl]()
`,
    },
    {
      title: "Jeugdzorgwerker+",
      content: `
#### Wie zijn wij?
Enjoy health & care is een jeugdhulpaanbieder met diverse kleinschalige woonvormen, waarbij we een verscheidenheid aan zorgbehoefte bedienen. Enjoy Health & Care is de entree tot een nieuwe fase waarin jongvolwassenen  kunnen werken aan hun toekomst. De begeleiding en behandeling is gericht op persoonlijke ontwikkeling en gezamenlijkheid. Het enthousiaste team van Enjoy Health & Care bestaat uit jeugdzorgwerkers, orthopedagogen en een GZ- Psycholoog. We zijn een klein en hecht team, samen onderstrepen wij onze aanpak.
      
Voor ons nieuwe behandelgroep zijn we op zoek naar Jeugdzorgwerkers die gedreven zijn om het aanbod van Enjoy Health & Care naar een hoger niveau te tillen en wil bijdragen aan het transformeren van jeugdhulp.
      
##### Waar ga je werken?
De locatie Vijg&Olijf is een kleinschalige woon- en ontwikkelhuis in Zaandam die midden in de woonwijk wordt ontwikkeld. Je opereert binnen de kleinschaligheid waar maximaal vier jongvolwassenen  wonen in één woongroep.
      
Het gaat om jongvolwassenen  tussen 12 en 23 jaar met complexe problematiek (zoals persoonlijkheids-, hechtings-, angst- en autisme-gerelateerde problematiek) die om een intensieve benadering vragen. Als jeugdzorgwerker+ ga je werken in een nieuw team bestaande uit jeugdzorgwerkers, behandelcoördinator en een regiebehandelaar.
      
Als team ga je uitvoering geven aan behandel- en begeleidingsvraagstukken die spelen binnen Vijg&Olijf. Diagnostiek, Zelfstandigheidstraining en systeemgerichte interventies kunnen ook onderdeel uitmaken van de trajecten.
      
##### Je gaat:
- Adviseren, in samenspraak met relevante betrokkenen, over de best passende individuele en/ of groepsmethoden en je stelt plannen van aanpak op (op basis van het zorgplan) waarin concreet en systeemgericht (multidisciplinaire) behandeldoelen en acties zijn geformuleerd.
      
- Uitvoering geven aan het plan van aanpak en regie voeren over de opgenomen doelstellingen met betrekking tot jouw mentorkind en zijn/haar netwerk. Je ondersteunt de kinderen/jongvolwassenen  en hun netwerk door inzet van passende (specialistische) interventies en methoden en je bewaakt de voortgang, evalueert de hulpverlening en stelt plan van aanpak na overleg met de verantwoordelijke behandelaar bij waar nodig.
      
- De orthopedagogische situatie op de leefgroep borgen door het observeren van de groep, het onderkennen, interveniëren en begeleiden van het groepsdynamische proces en het opvoeden, begeleiden, stimuleren en activeren van individuele jongvolwassenen . Je verzorgt in- en externe voorlichting en kennisoverdracht op het eigen expertisegebied en onderhoudt een voor de uitvoering van de functie relevant in- en extern netwerk.
      
##### Wat heb je te bieden?
HBO werk- en denkniveau
SKJ Registratie.
Minimaal 2 jaar ervaring in een soortgelijke functie.
Integer, flexibel en humor.
      

##### Wij bieden:
- Boven marktconform salaris conform CAO Jeugdzorg (schaal 9), vakantietoeslag van 8% en een vaste
- eindejaarsuitkering van 8,3%.
- Een baan binnen een kleinschalige organisatie met alle ruimte om je te ontwikkelen (scholingsmogelijkheden).
- Ruimte om bij te dragen aan de ontwikkeling van een nieuwe woongroep en mee te pionieren.
- Voldoende scholingsmogelijkheden.
      
**Salaris**: €3.042,00 – €4.544,00 per maand
      
Verwacht aantal uur: Niet minder dan 28 per week
      `,
    },
  ];

  return (
    <div className="st-content">
      <div className="marginTop">
        <MultiplePageHeading {...heroData} />
      </div>

      <div className="st-height-b80 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8" style={{ padding: "30px" }}>
            <div className="st-post-details">
              <p>
                Ben je gepassioneerd over het maken van een positieve impact op
                het leven van jongvolwassenen ? Overweeg dan een carrière bij Enjoy
                health & care, waar we toegewijd zijn aan het bieden van
                directe, effectieve zorg zonder wachttijden.
              </p>
              <h3 style={{ marginBottom: "10px" }}>
                Waarom Werken bij Enjoy health care & care?
              </h3>
              <p>
                Bij Enjoy Health & Care zijn we een dynamisch en divers team van
                professionals die zich inzetten voor het welzijn van jongvolwassenen .
                We bieden een prettige werkomgeving en uitstekende professionele
                ontwikkelingsmogelijkheden.
              </p>
              <ul>
                <li>Directe impact maken op het leven van jongvolwassenen </li>
                <li>Geen wachttijden voor cliënten</li>
                <li>Diverse en inclusieve werkcultuur</li>
                <li>Uitgebreide training en ontwikkelingsprogramma’s</li>
              </ul>
              <h3 style={{ marginBottom: "10px" }}>Openstaande Vacatures</h3>
              <p style={{ marginBottom: "20px" }}>
                Ontdek de huidige openstaande vacature bij Enjoy Health & Care en neem de
                volgende stap in je carrière:
              </p>

              <div className="st-accordian-wrap st-visable-element">
                {faqData1.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={index === openItemIndex}
                    onClick={() => handleItemClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="st-height-b30 st-height-lg-b30" />
            <div className="st-widget st-sidebar-widget">
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </div>
  );
};

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const accordionContentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    if (accordionContentRef.current) {
      setContentHeight(accordionContentRef.current.offsetHeight);
    }
  }, [isOpen]);

  const accordionClass = isOpen ? "st-accordian active" : "st-accordian";

  return (
    <div className={accordionClass}>
      <div className="st-accordian-title" onClick={onClick}>
        {title}
        <Icon className="st-accordian-toggle" icon="fa6-solid:angle-down" />
      </div>
      <div
        className="st-accordian-body-wrap"
        style={{ height: isOpen ? `${contentHeight}px` : "0" }}
      >
        <div className="st-accordian-body" ref={accordionContentRef}>
          <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    msg: "",
  });

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "22d223df-a96d-469d-ab15-3341bd58511b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        msg: "",
      });
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-12 ">
      <h3 style={{textAlign:"center"}}>Contact</h3>
      <p style={{marginBottom:"35px",textAlign:"center"}}>Vrijblijvende afspraak maken? Vul onderstaande gegevens in en we nemen zo snel mogelijk contact met je op.</p>
      <div id="st-alert" />
      <form
        onSubmit={onSubmit}
        className="row st-contact-form st-type1"
        method="post"
        id="contact-form"
      >
        <input type="hidden" name="from_name" value="Enjoy Health & Care" />
        <input type="hidden" name="replyto" value="custom@gmail.com" />
        <div className="col-lg-6">
          <div className="st-form-field st-style1">
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jhon Doe"
              required
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>
        </div>
        {/* .col */}
        <div className="col-lg-6">
          <div className="st-form-field st-style1">
            <label>Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
        </div>
        {/* .col */}
        <div className="col-lg-6">
          <div className="st-form-field st-style1">
            <label>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Write subject"
              required
              onChange={handleInputChange}
              value={formData.subject}
            />
          </div>
        </div>
        {/* .col */}
        <div className="col-lg-6">
          <div className="st-form-field st-style1">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+00 376 12 465"
              required
              onChange={handleInputChange}
              value={formData.phone}
            />
          </div>
        </div>
        {/* .col */}
        <div className="col-lg-12">
          <div className="st-form-field st-style1">
            <label>Your Message</label>
            <textarea
              cols={30}
              rows={10}
              id="msg"
              name="msg"
              placeholder="Write something here..."
              required
              onChange={handleInputChange}
              value={formData.msg}
            />
          </div>
        </div>
        {/* .col */}
        <div className="col-lg-12">
          <div className="text-center">
            <div className="st-height-b10 st-height-lg-b10" />
            <button
              className="st-btn st-style1 st-color1 st-size-medium"
              type="submit"
              id="submit"
              name="submit"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
        {/* .col */}
      </form>
    </div>
  );
};
export default WorkAt;
