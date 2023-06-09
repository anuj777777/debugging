import React from "react";
import "./Style.css";
import privacy from '../Assests/protecting-privacy.png';
import '../Assests/bootstrap.min.css';
import '../Assests/nice-select.css'
import '../Assests/slick.css'

import '../Assests/magnific-popup.css'
import '../Assests/animate.css'
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from 'react';


function TermsAndCondition() {
    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);

    return (
        <>

            <div>
                <Header />

                
                {/* header-section end */}
                {/* banner-section start */}
                <section className="banner-section inner-pages privacy-policy">
                    <div className="overlay">
                        <div className="banner-content pb-120">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 col-md-10">
                                        <div className="main-content">
                                            <h1>Terms and Conditions</h1>
                                            <div className="breadcrumb-area">
                                                <nav aria-label="breadcrumb">
                                                    <ol className="breadcrumb d-flex align-items-center">
                                                        <li className="breadcrumb-item"><a href="abc">Home</a></li>
                                                        {/* <li className="breadcrumb-item"><a>Pages</a></li> */}
                                                        <li className="breadcrumb-item active" aria-current="page">Terms and Conditions</li>
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
                                                    <img src={privacy} alt="abc" />
                                                </div>
                                                <h2 className="text-uppercase">Terms of use described</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* banner-section end */}
                {/* Privacy Content In start */}
                <section className="privacy-content terms">
                    <div className="overlay pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="top-wrapper">
                                        <h4>We're always looking for new ways to provide privacy for our customers.</h4>
                                        <p>Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor.
                                            Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.</p>
                                        <ul>
                                            <li>— Blandit dignissim nulla varius tristique a sed integer ut tempor.</li>
                                            <li>— Augue interdum semper bibendum amet sed.</li>
                                            <li>— Dis in at ultricies tortor sit tellus.</li>
                                            <li>— Habitant ornare aenean maecenas pretium</li>
                                        </ul>
                                        <p>Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi. Eget consectetur risus nunc lorem sit consequat aliquet. Dolor velit consectetur etiam scelerisque. Integer interdum sodales scelerisque diam massa quam sit quis. Sed et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt. Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam dignissim orci dignissim vitae.</p>
                                        <div className="safe-data">
                                            <h4>Your data is safe with us, we will not share any information with external sources.</h4>
                                            <p>Blandit dignissim nulla varius tristique a sed integer ut tempor. Augue interdum semper bibendum amet sed. Dis in at ultricies tortor sit tellus. Habitant ornare aenean maecenas pretium, dui ullamcorper quis. Egestas viverra et id aliquet faucibus rhoncus a. Sollicitudin nisl nulla tempor pretium lorem at mauris faucibus pulvinar.</p>
                                            <ul>
                                                <li>Eget purus aenean sit risus. Arcu, aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi.</li>
                                                <li>Eget consectetur risus nunc lorem sit consequat aliquet. Dolor velit consectetur etiam scelerisque.</li>
                                                <li>Integer interdum sodales scelerisque diam massa quam sit quis. Sed et dui a nam pulvinar. Tristique justo, donec lectus vitae, cursus ligula ridiculus lacus, tincidunt.</li>
                                                <li>Diam dictumst faucibus dui aliquet aenean nascetur feugiat leo. Etiam dignissim.</li>
                                                <li> Aliquam eget et viverra risus purus. Commodo fames tristique dui pharetra elit aliquet morbi.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Privacy Content In end */}
                {/* Footer Area Start */}
               <Footer/>


            </div>

        </>
    )
}
export default TermsAndCondition;