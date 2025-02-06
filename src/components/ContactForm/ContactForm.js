import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxkxU01ATcwQGS42Klbnc3kgm07Lt8ElPuBtHxeicyxx3zDxFq31u_-Kyo_BlR8odXR/exec";

    try {
      let response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("success");
       Swal.fire({
         title: "Thank You!",
         text: "We've received your message and will get back to you ASAP!",
         icon: "success",
       });
        setFormData({ fname: "", email: "", subject: "", message: "" });

      } else {

        setStatus("error");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
        console.log(error);
        
      setStatus("error");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });

    }
  };

  return (
    <div className="col-lg-8">
      <form onSubmit={handleSubmit} className="php-email-form">
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="fname"
              className="form-control"
              placeholder="Your Name"
              value={formData.fname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-12">
            <textarea
              className="form-control"
              name="message"
              rows={6}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-12 text-center">
           

            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
