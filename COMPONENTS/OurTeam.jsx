
import React from 'react';

import './Style.css';


import aboutusBanner from "../Assests/about-us-banner.png";
import teamMember1 from "../Assests/tushar-bit-removebg-preview.jpg";
import teamMember2 from "../Assests/anubha-bit-removebg-preview.jpg";
import teamMember3 from "../Assests/aek-bit-removebg-preview.jpg";
import Header from './Header';
import Footer from '../COMPONENTS/Footer';

import { useEffect } from 'react';

function OurTeam() {
    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);

    return (
        <>
            <Header />

            {/* <!-- banner-section start --> */}
            <section className="banner-section inner-pages about-us our-team">
                <div className="overlay">
                    <div className="banner-content pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-10">
                                    <div className="main-content">
                                        <h1>Our team</h1>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><a  href="abc">Home</a></li>
                                           
                                                    <li className="breadcrumb-item active" aria-current="page">Our team</li>
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
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="top-area">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                            <img src={aboutusBanner} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- banner-section end --> */}

            {/* <!-- Team Member In start --> */}
            <section className="team-member">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 d-flex justify-content-center">
                                <div className="section-header text-center">
                                    <h2 className="title">Our team is an incredible group of people</h2>
                                    <p>We are a team of entrepreneurs, payment specialists and blockchain enthusiasts.
                                        Dedicated to simplifying global payments for your business</p>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar justify-content-center">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-item">
                                    <img src={teamMember1} alt="icon" />
                                    <div className="text-area">
                                        <a  href='abc' ><h6>Tushar Trivedi</h6></a>
                                        <span className="smr">CEO & Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-item">
                                    <img src={teamMember2} alt="icon" />
                                    <div className="text-area">
                                        <a  href="abc"><h6>Anubha Yadav</h6></a>
                                        <span className="smr">COO & Co-Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-item">
                                    <img src={teamMember3} alt="icon" />
                                    <div className="text-area">
                                        <a  href="abc"><h6>Aekanshu Panchal</h6></a>
                                        <span className="smr">CTO & Co-Founder</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Team Member In end --> */}

            {/* <!-- Growing Team In start --> */}
            <section className="growing-team pb-120">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 d-flex justify-content-center">
                                <div className="section text-center">
                                    <h3>Join the growing team</h3>
                                    <a href="abc" className="cmn-btn">Browse job openings</a>
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

export default OurTeam;