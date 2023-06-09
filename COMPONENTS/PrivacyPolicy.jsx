import React from "react";

import "./Style.css";
import protectingPrivacy from "../Assests/protecting-privacy.png";
import privacyCookies from "../Assests/privacy-cookies.png";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
<section className="banner-section inner-pages privacy-policy">
        <div className="overlay">
          <div className="banner-content pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <h1>privacy policy</h1>
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
                            Privacy Policy
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
                <div className="top-area">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="icon-area">
                        <img src={protectingPrivacy} alt="img" />
                      </div>
                      <h2 className="text-uppercase">
                        We are committed to protecting your privacy
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner-section end --> */}

      {/* <!-- Privacy Content In start --> */}
      <section className="privacy-content">
        <div className="overlay pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="top-wrapper">
                  <h4>Types of Data Collected.</h4>

                  <ul>
                    <li>
                      <h5>• Personal Data</h5>
                      While using Our Service, We may ask You to provide Us with
                      certain personally identifiable information that can be
                      used to contact or identify You. Personally identifiable
                      information may include, but is not limited to: Email
                      address First name and last name Phone number Address,
                      State, Province, ZIP/Postal code, City Usage Data
                    </li>
                    <li>
                      <h5>• Usage Data</h5>
                      Usage Data is collected automatically when using the
                      Service. Usage Data may include information such as Your
                      Device's Internet Protocol address (e.g. IP address),
                      browser type, browser version, the pages of our Service
                      that You visit, the time and date of Your visit, the time
                      spent on those pages, unique device identifiers and other
                      diagnostic data. When You access the Service by or through
                      a mobile device, We may collect certain information
                      automatically, including, but not limited to, the type of
                      mobile device You use, Your mobile device unique ID, the
                      IP address of Your mobile device, Your mobile operating
                      system, the type of mobile Internet browser You use,
                      unique device identifiers and other diagnostic data. We
                      may also collect information that Your browser sends
                      whenever You visit our Service or when You access the
                      Service by or through a mobile device.
                    </li>
                    <li>
                      <h5>
                      • Information from Third-Party Social Media Services
                      </h5>
                      The Company allows You to create an account and log in to
                      use the Service through the following Third-party Social
                      Media Services:
                      <ul>
                        <li>• Google</li>
                        <li>• Facebook</li>
                        <li>• Twitter</li>
                        <li>• Linkedin</li>
                      </ul>
                      If You decide to register through or otherwise grant us
                      access to a Third-Party Social Media Service, We may
                      collect Personal data that is already associated with Your
                      Third-Party Social Media Service's account, such as Your
                      name, Your email address, Your activities or Your contact
                      list associated with that account.
                    </li>
                    
                  </ul>
                  
                  <div className="safe-data">
                    <h4>Your data is safe with us.</h4>
                    <p>
                      The Company will take all steps reasonably necessary to
                      ensure that Your data is treated securely and in
                      accordance with this Privacy Policy and no transfer of
                      Your Personal Data will take place to an organization or a
                      country unless there are adequate controls in place
                      including the security of Your data and other personal
                      information.
                    </p>
                    <h5>• Retention of Your Personal Data</h5>
                    <p>
                      The Company will retain Your Personal Data only for as
                      long as is necessary for the purposes set out in this
                      Privacy Policy. We will retain and use Your Personal Data
                      to the extent necessary to comply with our legal
                      obligations (for example, if we are required to retain
                      your data to comply with applicable laws), resolve
                      disputes, and enforce our legal agreements and policies.
                      The Company will also retain Usage Data for internal
                      analysis purposes. Usage Data is generally retained for a
                      shorter period of time, except when this data is used to
                      strengthen the security or to improve the functionality of
                      Our Service, or We are legally obligated to retain this
                      data for longer time periods.
                    </p>
                    <h5>• Transfer of Your Personal Data</h5>
                    <p>
                      Your information, including Personal Data, is processed at
                      the Company's operating offices and in any other places
                      where the parties involved in the processing are located.
                      It means that this information may be transferred to — and
                      maintained on — computers located outside of Your state,
                      province, country or other governmental jurisdiction where
                      the data protection laws may differ than those from Your
                      jurisdiction.
                    </p>
                   
                  </div>
                  <div className="cookies">
                    <h4>Tracking Technologies and Cookies</h4>
                    <p>
                      We use Cookies and similar tracking technologies to track
                      the activity on Our Service and store certain information.
                      Tracking technologies used are beacons, tags, and scripts
                      to collect and track information and to improve and
                      analyze Our Service. The technologies We use may include:
                    </p>
                    <ul>
                      <li>
                        <h5>• Cookies or Browser Cookies.</h5>A cookie is a
                        small file placed on Your Device. You can instruct Your
                        browser to refuse all Cookies or to indicate when a
                        Cookie is being sent. However, if You do not accept
                        Cookies, You may not be able to use some parts of our
                        Service. Unless you have adjusted Your browser setting
                        so that it will refuse Cookies, our Service may use
                        Cookies.
                      </li>
                      <li>
                        <h5>• Web Beacons</h5>. Certain sections of our Service
                        and our emails may contain small electronic files known
                        as web beacons (also referred to as clear gifs, pixel
                        tags, and single-pixel gifs) that permit the Company,
                        for example, to count users who have visited those pages
                        or opened an email and for other related website
                        statistics (for example, recording the popularity of a
                        certain section and verifying system and server
                        integrity).
                      </li>
                    </ul>
                    <p>
                      Cookies can be "Persistent" or "Session" Cookies.
                      Persistent Cookies remain on Your personal computer or
                      mobile device when You go offline, while Session Cookies
                      are deleted as soon as You close Your web browser. Learn
                      more about cookies on the Free Privacy Policy website
                      article
                    </p>
                    <div className="img-area text-center text-md-start">
                      <img src={privacyCookies} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  );
}

export default PrivacyPolicy;
