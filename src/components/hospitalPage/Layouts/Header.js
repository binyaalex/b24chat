import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/images/arrow.png'
import notification from '../../../assets/images/notification.png'
const Header = () => {

    return (
        <div className="container" style={{position:'sticky',zIndex:'9999999', top:0, backgroundColor:'#fff'}}>
            <div className="header_area d-flex align-center justify-between">
                {/* <a href="#" className="btn"><img src={arrow} alt="arrow" /></a> */}
                <Link to={'/regularpage'}  className="btn"><img src={arrow} alt="arrow" /></Link>
                <h2>Provader & Hospital</h2>
                <a href="#" className="btn"><img src={notification} alt="notification" /></a>
            </div>
        </div>
    )
}

export default Header