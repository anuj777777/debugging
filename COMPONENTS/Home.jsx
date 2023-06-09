import React from "react";
import Header from "./Header";
import "./Style.css";
import banright from "../Assests/earth-banner.png";
import videoicon from "../Assests/video-icon.png";
import feature1 from "../Assests/logo 2.png";
import feature2 from "../Assests/1.png";
import feature3 from "../Assests/2.png";
import feature4 from "../Assests/opensource.png";
import customer1 from "../Assests/customers-1.png";
import customer2 from "../Assests/customers-2.png";
import customer3 from "../Assests/customers-3.png";
import customer4 from "../Assests/customers-4.png";
import customer5 from "../Assests/customers-5.png";
import customer6 from "../Assests/customers-6.png";
import customer7 from "../Assests/customers-7.png";
import customerbg from "../Assests/customers-bg.png";
import testimonial1 from "../Assests/testimonials-1.png";
import leftQuote from "../Assests/left-quote.png";
import magnify from "../Assests/search.png";
import flag from "../Assests/flag.png";
import chooseusicon1 from "../Assests/choose-us-icon-1.png";
import chooseusicon2 from "../Assests/choose-us-icon-2.png";
import chooseusicon3 from "../Assests/choose-us-icon-3.png";
import chooseusicon4 from "../Assests/choose-us-icon-4.png";
import chooseusicon5 from "../Assests/choose-us-icon-5.png";
import chooseusicon6 from "../Assests/choose-us-icon-6.png";
import chooseusicon7 from "../Assests/choose-us-icon-7.png";
import chooseusicon8 from "../Assests/choose-us-icon-8.png";
import affiliate from "../Assests/affiliate-bg.png";
import paymenticon1 from "../Assests/payment-icon-1.png";
import paymenticon2 from "../Assests/payment-icon-2.png";
import paymenticon3 from "../Assests/payment-icon-3.png";
import paymenticon4 from "../Assests/payment-icon-4.png";
import paymenticon5 from "../Assests/payment-icon-5.png";
import howWorksIllu from "../Assests/how-works-Illu.png";
import howworksicon1 from "../Assests/how-works-icon-1.png";
import howworksicon2 from "../Assests/how-works-icon-2.png";
import howworksicon3 from "../Assests/how-works-icon-3.png";
import appleft from "../Assests/app-download-left.png";
import check from "../Assests/check.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div>
        <Header />
        {/* header-section end */}
        {/* banner-section start */}

        <section className="banner-section">
          <div className="banner-content d-flex align-items-center">
            <div className="container">
              <div className="illu-item">
              </div>
              <div className="row justify-content-start">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <div className="top-area justify-content-center">
                      <h1>Let’s come rebuild with Us.</h1>
                      <p className="xxlr">
                        Create, Rebuild and grow with most comprehensive
                        tech-ecosystem in India.
                      </p>
                      <form action="#">
                        <div className="input-field d-flex">
                          <input
                            type="email"
                            placeholder="Where are you sending money to"
                          />

                          <button className="cmn-btn" type="button" disabled>
                            <span>
                              <img
                                style={{ height: "30px", width: "30px" }}
                                src={magnify}
                                alt="magnify"
                              />
                            </span>
                          </button>
                        </div>
                      </form>
                      <div className="bottom-banner d-flex align-items-center">
                        <div className="left">
                          <a  href="abc" className="icon mfp-iframe popupvideo">
                          
                            <img src={videoicon} alt="icon" />
                          </a>
                        </div>
                        <div className="right d-grid">
                          <h5>245M+</h5>
                          <div className="review d-flex align-items-center">
                            <h6>4.0</h6>
                            <a href="abc">
                              <i className="fas fa-star" />
                            </a>
                            <a href="abc">
                              <i className="fas fa-star" />
                            </a>
                            <a href="abc">
                              <i className="fas fa-star" />
                            </a>
                            <a href="abc">
                              <i className="fas fa-star" />
                            </a>
                            <a href="abc">
                              <i className="fas fa-star blank" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-illu">
                <img
                  className="right-1 wow fadeInUp"
                  src={banright}
                  alt="abc"
                />
              </div>
            </div>
          </div>
        </section>

        {/* banner-section end */}
        {/* Features In start */}

        <section className="features-section">
          <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8">
                  <div className="section-header">
                    <h2 className="title">
                      Unlock the infrastructure for entire world.
                    </h2>
                    <p>
                      Complete ecosystem to guide you from beginning to end.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row wrapper">
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <a href="http://www.bcode.in/">
                      <div className="icon">
                        <img src={feature1} alt="icon" />
                      </div>
                      <h5>B#Code</h5>
                      <p>
                        The integrated platform to practice and learn coding.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <a href="/coming-soon">
                      <div className="icon">
                        <img src={feature2} alt="icon" />
                      </div>
                      <h5>BSearch</h5>
                      <p>The indigenously developed AI based search engine.</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <a href="/coming-soon">
                      <div className="icon">
                        <img src={feature3} alt="icon" />
                      </div>
                      <h5>BMail</h5>
                      <p>
                        A virtual mail service
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <a href="/coming-soon">
                      <div className="icon">
                        <img src={feature4} alt="icon" />
                      </div>
                      <h5>Open Source Service</h5>
                      <p>You're in the platform that developers adore .</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features In end */}
        {/* Customers In start */}

        <section className="customers-section">
          <div className="overlay pb-120 d-flex justify-content-center">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-12">
                  <div className="customers-area">
                    <div className="element po-1">
                      <div className="image-area">
                        <p className="item-1">Awesome!</p>
                        <img className="item-1" src={customer1} alt="abc" />
                      </div>
                    </div>
                    <div className="element po-2">
                      <div className="image-area">
                        <p className="item-2">Awesome!</p>
                        <img className="item-2" src={customer2} alt="abc" />
                      </div>
                    </div>
                    <div className="element po-3">
                      <div className="image-area">
                        <p className="item-3">Awesome!</p>
                        <img className="item-3" src={customer3} alt="abc" />
                      </div>
                    </div>
                    <div className="element po-4">
                      <div className="image-area">
                        <p className="item-4">Awesome!</p>
                        <img className="item-4" src={customer4} alt="abc" />
                      </div>
                    </div>
                    <div className="element po-5">
                      <div className="image-area">
                        <p className="item-5">Awesome!</p>
                        <img className="item-5" src={customer5} alt="abc" />
                      </div>
                    </div>
                    <div className="element po-6">
                      <div className="image-area">
                        <p className="item-6">Awesome!</p>
                        <img className="item-6" src={customer6} alt="abc" />
                      </div>
                    </div>
                    <div className="element po-7">
                      <div className="image-area">
                        <p className="item-7">Awesome!</p>
                        <img className="item-7" src={customer7} alt="abc" />
                      </div>
                    </div>
                    <div className="circle">
                      <img src={customerbg} alt="abc" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-area">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-7 col-sm-8">
                    <div className="section-header">
                      <h2 className="title">
                        Over <span>3M+</span> User Trust Bharattech
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 d-flex justify-content-md-between justify-content-around">
                    <div className="total-item text-center">
                      <div className="testimonials-carousel">
                        <div className="main">
                          <div className="wrapper">
                            <div className="profile">
                              <img src={testimonial1} alt="abc" />
                            </div>
                            <div className="row d-flex justify-content-center">
                              <div className="col-lg-6 col-md-8 col-sm-12">
                                <div className="bottom-item">
                                  <img
                                    className="quote"
                                    src={leftQuote}
                                    alt="icon"
                                  />
                                  <div className="review">
                                    <a href="abc">
                                      <i className="fas fa-star" />
                                    </a>
                                    <a href=" ">
                                      <i className="fas fa-star" />
                                    </a>
                                    <a href="abc">
                                      <i className="fas fa-star" />
                                    </a>
                                    <a href="abc">
                                      <i className="fas fa-star" />
                                    </a>
                                    <a href="abc">
                                      <i className="fas fa-star" />
                                    </a>
                                  </div>
                                  <p>
                                    The greatest and number 1 services. Got my
                                    tasks done easily and saved my time. Worth
                                    trusting them.
                                  </p>
                                  <a href="abc">Ella Stewart</a>
                                  <div className="country">
                                    <img src={flag} alt="abc" />
                                    <span className="smr">United States</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customers In end */}
        {/* Why choose us In start */}

        <section className="why-choose-us">
          <div className="overlay pt-120 cus-pad">
            <div className="container">
              <div className="main-content">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-9">
                    <div className="section-header text-center">
                      <h2 className="title">
                        ACHIEVING THE USERS' PRIORITY EVERY TIME.
                      </h2>
                      <p>
                        Get dedicated solutions for your need with options to
                        the job done in time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="top-wrapper">
                  <div className="row wrapper">
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={chooseusicon1} alt="icon" />
                        </div>
                        <h5>Quick</h5>
                        <p>
                          User-friendly procedures to accelerate and simplify
                          working.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={chooseusicon2} alt="icon" />
                        </div>
                        <h5>Precise</h5>
                        <p>
                          Multiple choices provide flexibility based on user
                          needs.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={chooseusicon3} alt="icon" />
                        </div>
                        <h5>Secured</h5>
                        <p>Strong protection at our end making us reliable.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={chooseusicon4} alt="icon" />
                        </div>
                        <h5>No cost</h5>
                        <p>
                          Most of the services are free allowing everyone to
                          lead the stage.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={chooseusicon5} alt="icon" />
                        </div>
                        <h5>Diverse</h5>
                        <p>
                          Allows users to navigate to other services for
                          support.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={chooseusicon6} alt="icon" />
                        </div>
                        <h5>Latest</h5>
                        <p>Based on modern technology that enables progress.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={chooseusicon7} alt="icon" />
                        </div>
                        <h5>Global</h5>
                        <p>
                          Allows techies around the world to come and show their
                          skills.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={chooseusicon8} alt="icon" />
                        </div>
                        <h5>Capable</h5>
                        <p>
                          Coordinate various actions to produce a desired
                          result.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us In end */}
        {/* Affiliate In start */}

        <section className="affiliate-section">
          <div className="overlay pt-120">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 d-flex justify-content-center">
                  <div className="left-area">
                    <img src={affiliate} alt="abc" />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="section">
                    <h5>MAKE SECURED SEARCHES</h5>
                    <h2 className="title">FASTER AND PRECISE</h2>
                    <a href="abc" className="cmn-btn">Search Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate In end */}
        {/* Payment Solutions In start */}

        <section className="payment-solutions">
          <div className="overlay pt-120 pb-120">
            <div className="container-fruid wow fadeInUp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="section-header">
                      <h2 className="title">
                        EVERYTHING BETWEEN ELASTIC SEARCH AND DEVELOPMENT
                        ARCHITECTURE.
                      </h2>
                      <p>
                        A multi-disciplinary ecosystem that moulds itself to
                        meet users need. Exceeding the boundaries of libraries
                        and capabilities making you the ‘extraordinary’.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-carousel">
                <div className="single text-center">
                  <div className="single-item text-center">
                    <div className="icon">
                      <img src={paymenticon1} alt="icon" />
                    </div>
                    <h5>The Instigator</h5>
                    <p>Create, design and help others in coding world.</p>
                  </div>
                </div>
                <div className="single text-center">
                  <div className="single-item text-center">
                    <div className="icon">
                      <img src={paymenticon2} alt="icon" />
                    </div>
                    <h5>Serve The Web</h5>
                    <p>
                      Quicker searches allowing users to sort out best results
                    </p>
                  </div>
                </div>
                <div className="single text-center">
                  <div className="single-item text-center">
                    <div className="icon">
                      <img src={paymenticon3} alt="icon" />
                    </div>
                    <h5>Soapbox</h5>
                    <p>
                      Giving platform to existing and upcoming ideas to create
                      the limitless.
                    </p>
                  </div>
                </div>
                <div className="single text-center">
                  <div className="single-item text-center">
                    <div className="icon">
                      <img src={paymenticon4} alt="icon" />
                    </div>
                    <h5>Accessible</h5>
                    <p>Integrate security with your development process.</p>
                  </div>
                </div>
                <div className="single text-center">
                  <div className="single-item text-center">
                    <div className="icon">
                      <img src={paymenticon5} alt="icon" />
                    </div>
                    <h5>Prophylactic</h5>
                    <p>Safeguarding your data.</p>
                  </div>
                </div>
                <div className="single text-center">
                  <div className="single-item text-center">
                    <div className="icon">
                      <img src={paymenticon3} alt="icon" />
                    </div>
                    <h5>Cutting Edge</h5>
                    <p>
                      Timely updates so you may not miss the features that
                      improvise your abilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works In start */}

        <section className="how-works">
          <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <div className="section-header text-center">
                    <h2 className="title">HOW TO MEET THE RESULTS</h2>
                    <p>Just follow the path in 3 steps.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <div className="left-area">
                    <img src={howWorksIllu} alt="abc" />
                  </div>
                </div>
                <div className="col-lg-7 wrapper col-md-7">
                  <div className="single-item d-flex align-items-center">
                    <div className="icon">
                      <span className="xlr">01</span>
                      <div className="iconbg">
                        <img src={howworksicon1} alt="icon" />
                      </div>
                    </div>
                    <div className="right">
                      <h5>SIGN UP TO GET STARTED</h5>
                      <p>
                        Fill up the basic details to register yourself and get
                        access to the exciting features.
                      </p>
                    </div>
                  </div>
                  <div className="single-item d-flex align-items-center">
                    <div className="icon">
                      <span className="xlr second">02</span>
                      <div className="iconbg">
                        <img src={howworksicon2} alt="icon" />
                      </div>
                    </div>
                    <div className="right">
                      <h5>CHOOSE THE AREA OF WORK</h5>
                      <p>Select the platform you want to work on.</p>
                    </div>
                  </div>
                  <div className="single-item d-flex align-items-center">
                    <div className="icon">
                      <span className="xlr third">03</span>
                      <div className="iconbg">
                        <img src={howworksicon3} alt="icon" />
                      </div>
                    </div>
                    <div className="right">
                      <h5>INTEGRATE WITH OTHER SERVICE</h5>
                      <p>Save or share your data easily.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="app-download">
          <div className="overlay pt-120">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-lg-6 col-md-4">
                  <div className="left-area">
                    <img src={appleft} alt="abc" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 d-flex align-items-center">
                  <div className="right-area">
                    <div className="section-header">
                      <h2 className="title">GET TO THE RIGHT SPOT ANYWHERE</h2>
                      <p>
                        Access your data from anywhere and get your work at your
                        discretion.
                      </p>
                    </div>
                    <ul className="feature">
                      <li>
                        <div className="icon">
                          <img src={check} alt="icon" />
                        </div>
                        Sign In with your credentials
                      </li>
                      <li>
                        <div className="icon">
                          <img src={check} alt="icon" />
                        </div>
                        Choose the required item.
                      </li>
                      <li>
                        <div className="icon">
                          <img src={check} alt="icon" />
                        </div>
                        Select the method.
                      </li>
                      <li>
                        <div className="icon">
                          <img src={check} alt="icon" />
                        </div>
                        Get it easily.
                      </li>
                    </ul>
                    <div className="phone-number">
                      <form
                        action="#"
                        className="d-flex align-items-center justify-content-between"
                      >
                        <div className="top-area d-flex align-items-end">
                          <select>
                            <option value={1}>+91</option>
                          </select>
                          <input placeholder="Phone Number" type="tel" />
                        </div>
                        <div className="btn-area">
                          <a href="abc" className="cmn-btn">Get Started</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs In start */}
        <section className="faqs-section">
          <div id="faqss" className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-6 col-md-10">
                  <div className="section-header">
                    <div className="left">
                      <h2 className="title">Frequently asked questions</h2>
                      <p>Here’s solution to your doubts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-2 d-flex align-items-end justify-content-md-end justify-content-start">
                  <div className="right">
                    <a href="abc" className="cmn-btn">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="row wrapper">
                <div className="col-lg-6">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Does BharatTech gives platform to enrich skills?
                        </button>
                      </h6>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Click on the recruitment button to join us. We
                            provide platform to software and application
                            developers to enhance their skills.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Are these services interoperable?
                        </button>
                      </h6>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            All the services provided by BharatTech are
                            interoperable. By using our services in a combined
                            fashion you can improve your performance and time
                            management.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          What to do on in case of dispute?
                        </button>
                      </h6>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            BharatTech is governed by indian laws any case
                            regarding any dispute. If you face any problem
                            contact us we will provide the best solution for
                            your problem. Our technical team is 24*7 available
                            to help.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="flush-headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          How data is protected by BharatTech?
                        </button>
                      </h6>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Protection of your data is our primary focus. We
                            provide high security of your data at our servers by
                            keeping them in a layered and secured format.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="flush-headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          What is criteria to become BharatTech's user?
                        </button>
                      </h6>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            All the eligibility criteria has been clearly
                            mentioned in the terms of use, privacy policy and
                            terms and conditions. Click here to visit…………………….
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="accordion accordion-flush"
                    id="accordionSecond"
                  >
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="second-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#second-collapseOne"
                          aria-expanded="false"
                          aria-controls="second-collapseOne"
                        >
                          What software is required to operate BharatTech's
                          service?
                        </button>
                      </h6>
                      <div
                        id="second-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="second-headingOne"
                        data-bs-parent="#accordionSecond"
                      >
                        <div className="accordion-body">
                          <p>
                            BharatTech's website works very efficiently on PC,
                            laptops, tablet and smartphones through any browser.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="second-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#second-collapseTwo"
                          aria-expanded="false"
                          aria-controls="second-collapseTwo"
                        >
                          How would I get new updates of development programs?
                        </button>
                      </h6>
                      <div
                        id="second-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="second-headingTwo"
                        data-bs-parent="#accordionSecond"
                      >
                        <div className="accordion-body">
                          <p>
                            Kindly visit the ‘news shelter’ section to get newly
                            updated services and newly launched services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs In end */}

        <section className="call-action">
          <div className="overlay">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-content">
                    <div className="main pt-120 pb-120">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                          <div className="section-header text-center">
                            <h2 className="title">
                              EXTENDING THE RED CARPET TO DEVELOPERS WHO REQUIRE
                              MULTI-MINISTRATIONS MOST
                            </h2>
                            <p>
                              Explore the vibrance of the technological
                              advancement and lead the time.
                            </p>
                            <a href="abc" className="cmn-btn">Get your free account</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Area Start */}
        <Footer />
        {/* Footer Area End */}
      </div>
    </>
  );
}
export default Home;
