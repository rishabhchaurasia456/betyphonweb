import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <div className="cm-hero-banner">
            <div className="arrow-right"></div>
            <div className="row gx-0 mx-5 align-items-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center">
                    <div className="hero-text">
                        <h1 className="position-relative text-white" style={{fontWeight: "500"}}>Best Telecalling CRM with lead integrations & Auto Dialer</h1>
                        <h5 className="position-relative text-white" style={{fontWeight: "300"}}>Capture leads from anywhere and distribute in your team members, Track your calling activity and improve the productivity with proper feedback. Your caller just needs a Smart-Phone with a SimCard in your phone.</h5>
                        <a href="https://web.betyphon.in/auth/register-page"><button className="btn btn-dark rounded-pill position-relative py-2 px-3 my-3">Register For Free</button></a>
                        <p className="fs-6 text-white position-relative my-3" style={{fontWeight: "300"}}>30 days FREE Trial available - No Credit card Required</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center">
                    <div className="video-background">
                      <video autoPlay loop muted className=' bg-light p-0 rounded-1'>
                        <source
                          src="/images/crm_vedio.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection