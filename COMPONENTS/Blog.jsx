import React from "react";

import rightIcon from "../Assests/right-icon-5.png";
import blogProfile from "../Assests/blog-profile.png";
import blogBannerIllu from "../Assests/blog-banner-illu.png";
import latestArticle1 from "../Assests/latest-articles-1.png";
import latestArticle2 from "../Assests/latest-articles-2.png";
import latestArticle3 from "../Assests/latest-articles-3.png";
import latestArticle4 from "../Assests/latest-articles-4.png";
import latestArticle5 from "../Assests/latest-articles-5.png";
import latestArticle6 from "../Assests/latest-articles-6.png";
import leftIcon from "../Assests/icon-left.png";
import iconRight from "../Assests/icon-right.png";
import Header from "./Header";
import Footer from "./Footer";
import "./Style.css";
import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* <!-- header-section end --> */}

      {/* <!-- banner-section start --> */}
      <section className="banner-section inner-pages blog">
        <div className="overlay">
          <div className="banner-content pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <h1>Blog</h1>
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
                            Blog
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
        <div className="banner-bottom-area">
          <div className="container">
            <div className="top-area">
              <div className="row align-items-center">
                <div className="col-lg-7 cus-z text-start">
                  <div className="profile-area d-flex justify-content-between align-items-center">
                    <div className="profile-left d-flex align-items-center">
                      <div className="profile">
                        <img src={blogProfile} alt="img" />
                      </div>
                      <h5>Elena Luna</h5>
                    </div>
                    <div className="profile-right">
                      <p className="mdr">July 21, 2021</p>
                    </div>
                  </div>
                  <a href="abc">
                    <h3>
                      Is it worth to have indigenous tech-ecosystem today?
                    </h3>
                  </a>
                  <p>
                    When the world is flourished with top tech companies still
                    we lack the base for us
                  </p>
                  <a href="abc">
                    Read More <img src={rightIcon} alt="img" />
                  </a>
                  <div
                    className="inputBox"
                    style={{ padding: "40px 10px 12px" }}
                  >
                    <form>
                      <input
                        type="text"
                        placeholder="Write an article.."
                        style={{
                          padding: "10px 10px 50px 12px",
                          width: "100%",
                          boxSizing: "border-box",
                          border: "1.5px solid #5732C6",
                          borderRadius: "10px",
                          fontSize: "16px",
                        }}
                      />
                      <button
                        type="button"
                        disabled
                        style={{ marginTop: "5%" }}
                        className="cmn-btn"
                        //   type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-5 cus-z">
                  <img className="right-illu" src={blogBannerIllu} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner-section end --> */}

      {/* <!-- Latest Articles In start --> */}
      <section className="latest-articles">
        <div className="overlay pt-120 pb-120">
          <div className="container">
            <div className="section-header">
              <div className="row justify-content-between">
                <div className="col-xl-6">
                  <h2 className="title">Latest Articles</h2>
                </div>
                <div className="col-xl-6 d-flex justify-content-xl-end justify-content-start">
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
                        id="resources-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#resources"
                        type="button"
                        role="tab"
                        aria-controls="resources"
                        aria-selected="false"
                      >
                        BSearch
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="finance-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#finance"
                        type="button"
                        role="tab"
                        aria-controls="finance"
                        aria-selected="false"
                      >
                        B#Code
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="crypto-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#crypto"
                        type="button"
                        role="tab"
                        aria-controls="crypto"
                        aria-selected="false"
                      >
                        Events
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="all"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <div className="row cus-mar">
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle1} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Is it worth to have indigenous tech-ecosystem
                                today?
                              </h5>
                            </a>
                            <p>
                              When the world is flourished with top tech
                              companies still we lack the base for us. We have
                              ..................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle2} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                What impact can a AI based search engine will
                                make in the Indian IT sector?
                              </h5>
                            </a>
                            <p>
                              What impact can a AI based search engine will make
                              in the Indian IT sector?
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle3} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Why do we need a huge number of people who
                                understand AI?
                              </h5>
                            </a>
                            <p>
                              Artificial Intelligence is the need of hour. The
                              machinery of working and managing the daily tasks
                              have improved according to......................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle4} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Does reliability accounts only when the services
                                are up to date?
                              </h5>
                            </a>
                            <p>
                              Delivering data on time and flexibility improves
                              customer relationship but is something hidden in
                              bigger picture whose true nature yet to be
                              unveiled.........................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle5} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                The Clouds are safe to keep data or they are
                                dark inside?
                              </h5>
                            </a>
                            <p>
                              The security is at the service provider’s
                              discretion but is it truly with them or do others
                              have influence over it, reviewing the
                              data.............
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle6} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                What monitors the security? Who are the guards?
                                Whom do they serve?
                              </h5>
                            </a>
                            <p>
                              The security is generally managed by a series of
                              layers that are interwoven. In general terms a key
                              is required to break every lock and passing
                              into...........................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-8">
                        <nav aria-label="Page navigation">
                          <ul className="pagination">
                            <li className="page-item">
                              <a href="abc" className="page-link" aria-label="Previous">
                                <img src={leftIcon} alt="icon" />
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link active">
                                <h5>1</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>2</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>3</h5>
                              </a>
                            </li>
                            <li className="page-dots">...</li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>7</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>8</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>9</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link" aria-label="Next">
                                <img src={iconRight} alt="icon" />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="resources"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <div className="row cus-mar">
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle1} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Is it worth to have indigenous tech-ecosystem
                                today?
                              </h5>
                            </a>
                            <p>
                              When the world is flourished with top tech
                              companies still we lack the base for us. We have
                              ..................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle2} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                What impact can a AI based search engine will
                                make in the Indian IT sector?
                              </h5>
                            </a>
                            <p>
                              What impact can a AI based search engine will make
                              in the Indian IT sector?
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle3} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Why do we need a huge number of people who
                                understand AI?
                              </h5>
                            </a>
                            <p>
                              Artificial Intelligence is the need of hour. The
                              machinery of working and managing the daily tasks
                              have improved according to......................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle4} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Does reliability accounts only when the services
                                are up to date?
                              </h5>
                            </a>
                            <p>
                              Delivering data on time and flexibility improves
                              customer relationship but is something hidden in
                              bigger picture whose true nature yet to be
                              unveiled.........................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle5} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                The Clouds are safe to keep data or they are
                                dark inside?
                              </h5>
                            </a>
                            <p>
                              The security is at the service provider’s
                              discretion but is it truly with them or do others
                              have influence over it, reviewing the
                              data.............
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle6} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                What monitors the security? Who are the guards?
                                Whom do they serve?
                              </h5>
                            </a>
                            <p>
                              The security is generally managed by a series of
                              layers that are interwoven. In general terms a key
                              is required to break every lock and passing
                              into...........................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-8">
                        <nav aria-label="Page navigation">
                          <ul className="pagination">
                            <li className="page-item">
                              <a href="abc" className="page-link" aria-label="Previous">
                                <img src={leftIcon} alt="icon" />
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link active">
                                <h5>1</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>2</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>3</h5>
                              </a>
                            </li>
                            <li className="page-dots">...</li>
                            <li className="page-item">
                              <a  href="abc" className="page-link">
                                <h5>7</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>8</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>9</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a  href="abc" className="page-link" aria-label="Next">
                                <img src={iconRight} alt="icon" />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="finance"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <div className="row cus-mar">
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle1} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Is it worth to have indigenous tech-ecosystem
                                today?
                              </h5>
                            </a>
                            <p>
                              When the world is flourished with top tech
                              companies still we lack the base for us. We have
                              ..................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle2} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                What impact can a AI based search engine will
                                make in the Indian IT sector?
                              </h5>
                            </a>
                            <p>
                              What impact can a AI based search engine will make
                              in the Indian IT sector?
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle3} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Why do we need a huge number of people who
                                understand AI?
                              </h5>
                            </a>
                            <p>
                              Artificial Intelligence is the need of hour. The
                              machinery of working and managing the daily tasks
                              have improved according to......................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle4} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Does reliability accounts only when the services
                                are up to date?
                              </h5>
                            </a>
                            <p>
                              Delivering data on time and flexibility improves
                              customer relationship but is something hidden in
                              bigger picture whose true nature yet to be
                              unveiled.........................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle5} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                The Clouds are safe to keep data or they are
                                dark inside?
                              </h5>
                            </a>
                            <p>
                              The security is at the service provider’s
                              discretion but is it truly with them or do others
                              have influence over it, reviewing the
                              data.............
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle6} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                What monitors the security? Who are the guards?
                                Whom do they serve?
                              </h5>
                            </a>
                            <p>
                              The security is generally managed by a series of
                              layers that are interwoven. In general terms a key
                              is required to break every lock and passing
                              into...........................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-8">
                        <nav aria-label="Page navigation">
                          <ul className="pagination">
                            <li className="page-item">
                              <a href="abc" className="page-link" aria-label="Previous">
                                <img src={leftIcon} alt="icon" />
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link active">
                                <h5>1</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>2</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>3</h5>
                              </a>
                            </li>
                            <li className="page-dots">...</li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>7</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>8</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>9</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link" aria-label="Next">
                                <img src={iconRight} alt="icon" />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="crypto"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <div className="row cus-mar">
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle1} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Is it worth to have indigenous tech-ecosystem
                                today?
                              </h5>
                            </a>
                            <p>
                              When the world is flourished with top tech
                              companies still we lack the base for us. We have
                              ..................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle2} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                What impact can a AI based search engine will
                                make in the Indian IT sector?
                              </h5>
                            </a>
                            <p>
                              What impact can a AI based search engine will make
                              in the Indian IT sector?
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle3} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Why do we need a huge number of people who
                                understand AI?
                              </h5>
                            </a>
                            <p>
                              Artificial Intelligence is the need of hour. The
                              machinery of working and managing the daily tasks
                              have improved according to......................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle4} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                Does reliability accounts only when the services
                                are up to date?
                              </h5>
                            </a>
                            <p>
                              Delivering data on time and flexibility improves
                              customer relationship but is something hidden in
                              bigger picture whose true nature yet to be
                              unveiled.........................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle5} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                The Clouds are safe to keep data or they are
                                dark inside?
                              </h5>
                            </a>
                            <p>
                              The security is at the service provider’s
                              discretion but is it truly with them or do others
                              have influence over it, reviewing the
                              data.............
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc"> 
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-area">
                          <div className="top-item">
                            <img src={latestArticle6} alt="img" />
                          </div>
                          <div className="bottom-item">
                            <a href="abc">
                              <h5>
                                What monitors the security? Who are the guards?
                                Whom do they serve?
                              </h5>
                            </a>
                            <p>
                              The security is generally managed by a series of
                              layers that are interwoven. In general terms a key
                              is required to break every lock and passing
                              into...........................
                            </p>
                            <div className="date-area d-flex justify-content-between">
                              <a href="abc">
                                Read More <img src={rightIcon} alt="img" />
                              </a>
                              <p className="mdr">July 21, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-8">
                        <nav aria-label="Page navigation">
                          <ul className="pagination">
                            <li className="page-item">
                              <a href="abc" className="page-link" aria-label="Previous">
                                <img src={leftIcon} alt="icon" />
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link active">
                                <h5>1</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>2</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>3</h5>
                              </a>
                            </li>
                            <li className="page-dots">...</li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>7</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link">
                                <h5>8</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a  href="abc" className="page-link">
                                <h5>9</h5>
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="abc" className="page-link" aria-label="Next">
                                <img src={iconRight} alt="icon" />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Latest Articles In end --> */}

      {/* <!-- Footer Area Start --> */}
      <Footer />
      {/* <!-- Footer Area End --> */}
    </>
  );
}

export default Blog;
