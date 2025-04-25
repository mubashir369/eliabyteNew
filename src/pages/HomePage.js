import React from "react";
import Preloader from "../components/PreLoader/PreLoader.js";
import { ReactTyped } from "react-typed";
import Header from "../components/Header/Header.js";
import ContactForm from "../components/ContactForm/ContactForm.js";
// import ParticleHead from "../components/ParticleHead/ParticleHead.js";
// import ParticleEffect from "../components/ParticleEffect/ParticleEffect.js";

const HomePage = () => {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <section id="hero" className="hero section dark-background">
          {/* <div className="particlehead" /> */}
       {/* <ParticleHead/> */}
          <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
          <div className="container">
            <div
              className="row justify-content-center text-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="col-xl-6 col-lg-8">
                <h1>
                  We Build Innovative Digital Solutions for &nbsp;
                  <span>
                    <ReactTyped
                      backSpeed={50}
                      onBegin={function noRefCheck() {}}
                      onComplete={function noRefCheck() {}}
                      onDestroy={function noRefCheck() {}}
                      onLastStringBackspaced={function noRefCheck() {}}
                      onReset={function noRefCheck() {}}
                      onStart={function noRefCheck() {}}
                      onStop={function noRefCheck() {}}
                      onStringTyped={function noRefCheck() {}}
                      onTypingPaused={function noRefCheck() {}}
                      onTypingResumed={function noRefCheck() {}}
                      strings={[
                        " Web Apps",
                        " Mobile Apps",
                        " E-Commerce",
                        " Security Systems",
                        " Servers",
                      ]}
                      typeSpeed={50}
                      typedRef={function noRefCheck() {}}
                      loop
                      className="typed-words"
                    />
                  </span>
                </h1>
              </div>
            </div>
            <div
              className="row gy-4 mt-5 justify-content-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div
                className="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="icon-box">
                  <i className="bi bi-binoculars" />
                  <h3>
                    <a href="">Innovative Solutions</a>
                  </h3>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon-box">
                  <i className="bi bi-bullseye" />
                  <h3>
                    <a href="">Scalable Systems</a>
                  </h3>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="icon-box">
                  <i className="bi bi-fullscreen-exit" />
                  <h3>
                    <a href="">Strong Security</a>
                  </h3>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="icon-box">
                  <i className="bi bi-card-list" />
                  <h3>
                    <a href="">Custom Development</a>
                  </h3>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay={700}
              >
                <div className="icon-box">
                  <i className="bi bi-gem" />
                  <h3>
                    <a href="">Ongoing Support</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 order-2 order-lg-1 content">
                <h3>About Us</h3>
                <p className="fst-italic">
                  Welcome to Eliabyte, your trusted partner for innovative IT
                  solutions. We are dedicated to helping businesses and
                  individuals achieve their goals with cutting-edge technology
                  and exceptional service. At Eliabyte,
                  <br />
                  we specialize in:
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all" />
                    <span>
                      <b>Software Development:</b> Crafting custom software, web
                      applications, and mobile apps tailored to your needs.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />
                    <span>
                      <b>Security Solutions:</b> Providing advanced security
                      systems for offices and homes, ensuring safety and peace
                      of mind.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />
                    <span>
                      <b>IT Infrastructure:</b> Supplying high-quality computers
                      and setting up servers for seamless business operations.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />
                    <span>
                      <b>Networking Solutions:</b> Designing and implementing
                      reliable and secure networks for businesses of all sizes.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />
                    <span>
                      <b>Maintenance &amp; Support:</b> Offering ongoing IT
                      support to keep your systems running smoothly.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />
                    <span>
                      <b>Cloud Solutions:</b> Helping businesses move to the
                      cloud for enhanced flexibility, scalability, and
                      cost-efficiency.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="features-image col-lg-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <img src="assets/img/features-bg.jpg" alt="" />
              </div>
              <div className="col-lg-6">
                <div
                  className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="bi bi-archive flex-shrink-0" />
                  <div>
                    <h4>Our Mission</h4>
                    <p>
                      To empower businesses and individuals by delivering
                      comprehensive IT solutions that are innovative, reliable,
                      and scalable.
                    </p>
                  </div>
                </div>
                {/* End Features Item*/}
                <div
                  className="features-item d-flex mt-5 ps-0 ps-lg-3"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <i className="bi bi-camera-reels flex-shrink-0" />
                  <div>
                    <h4>Our Vision</h4>
                    <p>
                      To be a global leader in IT services, transforming
                      businesses with technology and driving innovation at every
                      step.
                    </p>
                  </div>
                </div>

                <div
                  className="features-item d-flex mt-5 ps-0 ps-lg-3"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-basket flex-shrink-0" />
                  <div>
                    <h4>Core Values</h4>
                    <p>
                      At Eliabyte, we believe in integrity, always ensuring
                      honesty and transparency in our work. Innovation drives us
                      to embrace new technologies and innovative solutions. We
                      strive for excellence, delivering top notch offerings with
                      precision and dedication. Collaboration is key, operating
                      carefully with clients and partners to attain the pleasant
                      outcomes. Adaptability keeps us ahead in the ever-evolving
                      digital international, and our awareness is on creating a
                      actual effect, assisting agencies develop and prevail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Check our Services</p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Web Development</h3>
                  </a>
                  <p>
                    Build powerful, responsive, and user-friendly websites that
                    drive engagement and performance. We specialize in
                    developing dynamic websites that are easy to manage and
                    optimized for both desktop and mobile users.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Mobile App Development</h3>
                  </a>
                  <p>
                    Develop intuitive and high-performing mobile applications
                    for iOS and Android that deliver seamless user experiences
                    and meet your business needs.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>UI/UX Design</h3>
                  </a>
                  <p>
                    We design user-centric interfaces and experiences that
                    ensure ease of use, accessibility, and a positive
                    interaction with your product.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>E-commerce Solutions</h3>
                  </a>
                  <p>
                    Launch and manage your online store with our end-to-end
                    e-commerce development services, designed to boost sales and
                    enhance customer experience.
                  </p>
                  <a href="service-details.html" className="stretched-link" />
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Consulting &amp; IT Support</h3>
                  </a>
                  <p>
                    Receive expert guidance and ongoing support to ensure your
                    technology works for you, not the other way around.
                  </p>
                  <a href="service-details.html" className="stretched-link" />
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Security Systems</h3>
                  </a>
                  <p>
                    Protect your home and office with advanced security systems
                    that ensure peace of mind and safeguard your assets.
                  </p>
                  <a href="service-details.html" className="stretched-link" />
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        <section
          id="call-to-action"
          className="call-to-action section dark-background"
        >
          <img src="assets/img/cta-bg.jpg" alt="" />
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Why Choose Us?</h3>
                  <p>
                    At Eliabyte, we pride ourselves on being a trusted partner
                    for businesses of all sizes. With expertise in software
                    development, IT infrastructure, and security systems, we
                    deliver tailored solutions that align with your unique
                    goals. Our team is dedicated to providing exceptional
                    service, innovative technology, and ongoing support to
                    ensure your success. By choosing Eliabyte, you gain access
                    to a team that values quality, integrity, and your vision,
                    helping you build a smarter, more secure future.
                  </p>
                  {/* <a class="cta-btn" href="#">Call To Action</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Check our Portfolio */}
        {/* Voluptatem */}
        
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            {/* <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
              <iframe
                style={{ border: 0, width: "100%", height: 270 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder={0}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div> */}
            {/* End Google Maps */}
            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p> Kerala,India</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 6283831369</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>eliabyte.sales@gmail.com</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
             <ContactForm/>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer dark-background">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  {/* <span className="sitename">GP</span> */}
                </a>
                <div className="footer-contact pt-3">
                  <p>Mannarkkad</p>
                  <p>Kerala</p>
                  <p className="mt-3">
                    <strong>Phone:</strong> <span>+91 6282831369</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>eliabyte.sales@gmail.com</span>
                  </p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <a href="#"> Home</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#"> About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#"> Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <a href="#"> Terms of service</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <a href="#"> Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <a href="#"> Web Design</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <a href="#"> Web Development</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <a href="#"> Product Management</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#"> Marketing</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <a href="#"> Graphic Design</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="newsletter-form">
                    <input type="email" name="email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container text-center">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">ELIABYTE</strong>
              <span>All Rights Reserved</span>
            </p>
           
          </div>
        </div>
      </footer>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      <Preloader />
    </div>
  );
};

export default HomePage;
