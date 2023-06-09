import React from "react";
import facebook from '../Assests/facebook.png';
import twitter from '../Assests/twitter.png';
import instagram from '../Assests/instagram.png';
import linkedin from '../Assests/linkedin.png';
import { Link } from "react-router-dom";

export default function Footer()
{   
    return(
        <>
          <footer className="footer-section">
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row wrapper">
                <div className="col-lg-3 col-md-6">
                  <div className="single-area">
                    <h5>COMPANY</h5>
                    <ul className="items">
                      <Link to ="/about-us"> <li><a  href="abc" >About Us</a></li></Link>
                      <br />
                      <Link to ="/contact-us"> <li><a href="abc" >Contact Us</a></li></Link>
                      <br />
                      <Link to ="/ourteam"> <li><a href="abc">Management Team</a></li></Link>
                      <br />
                      <Link to ="/careers"> <li><a href="abc">Careers</a></li></Link>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-area">
                    <h5>Solutions</h5>
                    <ul className="items">
                      <li><a href="abc">BCode</a></li>
                      <li><a href="abc">BSearch</a></li>
                      <li><a href="abc">Open Source</a></li>
                      <li><a href="abc">BMail</a></li>
                      
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="single-area">
                    <h5>Support</h5>
                    <ul className="items">
                    <Link to ="/contact-us"> <li><a href="abc" >Help centre</a></li></Link>
                      
                      
                      <li><a href="#faqss">FAQs</a></li>
                      
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-area">
                    <h5>Subscribe to our news</h5>
                    <p>Get the latest happenings and tips from Bharattech</p>
                 
                    <div className="social">
                      <ul className="d-flex">
                        <li><a href="https://www.facebook.com/Bharattech.org?mibextid=ZbWKwL" ><img src={facebook} alt="icon" /></a></li>
                        <li><a href="https://twitter.com/Bharattech_in?t=uzn9R2m0VjODFOXc5DsTmA&s=09" ><img src={twitter} alt="icon" /></a></li>
                        <li><a href="https://www.instagram.com/bharattech_org/" ><img src={instagram} alt="icon" /></a></li>
                        <li><a href="https://www.linkedin.com/company/bharattech/" ><img src={linkedin} alt="icon" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="main-content">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-8 cus-order d-flex justify-content-md-start justify-content-center">
                    <div className="left-area">
                      <p className="mdr">Bharattech Techecosystem Pvt. Ltd. © 2023. ALL RIGHTS RESERVED. 
                        
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
                    <div className="right-area">
                      <select name="lang">
                        <option value="en">English</option>
                        <option value="bn">Bangla</option>
                        <option value="hn">Hindi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}