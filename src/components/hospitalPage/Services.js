import React from 'react';
import doublearrow from '../../assets/images/double-arrow.svg'
import Service1 from '../../assets/images/service1.jpg'
import Service2 from '../../assets/images/service2.jpg'

import heart from '../../assets/images/heart.svg'
const Services = () => {

    return (
        <div className="doctors_sec">
            <div className="container">
                <div className="doctors_area">
                    <div className="doctor_heading d-flex align-center justify-between">
                        <h3>My Services:</h3>
                        <a href="#" className="d-flex align-center">View All <img src={doublearrow} alt="double-arrow" /></a>
                    </div>
                    <div className="service_box_area">
                        <div className="service_box">
                            <div className="box_img">
                                <img src={Service1} alt="Online" />
                            </div>
                            <div className="box_con">
                                <div className="box_heading d-flex align-center justify-between">
                                    <h4>Online Consultation</h4>
                                    <a href="#"><img src={heart} alt="hert" /></a>
                                </div>
                                <div className="price d-flex align-center justify-between">
                                    <p style={{textAlign:'initial'}}>Call Your doctor anytime</p>
                                    <span>$50</span>
                                </div>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="box_img">
                                <img src={Service2} alt="Online" />
                            </div>
                            <div className="box_con">
                                <div className="box_heading d-flex align-center justify-between">
                                    <h4>Management of Pregnancy</h4>
                                    <a href="#"><img src={heart} alt="hert" /></a>
                                </div>
                                <div className="price d-flex align-center justify-between">
                                    <p style={{textAlign:'initial'}}>Doctor's appointments,tests, <br /> ultrasound and ect.</p>
                                    <span>$100</span>
                                </div>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="box_img">
                                <img src={Service2} alt="Online" />
                            </div>
                            <div className="box_con">
                                <div className="box_heading d-flex align-center justify-between">
                                    <h4>Management of Pregnancy</h4>
                                    <a href="#"><img src={heart} alt="hert" /></a>
                                </div>
                                <div className="price d-flex align-center justify-between">
                                    <p style={{textAlign:'initial'}}>Doctor's appointments,tests, <br /> ultrasound and ect.</p>
                                    <span>$100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services