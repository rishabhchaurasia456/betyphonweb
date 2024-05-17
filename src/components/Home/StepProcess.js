import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const StepProcess = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [apiCalled, setApiCalled] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });

        if (apiCalled && phoneNumber) {
            // Make the API call when both API hasn't been called and a phone number is provided
            const apiUrl = `https://superivr.techmet.in/clicktocallapi/initiateclicktocall?user_id=5743&dnid=4954647&caller_num=${phoneNumber}&agent_num=${9871045375}`;

            // Make the API call using fetch or any other method
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Handle the API response as needed
                })
                .catch(error => {
                    console.error('Error making API call:', error);
                });
        }
    }, [apiCalled, phoneNumber]);

    const handleDemoRequest = () => {
        // Set the state to trigger the API call
        setApiCalled(true);
    };

    return (
        <div>
            <div className="container-fluid">
                    <h1 className='text-center my-5'>How it Works</h1>
                <div className="row px-1">
                    <div className="col-lg-3 col-md-6">
                        <div class="process_box arrow-right2" data-aos="fade-right">
                            <table>
                                <tr>
                                    <td width='30%'><img src='/images/user1.png' width="90%" /></td>
                                    <td className='text-primary fs-6 ps-2'>Signup the account</td>
                                </tr>
                                <tr>
                                    <td rowspan="2" className='text-primary ps-4' style={{ fontSize: "55px" }}><b>1</b></td>
                                </tr>
                                <tr className='text-dark'>
                                    <td>Click start free trialt to create your account and add your calling team</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div class="process_box arrow-right2" data-aos="fade-right">
                            <table>
                                <tr>
                                    <td width='30%'><img src='/images/setting1.png' width="90%" /></td>
                                    <td className='text-primary fs-6 ps-2'>Setup the account</td>
                                </tr>
                                <tr className=''>
                                    <td rowspan="2" className='text-primary ps-4' style={{ fontSize: "55px" }}><b>2</b></td>
                                </tr>
                                <tr className='text-dark'>
                                    <td>Import your calling list from excel or integrate with FB, Indiamart, JustDail etc</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div class="process_box arrow-right2" data-aos="fade-right">
                            <table>
                                <tr>
                                    <td width='30%'><img src='/images/call.png' width="80%" /></td>
                                    <td className='text-primary fs-6 ps-2'>Start Calling</td>
                                </tr>
                                <tr className=''>
                                    <td rowspan="2" className='text-primary ps-4' style={{ fontSize: "55px" }}><b>3</b></td>
                                </tr>
                                <tr className='text-dark'>
                                    <td>Use Betyphon to start auto dailing from phone SIM card and any mechanism</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div class="process_box arrow-right2" data-aos="fade-right">
                            <table>
                                <tr>
                                    <td width='30%'><img src='/images/report.png' width="90%" /></td>
                                    <td className='text-primary fs-6 ps-2'>View Reports</td>
                                </tr>
                                <tr className=''>
                                    <td rowspan="2" className='text-primary ps-4' style={{ fontSize: "55px" }}><b>4</b></td>
                                </tr>
                                <tr className='text-dark'>
                                    <td>Track your teams performance from anywhere</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid get_demo_bg mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className='d-flex justify-content-center text-light text-center mt-4'><b>Get a CALL for a FREE DEMO</b></h1>
                            <h1 className='d-flex justify-content-center text-light mt-1'><b>Try it Now !</b></h1>
                        </div>
                        <div className="col-md-5 d-flex justify-content-center">
                            <div className="card" style={{ width: "19rem" }}>
                                <div className="card-body">
                                    <input type="text" className="form-control mb-3" placeholder="Phone No." value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    <button className='btn btn-primary w-100' onClick={handleDemoRequest}><i className='fa fa-phone fs-6 me-2'></i>Get An Instant call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepProcess