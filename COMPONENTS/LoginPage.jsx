import React from "react";
import { Link } from "react-router-dom";
import image from "../Assests/logoNew.png";
import leftIcon from "../Assests/left-icon.png";
import "../Login/Style.css";
import "../Assests/bootstrap.min.css";
import google from "../Assests/google.png";
import fb from "../Assests/fb.png";
import showhide from "../Assests/show-hide.png";
import loginbg from "../Assests/login-bg-2.png";

function LoginPage() {

  return (
    <>
      <div>
        <section className="log-reg login-2">
          <div className="overlay">
            <div className="container">
              <div className="top-head-area">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-5 col">
                    <Link to="/">
                      <a 
                        style={{
                          fontSize: "20px",
                          color: "white",
                          fontWeight: "400",
                          textDecoration: "none",
                          outline: "none",
                          display: "inline-block",
                          lineHeight: "18px",
                        }}
                        className="back-home"
                        href
                      >
                        <img src={leftIcon} alt="abc" />
                        Back To Bharattech
                      </a>
                    </Link>
                  </div>
                  <div className="col-sm-5 col">
                    <a href="abc">
                      <img style={{height:"40px"}} src={image} alt="abc" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                  <div className="img-area">
                    <img src={loginbg} alt="abc" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 z-1 text-center d-flex justify-content-center pb-120">
                  <div className="form-box">
                    <h4 className="logintopaylio">Log in to Bharattech</h4>
                    <p className="dont-acc">
                      Don't have an account?
                      <Link to="/register">
                        <a href="abc">Register</a>
                      </Link>
                    </p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="personal-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#personal"
                          type="button"
                          role="tab"
                          aria-controls="personal"
                          aria-selected="true"
                        >
                          Employee
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
                          Business
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="personal"
                        role="tabpanel"
                        aria-labelledby="personal-tab"
                      >
                        <div className="login-with d-flex align-items-center">
                          <a href="abc" >
                            <img src={google} alt="abc" />
                          </a>
                          <a  href="abc">
                            <img src={fb} alt="abc" />
                          </a>
                        </div>
                        <div className="continue">
                          <p>Or continue with</p>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <input
                                  // onChange={handleChange}
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <input
                                  // onChange={handleChange}
                                  name="password"
                                  type="password"
                                  className="passInput"
                                  placeholder="Password"
                                />
                                <img
                                  className="showPass"
                                  src={showhide}
                                  alt="abc"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="remember-forgot d-flex justify-content-between">
                            <div className="form-group d-flex">
                              <div className="checkbox_wrapper">
                                <input
                                  className="check-box"
                                  id="check1"
                                  type="checkbox"
                                />
                                <label />
                              </div>
                              <label htmlFor="check1">
                                <span className="check_span">Remember Me</span>
                              </label>
                            </div>
                            <div className="forget-pw">
                            <Link to ="/forgot-password"> <a href="abc">Forgot your password?</a></Link>
                            </div>
                          </div>
                          <div className="btn-area">
                            <button
                            type="button"
                            disabled
                              // onClick={loginApi} 
                              className="cmn-btn">Log in</button>
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="business"
                        role="tabpanel"
                        aria-labelledby="business-tab"
                      >
                        <div className="login-with d-flex align-items-center">
                          <a href="abc">
                            <img src="assets/img/google.png" alt="abc" />
                          </a>
                          <a href="abc">
                            <img src="assets/img/fb.png" alt="abc" />
                          </a>
                        </div>
                        <div className="continue">
                          <p>Or continue with</p>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <input
                                  type="email"
                                  placeholder="Business email"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="single-input d-flex align-items-center">
                                <input
                                  type="password"
                                  className="passInput"
                                  placeholder="Password"
                                />
                                <img
                                  className="showPass"
                                  src={showhide}
                                  alt="abc"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="remember-forgot d-flex justify-content-between">
                            <div className="form-group d-flex">
                              <div className="checkbox_wrapper">
                                <input
                                  className="check-box"
                                  id="check2"
                                  type="checkbox"
                                />
                                <label />
                              </div>
                              <label htmlFor="check2">
                                <span className="check_span">Remember Me</span>
                              </label>
                            </div>
                            <div className="forget-pw">
                            <Link to ="/forgot-password"> <a  href="abc">Forgot your password?</a></Link>
                             
                            </div>
                          </div>
                          <div className="btn-area">
                            <button 
                            type="button"
                            disabled
                            className="cmn-btn">Log in</button>
                          </div>
                        </form>
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
  );
}
export default LoginPage;

