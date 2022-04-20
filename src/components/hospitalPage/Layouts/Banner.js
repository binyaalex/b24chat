import React from 'react';
import three_dots from '../../../assets/images/three_dots.svg'

const Banner = () => {

    return (
        <div className="banner">
            <a href="#" className="menu_btn"><img src={three_dots} alt="three_dots" /></a>
            <div className="banner_content">
                <h1>Pregnancy Care Center</h1>
                <h6  style={{textAlign:"initial"}}>Beer Shiva,Trinty Rd,208</h6>
            </div>
        </div>
    )
}

export default Banner