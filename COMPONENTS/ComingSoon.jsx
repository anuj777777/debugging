import React from "react";
import logo from "../Assests/logoNew.png";
import facebook from "../Assests/facebook.png";
import twitter from "../Assests/twitter.png";
import instagram from "../Assests/instagram.png";
import linkedin from "../Assests/linkedin.png";
import "./css/bd-coming-soon.css";
import side from "../Assests/mass-payments-secure.png";

export default function ComingSoon() {
  return (
    <>
      <body class="min-vh-100 d-flex flex-column">
        <header>
          <div class="container">
            <nav class="navbar navbar-dark bg-transparenet">
              <a   class="navbar-brand" href="/">
                <img src={logo} alt="logo" />
              </a>
              
              <a href="mailto:info@bharat-tech.org">
                <span class="navbar-text d-none d-sm-inline-block">
                    info@bharat-tech.org
                </span>
              </a>
            </nav>
          </div>
        </header>
        <section className="affiliate-section">
          <div className="overlay pt-120">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 d-flex justify-content-center">
                  <div className="left-area">
                    <img src={side} alt="abc" />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="section">
                    <h2 className="title">
                      This Service will be available soon..
                    </h2>
                    <p>Stay connected</p>
                    <nav class="footer-social-links">
                      <a
                        href="https://www.facebook.com/Bharattech.org?mibextid=ZbWKwL"
                        class="social-link"
                      >
                        <img src={facebook} alt="icon" />{" "}
                      </a>
                      <a
                        href="https://twitter.com/Bharattech_in?t=uzn9R2m0VjODFOXc5DsTmA&s=09"
                        class="social-link"
                      >
                        <img src={twitter} alt="icon" />{" "}
                      </a>
                      <a
                        href="https://www.instagram.com/bharattech_org/"
                        class="social-link"
                      >
                        <img src={instagram} alt="icon" />{" "}
                      </a>
                      <a
                        href="https://www.linkedin.com/company/bharattech/"
                        class="social-link"
                      >
                        <img src={linkedin} alt="icon" />{" "}
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
