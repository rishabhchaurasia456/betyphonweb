import React from 'react';
import { Link } from "react-router-dom";

const ContactBoxSilder = () => {
    return (
        <>
            {/* <div className="blog-area pt-80 pb-50"> */}
                <div className="container-fluid">
                    <section className="contact-us-now position-relative rounded-4 container my-5">
                        <div className="row gx-0">
                            <div className=" col-sm-12 col-md-4 slide1 cm-card mb-3">
                                <div className="contact-text p-5">
                                    <p className="h4" style={{ zIndex: "999" }}>Request a <br /> Call Back</p>
                                    <p className="" style={{ letterSpacing: "1px", fontSize: "13px" }}>We will be happy to address <br /> your queries over a call.</p>
                                    <div className="row gx-0">
                                        <div className="col-12">
                                            <a href="https://calendly.com/techmet/connect-with-us-techmet"><button className="btn btn-light rounded-2 position-relative py-2 px-2 my-4">Connect Now</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-sm-12 col-md-4 slide2 cm-card mb-3">
                                <div className="contact-text p-5">
                                    <p className="h4">Connect on <br /> WhatsApp</p>
                                    <div className="row mb-2">
                                        <div className="col-6">
                                            <p style={{ letterSpacing: "1px", fontSize: "13px" }}><i className="bi bi-chat-dots"></i>&nbsp; Live Chat</p>
                                            <p style={{ letterSpacing: "1px", fontSize: "13px" }}><i className="bi bi-whatsapp"></i>&nbsp; Live Chat</p>
                                        </div>
                                        <div className="col-6 border-start">
                                            <p style={{ letterSpacing: "1px", fontSize: "13px" }}>Mon - Fri</p>
                                            <p style={{ letterSpacing: "1px", fontSize: "13px" }}>10 AM - 6 PM</p>
                                        </div>
                                    </div>
                                    <Link to="https://wa.me/+919871045375" target="_blank" className="btn btn-light rounded-2 position-relative py-2">Connect on Whatsapp</Link>
                                </div>
                            </div>
                            <div className=" col-sm-12 col-md-4 slide3 cm-card mb-3">
                                <div className="contact-text p-5">
                                    <p className="h4">Connect <br /> Toll-Free</p>
                                    <p style={{ letterSpacing: "1px", fontSize: "13px" }}>Call us on 1800-120-6389 <br /> or email us</p>
                                    <Link to="mailto:support@betyphon.com" className="btn btn-light rounded-2 position-relative py-2 my-4">support@betyphon.com</Link>
                                </div>
                            </div>

                            <div className="animation start"></div>
                        </div>
                    </section>
                </div>

            {/* </div> */}
            <div className='container-fluid'>
                <div className="row">
                    <div className="text-center my-3">
                        <h1>Frequently Asked Questions</h1>
                        <h5>Got a question? We've got answers. If you have some other questions, contact us using email.</h5>
                    </div>
                </div>
                <div className='row mb-3 p-3'>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <details className='shadow mt-1'>
                            <summary>How long are your contracts?</summary>
                            <div className="faq__content">
                                <p>Currently, we offer monthly and annual subscriptions. You can upgrade or cancel your account at any time with no further obligation.</p>
                            </div>
                        </details>
                        <details className='shadow mt-1'>
                            <summary>Do you offer pay-as-you-go subscriptions?</summary>
                            <div className="faq__content">
                                <p>Not at this time. Since all of our subscriptions are billed on a recurring basis without a contract or cancellation fee.</p>
                            </div>
                        </details>
                        <details className='shadow mt-1'>
                            <summary>Are there any long-term commitments or cancellation fees?</summary>
                            <div className="faq__content">
                                <p>No. You can upgrade, downgrade, or cancel your subscription at any time. We'll never charge a cancellation fee.</p>
                            </div>
                        </details>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <details className='shadow mt-1'>
                            <summary>Do you offer pay-as-you-go subscriptions?</summary>
                            <div className="faq__content">
                                <p>Not at this time. Since all of our subscriptions are billed on a recurring basis without a contract or cancellation fee, you can use BeTyphon on an as-needed basis.</p>
                            </div>
                        </details>
                        <details className='shadow mt-1'>
                            <summary>Can I request refund?</summary>
                            <div className="faq__content">
                                <p>Yes, We gives partial refunds based on reasons or Can be adjusted with other products. You can use our free 30-days-FREE-trial to try and decide if Betyphon what you want</p>
                            </div>
                        </details>
                        <details className='shadow mt-1'>
                            <summary>Can I make a payment by invoice?</summary>
                            <div className="faq__content">
                                <p>We’re happy to provide invoicing on our annual and Enterprise plans. Contact us to set up payment by check or bank transfer.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactBoxSilder;  