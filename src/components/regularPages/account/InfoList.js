import React, { useEffect } from 'react';
import InfoSquare from './InfoSquare';

const InfoList = () => {

	const containerArr = [
		{
			img: '/images/contact/phone.png',
			header: 'אנשי קשר',
			paragraph: 'שם, טלפון, אימייל'
		},
		{
			img: '/images/account/cardiogram.png',
			header: 'מידע בריאותי',
			paragraph: 'היסטוריה  רפואית והריון'
		},
		{
			img: '/images/account/hospital.png',
			header: 'בית חולים',
			paragraph: 'המידע  שלך ושל בית החולים'
		},
		{
			img: '/images/account/calendar.png',
			header: 'הפגישות שלי',
			paragraph: 'אולטראסאונד ,בדיקות וכדומה'
		},
		{
			img: '/images/account/emergency.png',
			header: 'מספרי חירום',
			paragraph: 'אנשי החירום שלך שיקבלו התראה'
		},
	]

	return (
		<main className='infoList' >
			{
				containerArr.map((el, i) => {
					console.log(el.massageAfterBold)
					return (
						<InfoSquare
							img={el.img}
							header={el.header}
							paragraph={el.paragraph}
						/> 
					)
				})
			}
		</main>
	)
}

export default InfoList