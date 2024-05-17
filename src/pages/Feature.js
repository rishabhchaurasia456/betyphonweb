import React, { useState, useEffect, useRef } from 'react';
// import PageBanner from '../components/Common/PageBanner';
// import * as i-feather';

const Feature = () => {
    return (
        <>
            {/* <PageBanner pageTitle="Feature Details" /> */}
            <div className="container">
                <div className="mt-5 pt-5">
                    <h2 className='text-center p-5'>Features</h2>
                </div>
            </div>

            <div className="features-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Dashboard For All</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Graphical representation of data for quick and efficient information display.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Live monitoring feature shows the live status of the user/tellecaller.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Advanced filtering options for in-depth business insights.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Real-time call analytics for total, incoming, outgoing, and missed calls.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Individual user progress tracking with personalized feedback for improvement.</p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center flex-lg-row flex-column-reverse">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Dynamic calling process</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Automate your entire workflow with dispostion-based rule.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Implement seamless chain automation to effortlessly transfer contacts between one campagin to another campagin.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Cycle-based calling feature allow the systeamtic and efficiently manage the customer interactions without wasting time.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Utilize live analytics to constantly refine and improve call processes.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying1" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Dynamic Lead entries</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Effortlessly capture leads from diverse sources through automated processes.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Facebook, Email, Magicbricks, Tradeindia, Sulekha, 99 acres, Collage dunia & 30+ sources.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Integrate your favourite tools to get the enquiry on real-time.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Seamlessly import extensive lead data from Excel with a single, user-friendly click.</p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center flex-lg-row flex-column-reverse">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Easy Communication - Whatsapp, SMS  and Email</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Facilitate seamless communication with leads through the intuitive features of our CRM system.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Consolidate SMS, WhatsApp, and email communication in a unified platform, ensuring clarity and seamless interaction without any ambiguity.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Efficiently convey comprehensive business proposals, providing quick and informative communication for streamlined decision-making.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying3" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying4" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Calls and Recording Synced</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Use the "Tap to Sync" feature to easily bring together all call records into the CRM system for complete and organized data integration.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Automatically record every business call for clear and accurate records, promoting transparency and accountability in your organization.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Keep a close eye on your team's work using detailed recordings. This helps track performance and ensures accountability.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Track sales activities, set follow-up reminders, and stay updated on overdue and upcoming follow-ups.</p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center flex-lg-row flex-column-reverse">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Notifications</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Never miss important tasks by using disposition notifications that remind you to follow up promptly.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Access the lead instantly by clicking on the notification for a seamless and direct transition.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Optimize productivity with timely reminders through notifications, ensuring no crucial tasks are overlooked.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying5" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying5" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying5" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying6" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying6" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying6" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Marketplace</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Capture leads seamlessly from various sources with our 200+ integration marketplace like Facebook, Ajio, Watti etc.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Simplify business processes with customizable open-source APIs in our marketplace, enhancing ecosystem connectivity.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Seamless integration with no-code requirements, ensuring a user-friendly and straight forward setup process.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Save time and resources by eliminating manual data entry and reducing the risk of errors associated with disparate systems.</p> 
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center flex-lg-row flex-column-reverse">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>AutoDialer</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Efficiently manage calls on our Android app-based dialer, featuring auto dialer.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Initiate calls effortlessly using Auto-dialing functionality without Click the Number.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Enable the Auto-Dialing feature for both existing and new campaigns, providing flexibility in campaign management.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Detailed call records: missed, incoming, outgoing, connect or not connect with respective durations.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying7" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying7" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying7" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying8" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying8" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying8" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Realtime Report</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Access consolidated real-time reports for all telecallers in a centralized platform.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Organized reports systematically based on fundamental, disposition, and monthly categories for enhanced clarity and analysis.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Graphical representation of Reports help you for quick information display.</p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center flex-lg-row flex-column-reverse">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>System Logs</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;The system log comprehensively contains records that depict both informational and detailed events pertaining to the CRM</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Comprehensive upload details for all Excel-related files can be accessed in the system log for thorough monitoring and documentation.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Logs of systematically entered leads from any source can be conveniently reviewed in the Prospect tab for meticulous tracking and reference.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Details of all messages sent through WhatsApp can be checked with the Response API logs tab for comprehensive tracking and analysis.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying9" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying9" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying9" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying10" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying10" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying10" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Number Masking</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Secure customer privacy by masking actual phone numbers during interactions.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Build trust with clients by ensuring that their personal contact information is kept confidential.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Minimize the risk of fraudulent activities by restricting access to real phone numbers.</p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center flex-lg-row flex-column-reverse">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Tag Analysis</h3>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;The Tag feature enables detailed tracking of prospects for comprehensive analysis and monitoring.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Utilizing the tag feature, we systematically categorize leads by applying distinct marking tags for efficient organization and management.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying11" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying11" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying11" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <div id="carouselExampleAutoplaying12" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/features-details-image/feature1.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/features-details-image/feature2.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying12" data-bs-slide="prev">
                                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-left text-dark' />
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying12" data-bs-slide="next">
                                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                                    <i className='fa fa-chevron-right text-dark' />
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Customer Support</h3>
                                <p className='fs-5'>Connect Customer support team instantly for effective product use.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Dedicated SPOC person with Whatsapp Group and proven Implementation process.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Knowledgebase for all query aspect with Demo video.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Simple Ticket System with Calendar option to book query and solution as per convenient time.</p>
                                <p className='fs-6'><i className='fa fa-check text-primary'/>&nbsp; &nbsp;Call on 8750- 829-829 or write us <a href="mailto:support@techmet.in">support@techmet.in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="separate"></div>
            </div>
        </>
    )
}

export default Feature;