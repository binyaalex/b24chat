import React from 'react';
import Doctors from "./../hospitalPage/Doctors";

const Appointment = () => {

    return (
        <>
        <div>
            <div className="searchbox_container">               
                    <h2>1. Choose a doctor</h2>
                    <div className="searchbox">
                        <i className="fa fa-search"  style={{fontSize:'20px',width: '5%',  marginLeft: '2px', color:'#df2d86'}}></i>  
                        <input id="search" type="search" placeholder=" Search for name or specialization" />
                    </div>
            </div> 
            <Doctors />
            <div className="dateselector_container">               
                    <h2>2. Choose the date</h2>
                    <div className="dateselector">
                        <i className="fa fa-calendar"  style={{fontSize:'20px', width: '5%',  marginLeft: '2px', color:'#df2d86'}}></i>  
                        <input id="dateselector" type="text" placeholder=" Open calendar" />
                    </div>
            </div> 

            <div className="dateselectoroption_container"> 
                <div className="dateselectoroption">
                    <label for="dateoptions" className="dateselectoroptions_lable">Mon</label><br/>
                    <a href="#" className="dateoptions" target="_blank">14</a>
                </div>
                <div className="dateselectoroption">
                    <label for="dateoptions" className="dateselectoroptions_lable">Tue</label><br/>
                    <a href="#" className="dateoptions" target="_blank">15</a>
                </div>
                <div className="dateselectoroption2">
                    <label for="dateoptions" className="dateselectoroptions_lable2">Wed</label><br/>
                    <a  href="#" className="dateoptions2" target="_blank">16</a>
                </div>
                <div className="dateselectoroption">
                    <label for="dateoptions" className="dateselectoroptions_lable">Thu</label><br/>
                    <a href="#" className="dateoptions" target="_blank">17</a>
                </div>
                <div className="dateselectoroption">
                    <label for="dateoptions" className="dateselectoroptions_lable">Fri</label><br/>
                    <a href="#" className="dateoptions" target="_blank">18</a>
                </div>
                <div className="dateselectoroption">
                    <label for="dateoptions" className="dateselectoroptions_lable">Sat</label><br/>
                    <a href="#" className="dateoptions" target="_blank">19</a>
                </div>
                <div className="dateselectoroption">
                    <label for="dateoptions" className="dateselectoroptions_lable">Sun</label><br/>
                    <a href="#" className="dateoptions" target="_blank">20</a>
                </div>
            </div> 

            <div className="timeselector_container">               
                    <h2>3. Choose time</h2>
                    <div className="timeselector">
                        <i className="fa fa-clock"  style={{fontSize:'20px', width: '5%',  marginLeft: '2px', color:'#df2d86'}}></i>  
                    <input id="timeselector" type="text" placeholder=" Open schedule" />
                    </div>
            </div>

            <div className="timeselectoroption_container row"> 
                <div className="timeselectoroption col-3">
                    <a href="#" target="_blank">10:00</a>
                </div>
                <div className="timeselectoroption col-3">
                    <a href="#" target="_blank">12:00</a>
                </div>
                <div className="timeselectoroption col-3">
                    <a href="#" target="_blank">15:00</a>
                </div>
                <div className="timeselectoroption col-3" >
                    <a href="#" target="_blank">16:00</a>
                </div>
            </div> 
        </div>
        </>
    )
}

export default Appointment