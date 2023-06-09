import React from "react";
import "./Style.css";
import "./Style.css";
import contactBannerIcon from "../Assests/contact-banner-icon-1.png";
import smsIcon from "../Assests/sms-icon.png";
import callIcon from "../Assests/call-icon.png";
import contatctBanner2 from "../Assests/contact-banner-icon-2.png";
import contactIcon3 from "../Assests/contact-banner-icon-3.png";
import contactUserIcon from "../Assests/contact-user-icon.png";
import contactEmail from "../Assests/contact-email-icon.png";
import contactPhone from "../Assests/contact-phone-icon.png";
import contactCom from "../Assests/contact-com-icon.png";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div>
        <Header />

        <section className="banner-section inner-pages contact">
          <div className="overlay">
            <div className="banner-content pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-md-10">
                    <div className="main-content">
                      <h1>Contact</h1>
                      <div className="breadcrumb-area">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb d-flex align-items-center">
                            <li className="breadcrumb-item">
                              <a href="abc"> Home</a>
                            </li>
                           \ <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Contact
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-bottom-area pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 cus-z">
                  <div className="row cus-mar">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="top-area">
                          <div className="icon-area">
                            <img src={contactBannerIcon} alt="abc" />
                          </div>
                          <h4 className="text-uppercase">Personal</h4>
                          <p>Money Transfer</p>
                        </div>
                        <div className="bottom-area d-flex align-items-center">
                          <div className="icon-bottom">
                            <img src={smsIcon} alt="abc" />
                          </div>
                          <p>info@Bharattech.com</p>
                        </div>
                        <div className="bottom-area d-flex align-items-center">
                          <div className="icon-bottom">
                            <img src={callIcon} alt="abc" />
                          </div>
                          <p>(455) 254 - 653</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="top-area">
                          <div className="icon-area">
                            <img src={contatctBanner2} alt="abc" />
                          </div>
                          <h4 className="text-uppercase">Business</h4>
                          <p>International Payments</p>
                        </div>
                        <div className="bottom-area d-flex align-items-center">
                          <div className="icon-bottom">
                            <img src={smsIcon} alt="abc" />
                          </div>
                          <p>info@Bharattech.com</p>
                        </div>
                        <div className="bottom-area d-flex align-items-center">
                          <div className="icon-bottom">
                            <img src={callIcon} alt="abc" />
                          </div>
                          <p>(455) 254 - 653</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="top-area">
                          <div className="icon-area">
                            <img src={contactIcon3} alt="abc" />
                          </div>
                          <h4 className="text-uppercase">Chat with us</h4>
                          <p>Money Transfer</p>
                        </div>
                        <div className="bottom-area offline">
                          <h6>Monday – Saturday (9am to 5pm)</h6>
                          <p>Currently Offline</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner-section end */}
        {/* Contact Form In start */}
        <section className="contact-form">
          <div className="overlay pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="section-header text-center">
                    <h2 className="title">
                      Get in touch with us for more information
                    </h2>
                    <p>
                      If you need help or have a question, we’re here for you
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="form-area">
                    <form action="#">
                      <div className="row">
                        <div className="col-6">
                          <div className="single-input d-flex align-items-center">
                            <input
                              // onChange={handleChange}
                              className="input"
                              name="name"
                              type="name"
                              placeholder="Name"
                            />
                            <img src={contactUserIcon} alt="abc" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="single-input d-flex align-items-center">
                            <input
                              // onChange={handleChange}
                              name="email"
                              type="email"
                              placeholder="Email"
                            />
                            <img src={contactEmail} alt="abc" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="single-input d-flex align-items-center">
                            <input
                              // onChange={handleChange}
                              className="input"
                              name="phone"
                              type="text"
                              placeholder="Phone"
                            />
                            <img src={contactPhone} alt="abc" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="single-input d-flex align-items-center">
                            <input
                              // onChange={handleChange}
                              className="input"
                              name="company"
                              type="text"
                              placeholder="Company"
                            />
                            <img src={contactCom} alt="abc" />
                          </div>
                        </div>
                      </div>
                      <div className="single-input d-flex align-items-center">
                        <input
                          // onChange={handleChange}
                          className="input"
                          name="heading"
                          type="text"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <div className="single-input d-flex align-items-center">
                        <input
                          // onChange={handleChange}
                          className="input"
                          name="message"
                          type="text"
                          placeholder=""
                        />
                        <textarea
                          placeholder="What’s your message?"
                          cols={30}
                          rows={10}
                          defaultValue={""}
                        />
                      </div>
                      <div className="btn-area text-center">
                        <button
                          type="button"
                          disabled
                          //  onClick={contactApi}
                          className="cmn-btn"
                        >
                          Send message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form In end */}
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
                    <a  href="abc" className="cmn-btn">Get Started</a>
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
        {/* Footer Area Start */}
        <Footer />
      </div>
    </>
  );
}
export default ContactPage;
