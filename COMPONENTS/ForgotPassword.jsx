import React from 'react';
import '../Forgot Password/Style.css';
import leftIcon from '../Assests/left-icon.png';
import logo from '../Assests/logoNew.png';
import forgotPswrd from '../Assests/forgot-pwd-2-Illus.png';
import forgotIllus from '../Assests/forgot-password-Illus.png';
import { Link } from "react-router-dom";
// import axios from 'axios';


function ForgotPassword() {

    return (
        <>

            <div>

                <section className="log-reg forgot-pws reset-pws two">
                    <div className="overlay pb-120">
                        <div className="container">
                            <div className="top-head-area">
                                <div className="row d-flex align-items-center">
                                    <div className="col-sm-5 col">
                                        <a  href="abc" className="back-home" 
                                       >
                                            <img src={leftIcon} alt="abc" />
                                            Back To Bharattech
                                        </a>
                                    </div>
                                    <div className="col-sm-5 col">
                                        <a href="abc">
                                            <img style={{height:"40px"}} src={logo} alt="abc" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-5 d-flex align-items-end">
                                    <div className="img-area">
                                        <img src={forgotPswrd} alt="abc" />
                                    </div>
                                </div>
                                <div className="col-lg-6 z-1 text-center d-flex align-items-center">
                                    <div className="form-box">
                                        <div className="icon-area">
                                            <img src={forgotIllus} alt="abc" />
                                        </div>
                                        <h4>Forgot your password?</h4>
                                        <p>To reset your password, enter the email address that you used to set up your Bharattech account. We'll send you a link to help you get back into your account.</p>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-input d-flex align-items-center">
                                                        <input 
                                                        //   onChange={handleChange}
                                                          name="email"
                                                          type="email"
                                                          placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-area">
                                                <button
                                                    // onClick={forgotApi} 
                                                    type='button'
                                                    disabled
                                                 className="cmn-btn">Recover Password</button>
                                            </div>
                                        </form>
                                        <p 
                                        className="back-login dont-acc">
                                            Go back to   
                                            <Link to='/login'> < a> Login</a> </Link>
                                            </p>
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
export default ForgotPassword;