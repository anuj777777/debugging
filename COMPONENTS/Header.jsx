import React from "react";
import { Link } from 'react-router-dom';
import image from '../Assests/logoNew.png'

function Header() {
  
  return (
    <>


      <header className="header-section">
        <div className="overlay">
          <div className="container">
            <div className="row d-flex header-area">
              <nav className="navbar d-flex navbar-expand-lg navbar-dark">
               
                <a href="abc" className="navbar-brand">
                <Link to ="/home">
                  <img style={{height:"80px"}} src={image} className="logo" alt="logo" />
                </Link>
                </a>
              
                
                <button className="navbar-toggler"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
                  <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <Link to="/about-us">
                      <li className="nav-item">
                        <a href="abc" className="nav-link" >About</a>
                      </li></Link>

                    <Link to="/privacy">
                      <li className="nav-item">
                        <a href="abc" className="nav-link" >Privacy</a>
                      </li>
                    </Link>

                    <Link to="/blogs">
                      <li className="nav-item">
                        <a href="abc" className="nav-link" >Blog</a>
                      </li></Link>


                    <Link to="/contact-us"><li className="nav-item">
                      <a  href="abc" className="nav-link" >Contact Us</a>
                    </li></Link>


                  </ul>

                  <div className="right-area header-action d-flex align-items-center">
                    <Link to="https://www.bharattech.tech/web/index.php/auth/login"><a href="abc" className="cmn-btn login">EMP. Login</a></Link>
                   
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}
export default Header;