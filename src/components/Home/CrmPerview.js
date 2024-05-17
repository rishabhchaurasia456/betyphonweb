import React, { useEffect, useState } from 'react';
// import React from 'react'

const CrmPerview = () => {

    const [imageSrc, setImageSrc] = useState('/images/crmperview/dashboard.jpg');

    useEffect(() => {
        const p = document.querySelectorAll('.bgnClickChange');

        const pData = [
            { imageSrc: ('/images/crmperview/dashboard.jpg') },
            { imageSrc: ('/images/crmperview/My team.jpg') },
            { imageSrc: ('/images/crmperview/campaigns.jpg') },
            { imageSrc: ('/images/crmperview/activity.jpg') },
            { imageSrc: ('/images/crmperview/report.jpg') },
            { imageSrc: ('/images/crmperview/schedule.jpg') },
            { imageSrc: ('/images/crmperview/prospects.jpg') },
            { imageSrc: ('/images/crmperview/forms.jpg') },
            { imageSrc: ('/images/crmperview/system log.jpg') },
            { imageSrc: ('/images/crmperview/integration.jpg') },
            { imageSrc: ('/images/crmperview/template.jpg') },
        ];

        p.forEach((p, index) => {
            p.addEventListener('click', () => {
                const data = pData[index];
                setImageSrc(data.imageSrc);
            });
        });
    }, []);

    return (
        <div>
            <div className="crm_preview my-5">
                <div className="container">
                    <div className="row my-5 text-center">
                        <h1>BeTyphon CRM Perview</h1>
                        <h5>Click on each menu to change Dashboard perview</h5>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="cm-dashboard py-4">
                        <div className="container-fluid">
                            <img src={imageSrc} width="100%" height="710px" className="mx-auto d-block rounded w-100 shadow-lg" id="changeDashboard" />
                            <div className="row gx-0">
                                <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2 col-xxl-2">
                                    <ul className="bgnClick position-absolute" style={{ paddingLeft: "3%", width: "81.5%", marginTop: "-47.7%"}} id="">
                                        <li className='list_style'>
                                            <p id="d1" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d2" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d3" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d4" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d5" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d6" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d7" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d8" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d9" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d10" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                        <li className='list_style'>
                                            <p id="d11" className="listItemStyle text-white bgnClickChange pt-2"></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-0 col-sm-0 col-md-0 col-lg-10 col-xl-10 col-xxl-10">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrmPerview