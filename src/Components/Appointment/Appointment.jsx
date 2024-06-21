import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";

const Appointment = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Fone: "",
    date: "",
    department: "",
    doctor: "",
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
    formData.append("access_key", "23904f5c-ab98-45dd-b205-4d694407c622");

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
        Fone: "",
        date: "",
        department: "",
        doctor: "",
        msg: "",
      });
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="st-shape-wrap st-gray-bg">
      <div className="st-shape4">
        <img src="/shape/section_shape.png" alt="/shape/section_shape.png" />
      </div>
      <div className="st-shape6">
        <img src="/shape/contact-shape3.svg" alt="/shape/contact-shape3.svg" />
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading
        title="Make an appointment"
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum the industry's standard dummy text."
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <form
              method="POST"
              className="st-appointment-form"
              id="appointment-form"
              onSubmit={onSubmit}
            >
              <input
                type="hidden"
                name="from_name"
                value="Enjoy Health & Care"
              />
              <input type="hidden" name="replyto" value="info@enjoyhealthandcare.nl" />
              <div id="st-alert1" />
              <div className="row">
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jhon Doe"
                      onChange={handleInputChange}
                      value={formData.name}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Email Address</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      onChange={handleInputChange}
                      value={formData.email}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Fone Number</label>
                    <input
                      type="text"
                      id="Fone"
                      name="Fone"
                      placeholder="+00 141 23 234"
                      onChange={handleInputChange}
                      value={formData.Fone}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Booking/Visit Date</label>
                    <input
                      name="date"
                      type="text"
                      id="date"
                      placeholder="dd/mm/yy"
                      onChange={handleInputChange}
                      value={formData.date}
                      required
                    />
                    <div className="form-field-icon">
                      <Icon icon="fa:calendar" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Service</label>
                    <div className="st-custom-select-wrap">
                      <select
                        name="department"
                        id="department"
                        className="st_select1"
                        data-placeholder="Select service"
                        onChange={handleInputChange}
                        value={formData.department}
                        required
                      >
                        <option>Select service</option>
                        <option value="dental-care">Diagnostics</option>
                        <option value="neurology">Develop House</option>
                        <option value="crutches">Independence training</option>
                        <option value="cardiology">Crisis</option>
                        <option value="pulmonary">Independent house</option>
                        <option value="x-ray">Independence HousePlus</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Doctor</label>
                    <div className="st-custom-select-wrap">
                      <select
                        name="doctor"
                        className="st_select1"
                        id="doctor"
                        data-placeholder="Select doctor"
                        onChange={handleInputChange}
                        value={formData.doctor}
                        required
                      >
                        <option>Select Doctor</option>
                        <option value="jhon-doe">Dr. Jhon Doe</option>
                        <option value="mak-rushi">Dr. Mak Roshi</option>
                        <option value="mohoshin-kabir">
                          Dr. Mohoshin Kabir
                        </option>
                        <option value="nayon-borua">Dr. Nayon Borua</option>
                        <option value="rasel-islam">Dr. Rasel Islam</option>
                        <option value="mahid-islam">Dr. Mahid Islam</option>
                      </select>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="st-form-field st-style1">
                    <label>Message</label>
                    <textarea
                      cols={30}
                      rows={10}
                      id="msg"
                      name="msg"
                      placeholder="Write something here..."
                      onChange={handleInputChange}
                      value={formData.msg}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    className="st-btn st-style1 st-color1 st-size-medium"
                    type="submit"
                    id="appointment-submit"
                    name="submit"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
