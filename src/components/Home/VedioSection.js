import React from 'react'

const VedioSection = () => {
  return (
    <div>
        <div className="container-fluid my-5">
            {/* <div className="row"> */}

            <div className="card m-4 p-3" style={{borderRadius: "1rem"}}>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3">
                    <div className="p-2">
                        <h4 className="h2 text-start mb-3">The #1 Lead Management & Telecalling Mobile Dialing CRM</h4>
                        <p>&#x2714; Premium support for zero downtime</p>
                        <p>&#x2714; Track your team from anywhere - SAAS</p>
                        <p>&#x2714; Auto Dial and Manage leads from Phone.</p>
                        <p>&#x2714; Auto-distribute leads across your Team.</p>
                        <p>&#x2714; Pay-per-Go SAAS Model</p>
                         
                        <p className="h4 my-2">Lets upgrade the productivity and supercharge sales.</p>             
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/E81XyemCeVY?si=Wx9IhBgLKiDLrccn&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default VedioSection