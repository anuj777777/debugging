import React from "react";
import "./Style.css";
import leftIcon from '../Assests/left-icon.png';
import image from '../Assests/logoNew.png'
import google from '../Assests/google.png';
import fb from '../Assests/fb.png';
import registerbg from '../Assests/register-illus.png';
import showhide from '../Assests/show-hide.png'
import { Link } from "react-router-dom";
function RegisterPage() {
  
  return (

    <>
      <div>

        <section className="log-reg register">
          <div className="overlay">
            <div className="container">
              <div className="top-head-area">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-5 col">
                    <Link to="/"> <a href="abc" className="back-home" >
                      <img src={leftIcon} alt="abc" />
                      Back To Bharattech
                    </a></Link>

                  </div>
                  <div className="col-sm-5 col">
                    <a href="abc" >
                      <img style={{height:"40px"}} src={image} alt="abc" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                  <div className="img-area">
                    <img src={registerbg} alt="abc" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 z-1 text-center d-flex justify-content-center pb-120">
                  <div className="form-box">
                    <h4>Register with Bharattech</h4>
                    <p className="alr-acc dont-acc">Already have an account? <Link to="/login"><a href="abc">Log in now.</a></Link></p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="personal-tab" data-bs-toggle="tab" data-bs-target="#personal" type="button" role="tab" aria-controls="personal" aria-selected="true">Personal</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="business-tab" data-bs-toggle="tab" data-bs-target="#business" type="button" role="tab" aria-controls="business" aria-selected="false">Business</button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                        <form action="#">
                          <div className="row">
                            <div className="col-6">
                              <div className="single-input d-flex align-items-center">
                                <input
                                  //  onChange={handleChange}
                                  className="input"
                                  type="name"
                                  name="firstname"
                                  placeholder="First Name" />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="single-input d-flex align-items-center">
                                <input
                                  // onChange={handleChange}
                                  className="input"
                                  type="name"
                                  name="lastname"
                                  placeholder="Last Name" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <input
                                  // onChange={handleChange}
                                  name="email"
                                  type="email"

                                  placeholder="Email" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <input
                                  // onChange={handleChange}

                                  name="password"
                                  type="password"
                                  className="passInput"
                                  placeholder="Password" />
                                <img className="showPass" src={showhide} alt="abc" />
                              </div>
                            </div>
                          </div>
                          <div className="remember-forgot d-flex justify-content-between">
                            <div className="form-group d-flex">
                              <div className="checkbox_wrapper">
                                <input className="check-box" id="check1" type="checkbox" />
                                <label />
                              </div>
                              <label htmlFor="check1"><span className="check_span">Remember Me</span></label>
                            </div>
                            <div className="forget-pw">
                             <Link to ="/forgot-password"> <a href="abc" >Forgot your password?</a></Link>
                             
                            </div>
                          </div>
                          <div className="btn-area">
                            <button
                              //  onClick={signUpApi}
                              type="button"
                            disabled
                              className="cmn-btn">Register Now</button>
                          </div>
                        </form>
                        <div className="bottom-area">
                          <div className="continue"><p>Or continue with</p></div>
                          <div className="login-with d-flex align-items-center">
                            <a  href="abc"><img src={google} alt="abc" /></a>
                            <a href="abc"><img src={fb} alt="abc" /></a>
                          </div>
                        </div>
                        <div className="privacy">
                          <p>By registering you accept our 
                            <Link to='/TermsAndConditions'> <a href="abc">Terms &amp; Conditions</a></Link>
                           
                             and 
                             <Link to='/privacy'><a href="abc">Privacy Policy</a></Link>
                             </p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
                        <form action="#">
                          <div className="row">
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <select>
                                  <option value={1}>Select Your Country</option>
                                  <option value={2}>United State</option>
                                  <option value={3}>United kingdom</option>
                                  <option value={4}>Canada</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <input type="email" placeholder="Business email" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="single-input country-code d-flex align-items-center">
                                <select>
                                  <option value={1}>+ 44</option>
                                  <option value={2}>+ 82</option>
                                  <option value={2}>+ 34</option>
                                </select>
                                <input type="number" placeholder="0000 000000" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <input type="password" className="passInput" placeholder="Password" />
                                <img className="showPass" src="assets/img/show-hide.png" alt="abc" />
                              </div>
                            </div>
                          </div>
                          <div className="btn-area">
                            <button
                            type="button"
                            disabled
                             className="cmn-btn">Register Now</button>
                          </div>
                        </form>
                        <div className="bottom-area">
                          <div className="continue"><p>Or continue with</p></div>
                          <div className="login-with d-flex align-items-center">
                            <a href="abc" ><img src="assets/img/google.png" alt="abc" /></a>
                            <a href="abc"><img src="assets/img/fb.png" alt="abc" /></a>
                          </div>
                        </div>
                        <div className="privacy">
                          <p>By registering you accept our <a href="abc">Terms &amp; Conditions</a> and <a >Privacy Policy</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>




    </>
  )
}
export default RegisterPage;