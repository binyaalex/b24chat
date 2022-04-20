import React from 'react';
import arrow from '../../../assets/images/arrow.png'
import notification from '../../../assets/images/notification.png'
import '../../../components/repeats/head/Head.css';
import MenuItem from '../../../components/repeats/head/MenuItem'


const menuItemsArr = [
    {
        link: 'http://localhost:3000/headpage/start',
        text: 'התחלה',
    },
    {
        link: 'http://localhost:3000/regularpage/mybaby',
        text: 'התינוק שלי',
    },
    {
        link: 'http://localhost:3000/regularpage/fitness',
        text: 'כושר',
    },
    {
        link: 'http://localhost:3000/regularpage/notifications',
        text: 'התראות',
    },
    {
        link: 'http://localhost:3000/regularpage/account',
        text: 'החשבון שלי',
    },
    {
        link: 'http://localhost:3000/regularpage/contact',
        text: 'איש קשר',
    },
    {
        link: 'http://localhost:3000/hospital',
        text: 'больница',
    },
    {
        link: 'http://localhost:3000/appointment',
        text: 'Встреча',
    },
    {
        link: 'http://localhost:3000/doctor',
        text: 'Врач',
    },
]

const displayMenu = () => {
    const menu = document.querySelector('.menu')
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

const Header = () => {

    return (
        <div className="container" style={{position:'sticky',zIndex:'9999999', top:0, backgroundColor:'#fff'}}>
            <div className="header_area d-flex align-center justify-between">
            <img onClick={displayMenu} className='menuIcon' src="/images/head/menu.png" width='19px' />
                <h2>Make an Appointment</h2>
                <a href="#" className="btn">
                    <img src={notification} alt="arrow" />
                </a>
            </div>
            <div className='menu' style={{left:'60%'}} >
				<img onClick={displayMenu} className='menuEsc' src='/images/head/esc.png' />
                <MenuItem />
				{/* <div className='mainList' >
					{
						menuItemsArr.map((el, i) => {
							return (
								<MenuItem text={el.text} link={el.link} key={i} /> 
							)
						})
					}
				</div> */}
			</div>
        </div>  
    )
}

export default Header