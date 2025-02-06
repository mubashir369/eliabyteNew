import React from 'react'

const ContactForm = () => {
  return (
    <div className="col-lg-8">
      <form
        action="forms/contact.php"
        method="post"
        className="php-email-form"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required=""
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              required=""
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              required=""
            />
          </div>
          <div className="col-md-12">
            <textarea
              className="form-control"
              name="message"
              rows={6}
              placeholder="Message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm