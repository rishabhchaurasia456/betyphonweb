import React from "react";
import { Link } from "react-router-dom";
// import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-Footer pt-5">
        <div className="container fs-6">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo-dark.png" alt="logo" />
                  </Link>
                </div>
                <p className="text-white">
                Betyphon - Mobile Dialing CRM is an <br/> easy to use solution for business <br/> professionals to automatically track <br/> telecalling teams and manage leads
                </p>

                <div className="col-lg-12 col-md-12 mt-1">
                  <img src="/images/award1.png" style={{marginLeft: "-5%"}}></img>
                  <img src="/images/award2.png"></img>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mt-2">
              <div className="single-footer-widget pl-5">
                <h3 className="text-white">Company</h3>
                <ul className="list">
                  <li>
                    <Link className="mt-3" href="/about-1">About Us</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/services-1">Blogs</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/features">Features</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/pricing">Our Pricing</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/blog-1">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mt-2">
              <div className="single-footer-widget">
                <h3 className="text-white">Integrations</h3>
                <ul className="list">
                  <li>
                    <Link className="mt-3" href="/faq">Facebook</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/privacy-policy">Indiamart</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/term-condition">Collage Dunia</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/team">Trade India</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/contact">Just Dial</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mt-2">
              <div className="single-footer-widget">
                <h3 className="text-white">Industries</h3>
                <ul className="list">
                  <li>
                    <Link className="mt-3" href="/faq">Realestate</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/privacy-policy">Education</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/term-condition">Healthcare</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/team">Astrology</Link>
                  </li>
                  <li>
                    <Link className="mt-3" href="/">DSA</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-2">
              <div className="single-footer-widget">
                <h3 className="text-white">Address</h3>

                <ul className="footer-contact-info">
                  <li className="mt-3">
                  <i className="fa fa-location-dot"></i>
                    BSD Technologies Private Limited <br /> Gurgaon | Faridabad | Bangalore
                  </li>
                  <li className="mt-3">
                  <i className="fa fa-envelope"></i>
                    Email:{" "}
                    <a href="mailto:support@betyphon.com">support@betyphon.com</a>
                  </li>
                  <li className="mt-3">
                  <i className="fa fa-phone"></i>
                    Phone: <a href="tel:1800-120-6389"> 1800-120-6389</a>
                  </li>
                </ul>
                <ul className="social-links">
                  <li className="mt-2">
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <div className="col-lg-12 col-md-12 mt-3">
                    <a href="https://play.google.com/store/apps/details?id=com.betyphonplus"><img src="/images/googleplay.png" height="44px;" width="150px"/></a>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p className="text-white">
                  &copy; {currentYear} BeTyphon. All rights reserved | <a className="copyright_text" href="https://envytheme.com/" target="_blank"> Terms & Condition
                  </a> | <Link className="copyright_text" to="/privacy.html">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
