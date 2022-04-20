import React from 'react';
import doublearrow from '../../assets/images/double-arrow.svg'
import team1 from '../../assets/images/team1.png'
import team2 from '../../assets/images/team2.png'
import team3 from '../../assets/images/team3.png'
import team4 from '../../assets/images/team4.png'
import star from '../../assets/images/star.svg'

const Doctors = () => {

    return (
        <div className="doctors_sec">
            <div className="container">
                <div className="doctors_area">
                    <div className="doctor_heading d-flex align-center justify-between">
                        <h3>My Doctors</h3>
                        <a href="#" className="d-flex align-center">View All <img src={doublearrow} alt="double-arrow" /></a>
                    </div>
                    <div className="row doctor_box_area">
                        <div className="col-3">
                            <div className="doctor_box">
                                <div className="box_img"><img src={team1} alt="doctor" /></div>
                                <h6 style={{textAlign:"center"}}>Hanna Smith</h6>
                                <p  style={{textAlign:"center"}}>Gynecologist</p>
                                <div className="start_con d-flex align-center justify-center">
                                    <img src={star} alt="star" /><span>4.9</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="doctor_box">
                                <div className="box_img"><img src={team2} alt="doctor" /></div>
                                <h6  style={{textAlign:"center"}}>Lola Jackson</h6>
                                <p  style={{textAlign:"center"}}>Obstetrician</p>
                                <div className="start_con d-flex align-center justify-center">
                                    <img src={star} alt="star" /><span>4.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="doctor_box">
                                <div className="box_img"><img src={team3} alt="doctor" /></div>
                                <h6  style={{textAlign:"center"}}>Emily Blant</h6>
                                <p  style={{textAlign:"center"}}>Doula</p>
                                <div className="start_con d-flex align-center justify-center">
                                    <img src={star} alt="star" /><span>4.7</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="doctor_box">
                                <div className="box_img"><img src={team4} alt="doctor" /></div>
                                <h6  style={{textAlign:"center"}}>Katy Bloom</h6>
                                <p  style={{textAlign:"center"}}>Nurse</p>
                                <div className="start_con d-flex align-center justify-center">
                                    <img src={star} alt="star" /><span>4.6</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctors