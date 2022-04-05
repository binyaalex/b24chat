import './Notifications.css';
import React, { useEffect } from 'react';
import NotificationsSquare from './NotificationsSquare'

const Notifications = ({setPageInfo}) => {

	useEffect(() => {
		setPageInfo({header: 'Notifications', className: 'notificationsPage'})
	},[]);

	const containerArr = [
		{
			img: '/images/notifications/babyPaint.jpg',
			massageBeforeBold: 'Congratulations! your baby is ',
			bold: '6 weeks',
			massageAfterBold: ' old today!',
			date: 'Today, 11:00 am',
			btn: '/images/notifications/okBtn.png'
		},
		{
			img: '/images/notifications/dr.jpg',
			massageBeforeBold: 'You have booked an online consultation with a doctor ',
			bold: 'Hanna Smith',
			massageAfterBold: '',			
			date: '15 Mar 2022, 12:30 am',
			btn: '/images/notifications/okBtn.png'
		},
		{
			img: '/images/notifications/vitamin.jpg',
			massageBeforeBold: 'Time to take your medicine! ',
			bold: 'B12 Vitamin',
			massageAfterBold: '',			
			date: '14 Mar 2022, 08:10 am',
			btn: '/images/notifications/doneBtn.png'
		},
	]

	return (
		<main className='notifications' >
			{
				containerArr.map((el, i) => {
					console.log(el.massageAfterBold)
					return (
						<NotificationsSquare
							img={el.img}
							massageBeforeBold={el.massageBeforeBold}
							bold={el.bold}
							massageAfterBold={el.massageAfterBold}
							date={el.date}
							btn={el.btn}
						/> 
					)
				})
			}
		</main>
	)
}

export default Notifications