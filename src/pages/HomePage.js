import React from "react";
import Preloader from "../components/PreLoader/PreLoader.js";
import { ReactTyped } from "react-typed";
import Header from "../components/Header/Header.js";
// import ParticleEffect from "../components/ParticleEffect/ParticleEffect.js";

const HomePage = () => {
  return (
    <div className="index-page">
     <Header/>
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <div className="particlehead" />
          {/* <ParticleEffect/> */}
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
                    <a href="">Custom Developmen</a>
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

        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Check our Portfolio</p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Card</li>
                <li data-filter=".filter-branding">Web</li>
              </ul>
              {/* End Portfolio Filters */}
              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                      title="App 1"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                      title="Product 1"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                      title="Branding 1"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                      title="App 2"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                      title="Product 2"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                      title="App 3"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                      title="Product 3"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
              </div>
              {/* End Portfolio Container */}
            </div>
          </div>
        </section>
        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <img
                  src="assets/img/stats-img.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <h3 className="fw-bold fs-2 mb-3">
                  Voluptatem dignissimos provident quasi
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
                <div className="row gy-4">
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-emoji-smile flex-shrink-0" />
                      <div>
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={232}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Happy Clients</strong>
                          <span>consequuntur quae</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats Item */}
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-journal-richtext flex-shrink-0" />
                      <div>
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={521}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Projects</strong>
                          <span>adipisci atque cum quia aut</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats Item */}
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-headset flex-shrink-0" />
                      <div>
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={1453}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Hours Of Support</strong>
                          <span>aut commodi quaerat</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats Item */}
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-people flex-shrink-0" />
                      <div>
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={32}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Hard Workers</strong>
                          <span>rerum asperiores dolor</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats Item */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="mb-4" data-aos="fade-up" data-aos-delay={200}>
              <iframe
                style={{ border: 0, width: "100%", height: 270 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder={0}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
                    <p>A108 Adam Street, New York, NY 535022</p>
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
                    <p>+1 5589 55488 55</p>
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
                    <p>info@example.com</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
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
                  <span className="sitename">GP</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3">
                    <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>info@example.com</span>
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
              <strong className="px-1 sitename">GP</strong>
              <span>All Rights Reserved</span>
            </p>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you've purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
              Designed by
              <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed
              by <a href="https://themewagon.com">ThemeWagon</a>
            </div>
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
