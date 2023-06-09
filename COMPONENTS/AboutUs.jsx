import React from "react";
import "./Style.css";
import { useEffect } from "react";

import aboutusBanner from "../Assests/about-us-banner.png";
import aboutBannerIcon1 from "../Assests/about-banner-icon1.png";
import aboutBannerIcon2 from "../Assests/about-banner-icon2.png";
import aboutBannerIcon3 from "../Assests/about-banner-icon3.png";
import aboutBannerIcon4 from "../Assests/about-banner-icon4.png";
import rectangleGlobe from "../Assests/rectangle-globe.png";
import ourVision from "../Assests/our-vision-img.png";
import ourValuesIcon1 from "../Assests/our-values-icon-1.png";
import ourValuesIcon2 from "../Assests/our-values-icon-2.png";
import ourValuesIcon3 from "../Assests/our-values-icon-3.png";
import ourValuesIcon4 from "../Assests/our-values-icon-4.png";
import teamMember1 from "../Assests/team-member-1.png";
import teamMember2 from "../Assests/team-member-2.png";
import teamMember3 from "../Assests/team-member-3.png";
import teamMember4 from "../Assests/team-member-4.png";
import AwardIcon from "../Assests/award-icon.png";
import Header from "./Header";
import Footer from "./Footer";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* <!-- header-section end --> */}

      {/* <!-- banner-section start --> */}
      <section className="banner-section inner-pages about-us">
        <div className="overlay">
          <div className="banner-content pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <h1>About Us</h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-flex align-items-center">
                          <li className="breadcrumb-item">
                            <a href="abc">Home</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            About Us
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
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <img src={aboutusBanner} alt="img" />
                      <h2>THE COMPLETE TECH-ECOSYSTEM POWERED WITH AI</h2>
                      <p>
                        Welcome to BharatTech. We are India’s first indigenously
                        developed AI based tech-ecosystem. We develop and
                        provide AI based services which are designed to ease the
                        work of businesses, connecting their work on its
                        platform so that they can access the data to integrate
                        and bring efficiency to their work. BharatTech is a tech
                        ecosystem for the people around the globe to giving them
                        a safe and secured platform that does not uses user’s
                        data inappropriately for their profit. We are working to
                        provide high level of services free of cost to the every
                        user.
                      </p>
                      <p>
                        The services are interconnected making it easier for the
                        user to get their requirement fulfilled at one place
                        instead of going to different services and sorting out
                        multiple options. The AI allows users to get the
                        preferred and best option easily.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row bottom-content">
                  <div className="col-xl-3 col-md-6">
                    <div className="single-item d-flex align-items-center">
                      <div className="icon">
                        <img src={aboutBannerIcon1} alt="img" />
                      </div>
                      <div className="text-area">
                        <h3>100</h3>
                        <p>Country</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="single-item d-flex align-items-center">
                      <div className="icon">
                        <img src={aboutBannerIcon2} alt="img" />
                      </div>
                      <div className="text-area">
                        <h3>40+</h3>
                        <p>Languages</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="single-item d-flex align-items-center">
                      <div className="icon">
                        <img src={aboutBannerIcon3} alt="img" />
                      </div>
                      <div className="text-area">
                        <h3>95%</h3>
                        <p>Satisfaction</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="single-item d-flex align-items-center b-none">
                      <div className="icon">
                        <img src={aboutBannerIcon4} alt="img" />
                      </div>
                      <div className="text-area">
                        <h3>24/7</h3>
                        <p>Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- banner-section end --> */}

      {/* <!-- Get Started In start --> */}
      <section className="get-started-section about-us">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 col-md-7">
                <div className="section-header">
                  <h2 className="title">Our Mission</h2>
                  <p>
                    We are rooted with the idea of self reliant India and hence,
                    it is our mission to provide the world a comprehensive and
                    complete tech ecosystem from the land of great people. We
                    are also focused in creating employment for the youth making
                    India a tech hub in the IT sector.
                  </p>
                  <a  href="abc" className="cmn-btn">Get your free account</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-5">
                <div className="img-area">
                  <img src={rectangleGlobe} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Get Started In end --> */}

      {/* <!-- Our Mission In start --> */}
      <section className="our-mission">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 d-flex align-items-center">
                <div className="section-header">
                  <h2 className="title">Our vision is</h2>
                  <p>
                    We are looking forward where we not only value the service
                    but also look after the well being of both user and the
                    service provider. We also aim to develop the society that is
                    striving to move ahead and set up new goals to meet the
                    greatness of the civilization.
                  </p>
                  <a href="abc" className="cmn-btn">Join Bharattech</a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img-area">
                  <img src={ourVision} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Mission In end --> */}

      {/* <!-- Call Action In start --> */}
      <section className="call-action-inner about-us">
        <div className="overlay pt-120">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 d-flex justify-content-center">
                <div className="section-header text-center">
                  <h2>Our Values</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="bottom-area">
                  <div className="row cus-mar justify-content-center">
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={ourValuesIcon1} alt="icon" />
                        </div>
                        <h6>100% Execution</h6>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={ourValuesIcon2} alt="icon" />
                        </div>
                        <h6>Team work</h6>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={ourValuesIcon3} alt="icon" />
                        </div>
                        <h6>Growth</h6>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="single-item text-center">
                        <div className="icon">
                          <img src={ourValuesIcon4} alt="icon" />
                        </div>
                        <h6>Transparency</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Call Action In end --> */}

      {/* <!-- Team Member In start --> */}
      <section className="team-member">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 d-flex justify-content-center">
                <div className="section-header text-center">
                  <h2 className="title">Meet the amazing team</h2>
                  <p>
                    We are a team of entrepreneurs, open source specialists and
                    classifying enthusiasts. Dedicated to simplify Indian
                    technology for businesses and public.
                  </p>
                </div>
              </div>
            </div>
            <div className="row cus-mar">
              <div className="col-lg-3 col-md-6">
                <div className="single-item">
                  <img src={teamMember1} alt="icon" />
                  <div className="text-area">
                    <h6>Mark Price</h6>
                    <span className="smr">CEO & Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item">
                  <img src={teamMember2} alt="icon" />
                  <div className="text-area">
                    <h6>Abel Rivera</h6>
                    <span className="smr">CEO & Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item">
                  <img src={teamMember3} alt="icon" />
                  <div className="text-area">
                    <h6>Paul Ryan</h6>
                    <span className="smr">CEO & Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item">
                  <img src={teamMember4} alt="icon" />
                  <div className="text-area">
                    <h6>Erika Silva</h6>
                    <span className="smr">CEO & Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team Member In end --> */}

      {/* <!-- Careers In start --> */}
      <section className="call-action-inner careers">
        <div className="overlay pt-120">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 d-flex justify-content-center">
                <div className="section-header text-center">
                  <h2>CAREERS</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="bottom-area text-center">
                  <h4>Want to be part of the Bharattech team?</h4>
                  <a href="abc" className="cmn-btn">Check open positions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Careers In end --> */}

      {/* <!-- Awards In start --> */}
      <section className="awards-section">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-header sticky-top">
                  <h3>Awards</h3>
                  <p>
                  BharatTech is setting up  the legacy for the tech startups in different forums
                  </p>
                </div>
              </div>
              <div className="col-lg-7 cus-mar">
                <div className="single-item d-flex align-items-center">
                  <div className="single-item d-flex align-items-center">
                    <div className="img-area">
                      <img src={AwardIcon} alt="icon" />
                    </div>
                    <div className="text-area">
                      <h3>2023</h3>
                      <h5>Uttar Pradesh Global Investor Summit</h5>
                      <p>Launching of BSearch  by PM Shri Narendra Modi and credited among top tech-startups in the state.</p>
                    </div>
                  </div>
                </div>
                <div className="single-item d-flex align-items-center">
                  <div className="img-area">
                    <img src={AwardIcon} alt="icon" />
                  </div>
                  <div className="text-area">
                    <h3>2021</h3>
                    <h5>India Israel Innovation Summit</h5>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                  </div>
                </div>
                <div className="single-item d-flex align-items-center">
                  <div className="img-area">
                    <img src={AwardIcon} alt="icon" />
                  </div>
                  <div className="text-area">
                    <h3>2021</h3>
                    <h5>All India Arambh Summit</h5>
                    <p>Awarded 1st prize for startup showcase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Awards In end --> */}

      {/* <!-- Footer Area Start --> */}
      <Footer />
      {/* <!-- Footer Area End --> */}
    </>
  );
}

export default AboutUs;
