import React from 'react';
import chaticon from '../../assets/images/chat-icon.png'
import img1 from '../../assets/images/BioBalance-Online-Consultation-page-image-640px.jpg'
import heart from '../../assets/images/heart.svg'
import arrow from '../../assets/images/double-arrow.svg'
import { Link } from 'react-router-dom';
import singlearrow from '../../assets/images/arrow.png'
import three_dots from '../../assets/images/black_three_dots.png'

const Doctor = () => {

    return (
        <>
            <div>
                <div className="doctor_banner">
                    {/* <Link to={'/regularpage'} className="back_arrow">
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link> */}
                    <Link to={'/regularpage'}  className="back_arrow"><img src={singlearrow} alt="arrow" /></Link>
                    {/* <a href="#" className="menu_btn"><i className="fa-solid fa-ellipsis"></i></a> */}
                    <a href="#" className="menu_btn"><img src={three_dots} alt="three_dots" /></a>
                    <div className="banner_content">
                        <h1>Hanna Smith, MD</h1>
                        <h6>Gynecologist</h6>
                        <div className="doctor_heading d-flex align-center justify-between">
                            <small><i className="fa-solid fa-star"></i> 4.9 (1000 reviews) </small>
                            <button className='all_reviews'>All reviews</button>
                        </div>
                        
                    </div>
                </div>
                <div className="doctors_sec doctors_details_sec">
                    <div className="container">
                        <div className="doctors_area">
                            <div className="doctor_heading d-flex align-center justify-between">
                                <h6>Informations</h6>
                            </div>
                            <p className="doc_desc">Hi, I'm Hanna Smith, MD and i'm a Therapist.
                                if you have any questions, please,contact me.
                            </p>
                            <div className="chat_icon">
                                <img src={chaticon} alt="" />
                            </div>
                            <div className="doctor_heading d-flex align-center justify-between">
                                <h6>Contacts</h6>
                            </div>
                            <p><i className="fa fa-solid fa-envelope"></i> helen_mayer@gmail.com</p>
                            <hr />
                            <p><i className="fa fa-facebook-square" aria-hidden="true"></i> facebook.com/helenmayer</p>
                            <hr />
                            <p><i className="fa fa-twitter-square" aria-hidden="true"></i> @helenmayer</p>

                            <div className="doctor_heading d-flex align-center justify-between certificate">
                                <h6>Certificate</h6>
                            </div>
                            <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> Graduated from Stanford University.</p>
                            <hr />
                            <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> Professional development in therapy</p>
                        </div>
                    </div>
                </div>
                <div className="doctors_sec">
                    <div className="container">
                        <div className="doctors_area">
                            <div className="doctor_heading d-flex align-center justify-between">
                                <h3>Services</h3>
                            </div>
                            <div className="service_box_area">
                                <div className="service_box">
                                    <div className="box_img">
                                        <img src={img1} alt="Online" />
                                    </div>
                                    <div className="box_con">
                                        <div className="box_heading d-flex align-center justify-between">
                                            <h4>Online Consultation</h4>
                                            <a href="#"><img src={heart} alt="heart" /></a>
                                        </div>
                                        <div className="price d-flex align-center justify-between">
                                            <p>60 min</p>
                                            <span>$50</span>
                                        </div>
                                        <span className="star"><i className="fa-solid fa-star"></i> 5.0 (1435 reviews)</span>
                                    </div>
                                </div>
                                <div className="service_box">
                                    <div className="box_img">
                                        <img src={img1} alt="Online" />
                                    </div>
                                    <div className="box_con">
                                        <div className="box_heading d-flex align-center justify-between">
                                            <h4>Management of Pregnancy</h4>
                                            <a href="#"><img src={heart} alt="heart" /></a>
                                        </div>
                                        <div className="price d-flex align-center justify-between">
                                            <p>In hospital</p>
                                            <span>$100</span>
                                        </div>
                                        <span className="star"><i className="fa-solid fa-star"></i> 5.0 (1435 reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="doctors_sec">
                    <div className="container">
                        <div className="doctors_area">
                            <div className="doctor_heading d-flex align-center justify-between">
                                <h3>Review & Ratings</h3>
                                <a href="#" className="d-flex align-center">Show All <img src={arrow} alt="double-arrow" /></a>
                            </div>
                            <div className="service_box_area">
                                <div className="service_box rating_box">
                                    <div className="box_round_img">
                                        <img src={img1} alt="Online" />
                                    </div>
                                    <div className="box_con review_box">
                                        <div className="box_heading d-flex align-center justify-between">
                                            <h4>Zendaya Simpson</h4>
                                            <span>11 Feb 2022</span>
                                        </div>
                                        <span className="star"><i className="fa-solid fa-star"></i> 5.0</span>
                                        <div className="price d-flex align-center justify-between">
                                            <p>Thanks to Hanna, we have a healthy baby! The doctor led the entire pregnancy and helped to recover after.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="service_box rating_box">
                                    <div className="box_round_img">
                                        <img src={img1} alt="Online" />
                                    </div>
                                    <div className="box_con review_box">
                                        <div className="box_heading d-flex align-center justify-between">
                                            <h4>Zendaya Simpson</h4>
                                            <span>11 Feb 2022</span>
                                        </div>
                                        <span className="star"><i className="fa-solid fa-star"></i> 5.0</span>
                                        <div className="price d-flex align-center justify-between">
                                            <p>Thanks to Hanna, we have a healthy baby! The doctor led the entire pregnancy and helped to recover after.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctor