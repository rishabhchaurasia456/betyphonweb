import React, { useState } from 'react';

const OurFeatures = () => {

    const [featureData, setFeatureData] = useState({
        imageSrc: 'https://cdn5.engagebay.com/assets/img/tabs/marketing-automation1/tab01.png',
        head: 'Stay organized with simple contact management',
        text: "Maintain and organize all your contacts and companies in one place. View select contacts by using a host of filters. Save your contacts into separate lists for easier access in the future. Our free online CRM softwarehelps growing companies to organize all their customer information in one place to run targeted and personalized marketing campaigns."
    });
    // const buttons = document.querySelectorAll('.changeButton');
    // const changeImage = document.getElementById('changeImage');
    // const changeHeading = document.getElementById('changeHeading');
    // const changeText = document.getElementById('changeText');

    // Define the data for each button
    const buttonData = [
        { imageSrc: 'https://cdn5.engagebay.com/assets/img/tabs/marketing-automation1/tab01.png', head: 'Stay organized with simple contact management', text: "Maintain and organize all your contacts and companies in one place. View select contacts by using a host of filters. Save your contacts into separate lists for easier access in the future. Our free online CRM softwarehelps growing companies to organize all their customer information in one place to run targeted and personalized marketing campaigns." },
        { imageSrc: 'https://cdn5.engagebay.com/assets/img/tabs/crm/webp/get-complete-visibility-into-your-pipeline.webp', head: 'Get complete visibility into your pipeline', text: "EngageBay's free CRM allows you to view your deal pipeline and track the status of every deal in a single location, organized in stages. Within the CRM, you can move the deal from one stage to another using simple drag and drop operations. Managing deals is now a cinch with our free small business CRM. Stay a step ahead, always!" },
        { imageSrc: 'https://cdn5.engagebay.com/assets/img/tabs/crm/webp/schedule-meetings-effortlessly.webp', head: 'Schedule meetings effortlessly', text: "Avoid back and forth emails and provide an option to your leads to schedule appointments automatically from your calendar. Eliminate manual admin work and improve efficiency by focusing on the things that matter the most. Our free CRM software frees sales from managing meetings so they can focus on revenue and customer relationships." },
        { imageSrc: 'https://cdn5.engagebay.com/assets/img/tabs/crm/webp/know-the-tasks-to-work-on.webp', head: 'Know the tasks to work on', text: "Follow-ups play the most vital role in closing a sale. Never lose a follow-up ever again when you use EngageBay CRM. Create easy-to-do tasks for each lead and track all your to-do tasks in one easy place to consistently be on top of every task. Automate the creation of tasks by setting up the right rules. Receive periodic reminder alerts to never miss a task. Our CRM software makes task management a breeze. Work better, always!" },
        { imageSrc: 'https://cdn5.engagebay.com/assets/img/tabs/crm/webp/locate-your-most-potential-leads.webp', head: 'Locate your most potential leads', text: "Betyphon's Lead Scoring system identifies your most qualified leads, lets you track engagement and know who to follow up with. Now talk to your promising leads and close more deals." },
    ];

    const handleButtonClick = (data) => {
        setFeatureData(data);
    };

    return (
        <>
            {/* <div className="features-area pt-80 pb-50 bg-f7fafd"> */}
                <div className="container">
                    <div className="text-center">
                        <h1>Features of BeTyphon's Free CRM Software</h1>
                        <div className="bar"></div>
                        <h5>From identifying new opportunities to delivering customer happiness</h5>
                        <div className="text-center mb-2 my-3">
                            <span id="button1" className="btn btn-outline-dark mb-2 mx-2" onClick={() => handleButtonClick(buttonData[0])}>
                                <i className="fa fa-user"></i>
                            </span>
                            <span id="button2" className="btn btn-outline-dark mb-2 mx-2" onClick={() => handleButtonClick(buttonData[1])}>
                                <i className="fa fa-eye"></i>
                            </span>
                            <span id="button3" className="btn btn-outline-dark mb-2 mx-2" onClick={() => handleButtonClick(buttonData[2])}>
                                <i className="fa fa-calendar"></i>
                            </span>
                            <span id="button4" className="btn btn-outline-dark mb-2 mx-2" onClick={() => handleButtonClick(buttonData[3])}>
                                <i className="fa fa-clipboard"></i>
                            </span>
                            <span id="button5" className="btn btn-outline-dark mb-2 mx-2" onClick={() => handleButtonClick(buttonData[4])}>
                                <i className="fa fa-filter"></i>
                            </span>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <div className="container">
                <div className="output-container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="my-4">
                                <h4 className="h2">{featureData.head}</h4>
                                <div className="w-50 my-3">
                                    <div className="card w-25" style={{ borderBottom: "3px solid #2F4590" }}></div>
                                </div>
                                <p className='fs-5'>{featureData.text}</p>
                                <h5 className="mt-4">POPULAR FEATURES</h5>
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <p className='fs-5'><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp; Contact Management</p>
                                        <p className='fs-5'><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp; Contact Scoring</p>
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <p className='fs-5'><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp; Segmentation</p>
                                        <p className='fs-5'><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp; Tag Management</p>
                                    </div>
                                </div>
                                {/* <button className="btn btn-outline-dark rounded-1 position-relative py-2 px-3 my-3">Read More</button> */}
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <img id="changeImage" className="mx-auto d-block w-100 p-2 my-3" src={featureData.imageSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFeatures;  