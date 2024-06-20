import React, { useState } from 'react'

export default function SidebarContact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      Fone: "",
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
      <div className="col-lg-6">
        <div className="st-form-field st-style1">
          <label>Fone</label>
          <input
            type="text"
            id="Fone"
            name="Fone"
            placeholder="+00 376 12 465"
            required
            onChange={handleInputChange}
            value={formData.Fone}
          />
        </div>
      </div>
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
    </form>
  </div>
  )
}
