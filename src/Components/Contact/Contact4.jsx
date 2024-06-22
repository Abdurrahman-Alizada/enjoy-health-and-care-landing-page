import React, { useState } from 'react'

const Contact4 = () => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Fone: '',
    subject: '',
    msg: ''
  });

  // Handler for input field changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
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
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setFormData({
        name: '',
        email: '',
        Fone: '',
        subject: '',
        msg: ''
      });
      setLoading(false)
    }
  };


  return (
    <section className="st-shape-wrap" id="contact">
      <div className="st-shape1">
        <img src="/shape/contact-shape1.svg" alt="shape1" />
      </div>
      <div className="st-shape2">
        <img src="/shape/contact-shape2.svg" alt="shape2" />
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
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
                  <label>Volledige naam</label>
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
                  <label>e-mail adres</label>
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
                  <label>Onderwerp</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Onderwerp schrijven"
                    required
                    onChange={handleInputChange}
                    value={formData.subject}
                  />
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Telefoonnummer</label>
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
              {/* .col */}
              <div className="col-lg-12">
                <div className="st-form-field st-style1">
                  <label>Bericht</label>
                  <textarea
                    cols={30}
                    rows={10}
                    id="msg"
                    name="msg"
                    placeholder="Schrijf hier..."
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
                    {loading ? "Bezig met verzenden..." : "Bericht versturen"}
                  </button>
                </div>
              </div>
              {/* .col */}
            </form>
          </div>
          {/* .col */}
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  )
}

export default Contact4
