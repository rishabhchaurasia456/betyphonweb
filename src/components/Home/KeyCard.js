import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const KeyCard = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
        <div className='container'>
                <h1 className='text-center my-5'><b>Why Businesses Trust BeTyphon?</b></h1>
          <div className="row">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div>
                {/* <p className='comma'>&#65040;<span className='comma1'>&#65040;</span></p> */}
              </div>
                <div className="card shadow mt-2">
                  <div className="card-body text-dark text-center p-3">
                    <p><b>Improves Telecalling Productivity</b></p>
                    Find ways to help callers do their tasks better by looking at current phone information, without guessing anything.
                  </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
                <div className="card shadow mt-2">
                  <div className="card-body text-dark text-center p-3">
                    <p><b>Reduces Non-productive Time</b></p>
                    Find efficiency gaps to minimize nonproductive time by visualizing targeted, non-targeted, connected, or disconnected calls daily.
                  </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
                <div className="card shadow mt-2">
                  <div className="card-body text-dark text-center p-3">
                    <p><b>Efficient Performance Evaluation</b></p>
                    Get real-time performance analytics of each team member and save time on creating manual performance reports.
                  </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
                <div className="card shadow mt-2">
                  <div className="card-body text-dark text-center p-3">
                    <p><b>Automates your Operations</b></p>
                    Automate tasks that repeat often, such as keeping contacts up to date, handling leads, making reports, and other similar activities, and more through third-party integrations.
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default KeyCard