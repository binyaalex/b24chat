import NotificationsSquare from './NotificationsSquare'

const Notifications = () => {
	const containerArr = [
		{
			img: 'https://cdn5.vectorstock.com/i/1000x1000/77/54/doctor-vector-677754.jpg',
			massageBeforeBold: 'Congratulations! your baby is ',
			bold: '6 weeks',
			massageAfterBold: ' old today!',
			date: 'Today, 11:00 am',
		},
		{
			img: 'https://cdn5.vectorstock.com/i/1000x1000/77/54/doctor-vector-677754.jpg',
			massageBeforeBold: 'You have booked an online consultation with a doctor ',
			bold: 'Hanna Smith',
			massageAfterBold: '',			
			date: '15 Mar 2022, 12:30 am',
		},
		{
			img: 'https://cdn5.vectorstock.com/i/1000x1000/77/54/doctor-vector-677754.jpg',
			massageBeforeBold: 'Time to take your medicine! ',
			bold: 'B12 Vitamin',
			massageAfterBold: '',			
			date: '14 Mar 2022, 08:10 am',
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
						/> 
					)
				})
			}
		</main>
	)
}

export default Notifications