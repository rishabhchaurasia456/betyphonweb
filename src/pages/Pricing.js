import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import * as Icon from 'react-feather';

class Pricing extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <>
                <div className="pricing-area pb-50 mt-5">
                    <div className="container">
                        <div className="mt-5 pt-5">
                            <h2 className='text-center p-5'>Our Pricing Plan</h2>
                        </div>
                        
                        <div className="tab pricing-tab bg-color">
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => this.openTabSection(e, 'tab1')}
                                >
                                    Monthly Plan
                                </li>
                                
                                <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                    Yearly Plan
                                </li>
                            </ul>

                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="pricing-box">
                                                <div className="pricing-header">
                                                    <h3>FREE</h3>
                                                    <p>Get your business up <br /> and running</p>
                                                </div>

                                                <div className="price">
                                                    &#8377;0 <span>/m</span>
                                                </div>

                                                {/* <div className="buy-btn"> */}
                                                    <Link href="#" className="btn btn-primary rounded-pill mb-4">
                                                        Get Started 30 days (1 user)
                                                    </Link>
                                                {/* </div> */}

                                                <ul className="pricing-features">
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Email Support Only</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Web & Mobile CRM</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Auto Lead Distribution</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Tasks & Reminders</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Customized Calliing Structure</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Real-time Reports</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="pricing-box">
                                                <div className="pricing-header">
                                                    <h3>STANDARD</h3>
                                                    <p>Get your business up <br /> and running</p>
                                                </div>

                                                <div className="price">
                                                    &#8377;699 <span>/m</span>
                                                </div>

                                                {/* <div className="buy-btn"> */}
                                                    <Link href="#" className="btn btn-primary rounded-pill mb-4">
                                                        Get Started Per user/ month
                                                    </Link>
                                                {/* </div> */}

                                                <ul className="pricing-features">
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Everything in Free, and</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Chat & Phone Support</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Auto Lead Capture</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;SMS & Email Communication</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Push Notification</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Call Details & Call Recording</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Real-time Tracking</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="pricing-box">
                                                <div className="pricing-header">
                                                    <h3>ENTERPRISE</h3>
                                                    <p>Get your business up <br /> and running</p>
                                                </div>

                                                <div className="price">
                                                    &#8377;999 <span>/m</span>
                                                </div>

                                                {/* <div className="buy-btn"> */}
                                                    <Link href="#" className="btn btn-primary rounded-pill mb-4">
                                                        Get Started Per user/ month
                                                    </Link>
                                                {/* </div> */}

                                                <ul className="pricing-features">
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Everything in Free & Standard, and</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;On-site Support</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Rule based triggers</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Custom Workflow</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Push Notification</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;API and Webhook Integration</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Custom Lead Integrations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" className="tabs_item">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="pricing-box">
                                                <div className="pricing-header">
                                                    <h3>Free</h3>
                                                    <p>Get your business up <br /> and running</p>
                                                </div>

                                                <div className="price">
                                                    &#8377;0 <span>/y</span>
                                                </div>

                                                {/* <div className="buy-btn"> */}
                                                    <Link href="#" className="btn btn-primary rounded-pill mb-4">
                                                        Get Started 30 days (1 user)
                                                    </Link>
                                                {/* </div> */}

                                                <ul className="pricing-features">
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Email Support Only</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Web & Mobile CRM</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Auto Lead Distribution</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Tasks & Reminders</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Customized Calliing Structure</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Real-time Reports</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="pricing-box">
                                                <div className="pricing-header">
                                                    <h3>STANDARD</h3>
                                                    <p>Get your business up <br /> and running</p>
                                                </div>

                                                <div className="price">
                                                    &#8377;3999 <span>/y</span>
                                                </div>

                                                {/* <div className="buy-btn"> */}
                                                    <Link href="#" className="btn btn-primary rounded-pill mb-4">
                                                        Get Started Per user/ month
                                                    </Link>
                                                {/* </div> */}

                                                <ul className="pricing-features">
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Everything in Free, and</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Chat & Phone Support</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Auto Lead Capture</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;SMS & Email Communication</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Push Notification</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Call Details & Call Recording</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Real-time Tracking</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="pricing-box">
                                                <div className="pricing-header">
                                                    <h3>ENTERPRISE</h3>
                                                    <p>Get your business up <br /> and running</p>
                                                </div>

                                                <div className="price">
                                                    &#8377;5999 <span>/y</span>
                                                </div>

                                                {/* <div className="buy-btn"> */}
                                                    <Link href="#" className="btn btn-primary rounded-pill mb-4">
                                                        Get Started Per user/ month
                                                    </Link>
                                                {/* </div> */}

                                                <ul className="pricing-features">
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Everything in Free & Standard, and</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;On-site Support</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Rule based triggers</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Custom Workflow</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Push Notification</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;API and Webhook Integration</li>
                                                    <li><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Custom Lead Integrations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    {/* <div className="shape1">
                        <img src="/images/shape1.png" alt="shape" />
                    </div>
                    <div className="shape2 rotateme">
                        <img src="/images/shape2.svg" alt="shape" />
                    </div>
                    <div className="shape3">
                        <img src="/images/shape3.svg" alt="shape" />
                    </div>
                    <div className="shape4">
                        <img src="/images/shape4.svg" alt="shape" />
                    </div>
                    <div className="shape7">
                        <img src="/images/shape4.svg" alt="shape" />
                    </div>
                    <div className="shape8 rotateme">
                        <img src="/images/shape2.svg" alt="shape" />
                    </div> */}
                </div>
            </>
        );
    }
}

export default Pricing;