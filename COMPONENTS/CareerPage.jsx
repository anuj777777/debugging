import React from "react";
import "./Style.css";
import careerBannerBg from "../Assests/careers-banner-bg.png";
import benefitIcon1 from "../Assests/benefit-icon-1.png";
import benefitIcon2 from "../Assests/benefit-icon-2.png";
import benefitIcon3 from "../Assests/benefit-icon-3.png";
import benefitIcon4 from "../Assests/benefit-icon-4.png";
import benefitIcon5 from "../Assests/benefit-icon-5.png";
import benefitIcon6 from "../Assests/benefit-icon-6.png";
import testimonialsLeft from "../Assests/testimonials-left.png";
import clockIcon from "../Assests/clock-icon.png";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function CareerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Header />
        {/* header-section end */}
        {/* banner-section start */}
        <section className="banner-section inner-pages careers">
          <div className="overlay">
            <div className="banner-content pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-10">
                    <div className="main-content">
                      <h1>Careers</h1>
                      <div className="breadcrumb-area">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb d-flex align-items-center">
                            <li className="breadcrumb-item">
                              <a href="abc">Home</a>
                            </li>
                            {/* <li className="breadcrumb-item"><a >Pages</a></li> */}
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Careers
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
                <div className="col-lg-12">
                  <div className="top-area">
                    <img src={careerBannerBg} alt="abc" />
                    <h2 className="title">
                      Be a part of the Bharattech family
                    </h2>
                    <p>
                    We are constantly looking for passionate individuals who share our values and looking for great possibilities.
                    </p>
                    <a href="abc" className="cmn-btn">See our jobs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner-section end */}
        {/* Benefits In start */}
        <section className="benefit-section">
          <div className="overlay pt-120 cus-pad">
            <div className="container">
              <div className="main-content">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-9">
                    <div className="section-header text-center">
                      <h2 className="title">YOU DESERVE TO WORK HERE</h2>
                      <p>
                        We’re all working together to make the incredible
                        possible. It’s more than a desk job, and more fun too.
                        Join us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="top-wrapper">
                  <div className="row wrapper">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={benefitIcon1} alt="icon" />
                        </div>
                        <h6>Credibility</h6>
                        <p>
                        A well established and structured platform to work and enrich your experience.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={benefitIcon2} alt="icon" />
                        </div>
                        <h6>Environment</h6>
                        <p>
                        Safe and monitored work environment.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={benefitIcon3} alt="icon" />
                        </div>
                        <h6>Flexibility</h6>
                        <p>
                        Different working options to let you have the dream job.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={benefitIcon4} alt="icon" />
                        </div>
                        <h6>Authenticated</h6>
                        <p>
                        No fraud or false promise to employee which strengthens working bonds.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={benefitIcon5} alt="icon" />
                        </div>
                        <h6>Growing</h6>
                        <p>
                        Timely evaluations opening chances of promotions.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={benefitIcon6} alt="icon" />
                        </div>
                        <h6>Evolving</h6>
                        <p>
                        Different and exciting tasks improving your knowledge base.  
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits In end */}
        {/* Testimonials In start */}
        <section className="testimonials-careers">
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-5">
                  <div className="img-area">
                    <img src={testimonialsLeft} alt="abc" />
                    <div className="title-area">
                      <h5>Dan Ballard</h5>
                      <p>Head of Marketing</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="section">
                    <h5>TESTIMONIALS</h5>
                    <h4>
                      “Working for BharatTech has been nothing short of an incredible experience”
                    </h4>
                    <p>
                    2019-2022
                    </p>
                    <a  className="cmn-btn" href="#open-positions">Open positions</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials In end */}
        {/* Open Positions In start */}
        <section className="open-positions" id="open-positions">
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-6">
                  <div className="title-area">
                    <h2 className="text-uppercase">Open positions</h2>
                  </div>
                </div>
                <div className="col-xl-6 d-flex justify-content-start justify-content-xl-end">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="all-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#all"
                        type="button"
                        role="tab"
                        aria-controls="all"
                        aria-selected="true"
                      >
                        all
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="design-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#design"
                        type="button"
                        role="tab"
                        aria-controls="design"
                        aria-selected="false"
                      >
                        design
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="development-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#development"
                        type="button"
                        role="tab"
                        aria-controls="development"
                        aria-selected="false"
                      >
                        development
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="business-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#business"
                        type="button"
                        role="tab"
                        aria-controls="business"
                        aria-selected="false"
                      >
                        business
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="all"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Junior Frontend Developer</h5>
                          <p className="xlr">Experience: 6 - 9 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">April 7, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Technical Success Lead Consultant</h5>
                          <p className="xlr">Experience: 5 - 7 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">May 17, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Digital Marketing Lead</h5>
                          <p className="xlr">Experience: 6 - 9 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">February 15, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Fresh Graduates – DevOps Engineer</h5>
                          <p className="xlr">Experience: 7 - 8 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">June 12, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>UI/UX and Product Designer</h5>
                          <p className="xlr">Experience: 5 - 7 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">July 11, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Finance Analyst</h5>
                          <p className="xlr">Experience: 7 - 9 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">March 9, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="design"
                    role="tabpanel"
                    aria-labelledby="design-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>UI/UX and Product Designer</h5>
                          <p className="xlr">Experience: 5 - 7 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">July 11, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="development"
                    role="tabpanel"
                    aria-labelledby="development-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Junior Frontend Developer</h5>
                          <p className="xlr">Experience: 6 - 9 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">April 7, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Fresh Graduates – DevOps Engineer</h5>
                          <p className="xlr">Experience: 7 - 8 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">June 12, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="business"
                    role="tabpanel"
                    aria-labelledby="business-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Technical Success Lead Consultant</h5>
                          <p className="xlr">Experience: 5 - 7 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">May 17, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Digital Marketing Lead</h5>
                          <p className="xlr">Experience: 6 - 9 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">February 15, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-item">
                          <h5>Finance Analyst</h5>
                          <p className="xlr">Experience: 7 - 9 Years</p>
                          <div className="bottom-area d-flex justify-content-between">
                            <div className="left-bottom d-flex align-items-center">
                              <span>
                                <img src={clockIcon} alt="abc" />
                                Full Time
                              </span>
                              <span className="date">March 9, 2021</span>
                            </div>
                            <div className="right-bottom">
                              <a href="abc">Explore more</a>
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
        {/* Open Positions In end */}
        {/* Send Resume In start */}
        <section className="send-resume">
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-9 d-flex">
                  <div className="section-header text-center">
                    <h2>
                    Looking for platform to reach your ultimate potential. It is Here!
                    </h2>
                    <p>
                    Join us to be part of the league and lead the future
                    </p>
                    <button
                      type="button"
                      className="cmn-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#sendresume"
                    >
                      Send Resume
                    </button>
                    <div
                      className="modal fade"
                      id="sendresume"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <div className="apply-now">
                              <div className="overlay">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="main-content">
                                        <h2>
                                          Apply Now
                                        </h2>
                                        <form className="form">
                                          <div className="row top-area">
                                            <div className="col-sm-6">
                                              <div className=" single-input d-flex align-items-center">
                                                <div className="input-control">
                                                  <input
                                                    type="number"
                                                    className="input-field"
                                                    placeholder="Name"
                                                  />
                                                  <label className="input-label">
                                                    Name
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-sm-6">
                                              <div className=" single-input d-flex align-items-center">
                                                <div className="input-control">
                                                  <input
                                                    type="number"
                                                    className="input-field"
                                                    placeholder="Mobile number"
                                                  />
                                                  <label className="input-label">
                                                    Mobile number
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-sm-6">
                                              <div className=" single-input d-flex align-items-center">
                                                <div className="input-control">
                                                  <input
                                                    type="number"
                                                    className="input-field"
                                                    placeholder="Email Address"
                                                  />
                                                  <label className="input-label">
                                                    Email Address
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-sm-6">
                                              <div className=" single-input d-flex align-items-center">
                                                <div className="input-control">
                                                  <input
                                                    type="number"
                                                    className="input-field"
                                                    placeholder="Linkedin Profile"
                                                  />
                                                  <label className="input-label">
                                                    Linkedin Profile
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="upload-req">
                                            <label htmlFor="attach">
                                              <span className="smr">
                                                Attach Resume
                                              </span>
                                            </label>
                                            <input type="file" id="attach" />
                                            <span className="smr">
                                              You can attach files of size up to
                                              5 MB
                                            </span>
                                          </div>
                                          <button className="cmn-btn">
                                            Get started
                                          </button>
                                        </form>
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
            </div>
          </div>
        </section>
        {/* Send Resume In end */}
        {/* Footer Area Start */}
        <Footer />
        {/* Footer Area End */}
      </div>
    </>
  );
}
export default CareerPage;
