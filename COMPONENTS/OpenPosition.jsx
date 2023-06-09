import React from 'react';

import './Style.css';


import clockIcon from '../Assests/clock-icon.png';
import rightIcon1 from '../Assests/right-icon-1.png';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

function OpenPosition() {
    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);

    return (
        <>

            <Header />

            <section className="banner-section inner-pages open-positions">
                <div className="overlay">
                    <div className="banner-content pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-10">
                                    <div className="main-content">
                                        <h1>Open Positions</h1>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item">
                                                        <a href="abc">Home</a></li>
                                                    {/* <li className="breadcrumb-item">
                                                        <a>Pages</a></li> */}
                                                    <li className="breadcrumb-item active" aria-current="page">Open Positions</li>
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
                                    <h2 className="text-uppercase">Digital Marketing Lead</h2>
                                    <p className="xlr">Work Experience : 7 - 10 years </p>
                                    <a href="abc" className="cmn-btn">Apply Now</a>
                                    <div className="time-area d-flex align-items-center justify-content-center">
                                        <span>
                                            <img src={clockIcon} alt="img" />
                                            Full Time
                                        </span>
                                        <span className="date">Posted on: May 18, 2021</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-10 text-start">
                                        <div className="bottom-area">
                                            <div className="single">
                                                <h3>Job Description</h3>
                                                <p>Are you an experienced and ambitious Digital Marketing Lead / Manager looking for a new challenge and an opportunity to advance your career? If you are able to manage multiple projects simultaneously with tight deadlines, we have the perfect job for you! We are looking for a dynamic Digital Marketing Lead / Manager to lead our distribution marketing dream team and support them with his/her leadership and expertise in developing and executing our digital marketing strategy.</p>
                                            </div>
                                            <div className="single">
                                                <h3>Key Functional Areas of Responsibility</h3>
                                                <ul>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Plan and execute all digital marketing, including SEO/SEM, marketing database, email, social media and display advertising campaigns</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Design, build and maintain our social media presence</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Measure and report performance of all digital marketing campaigns, and assess against goals (ROI and KPIs)</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Identify trends and insights, and optimize spend and performance based on the insights</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Brainstorm new and creative growth strategies</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Plan, execute and measure experiments and conversion tests</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Collaborate with internal teams to create landing pages and optimize the user experience</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Utilize the strong analytical ability to evaluate end-to-end customer experience across multiple channels and customer touchpoints</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Research and test partnerships with new vendors to expand our reach and/or lower cost-per-acquisition</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Work with the Product Marketing owner in deﬁning and executing digital strategies</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="single">
                                                <h3>Professional Competencies</h3>
                                                <ul>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Passion for Digital Marketing</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Outstanding ability to think creatively, and identify and resolve problems</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Attention to detail and the ability to effectively multi-task in a deadline-driven atmosphere</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Ability to learn new industries and new business types quickly and can apply this knowledge to internet marketing initiatives and achieving goals</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Excellent analytical, organizational, project management, and time management skills</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="single">
                                                <h3>Professional Skills & Qualiﬁcations</h3>
                                                <ul>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Minimum 6+ years of Digital Marketing experience managing Organic and Paid strategies in the B2B space.</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform and motivate</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>A clear understanding of Campaign forecast, growth analysis, trafﬁc estimation, etc.</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Ability to segment audiences and build campaigns to reach customers at various stages of the funnel</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Outstanding communication, presentation, and leadership skills</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Strategic thinker with great analytical skills</span>
                                                    </li>
                                                    <li>
                                                        <span><img src={rightIcon1} alt="img" /></span>
                                                        <span>Solid knowledge of tools/technologies (e.g., Analytics, Heatmaps, Conversion Rate Optimization, Omniture)</span>
                                                    </li>
                                                </ul>
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

            {/* <!-- Send Resume In start --> */}
            <section className="apply-now" id="apply-now">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-content">
                                    <h2>Apply for Digital Marketing Lead</h2>
                                    <form className="form">
                                        <div className="row top-area">
                                            <div className="col-sm-6">
                                                <div className=" single-input d-flex align-items-center">
                                                    <div className="input-control">
                                                        <input type="number" className="input-field" placeholder="Name" />
                                                        <label className="input-label">Name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className=" single-input d-flex align-items-center">
                                                    <div className="input-control">
                                                        <input type="number" className="input-field" placeholder="Mobile number" />
                                                        <label className="input-label">Mobile number</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className=" single-input d-flex align-items-center">
                                                    <div className="input-control">
                                                        <input type="number" className="input-field" placeholder="Email Address" />
                                                        <label className="input-label">Email Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className=" single-input d-flex align-items-center">
                                                    <div className="input-control">
                                                        <input type="number" className="input-field" placeholder="Linkedin Profile" />
                                                        <label className="input-label">Linkedin Profile</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="upload-req">
                                            <label for="attach"><span className="smr">Attach Resume</span></label>
                                            <input type="file" id="attach" />
                                            <span className="smr">You can attach files of size up to 5 MB</span>
                                        </div>
                                        <button className="cmn-btn">Get started</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            
        </>
    );
};

export default OpenPosition;