import NotificationsSquare from './NotificationsSquare'

const Notifications = () => {
	const containerArr = [
		{
			img: 'https://cdn5.vectorstock.com/i/1000x1000/77/54/doctor-vector-677754.jpg',
			massage: 'Congratulations! your baby is 6 weeks old today!',
			date: 'Today, 11:00 am',
		},
		{
			img: 'https://cdn5.vectorstock.com/i/1000x1000/77/54/doctor-vector-677754.jpg',
			massage: 'You have booked an online consultation with a doctor Hanna Smith',
			date: '15 Mar 2022, 12:30 am',
		},
		{
			img: 'https://cdn5.vectorstock.com/i/1000x1000/77/54/doctor-vector-677754.jpg',
			massage: 'Time to take your medicine! B12 Vitamin',
			date: '14 Mar 2022, 08:10 am',
		},
	]

	return (
		<main className='notifications' >
			{
				containerArr.map((el, i) => {
					return (
						<NotificationsSquare img={el.img} massage={el.massage} date={el.date} /> 
					)
				})
			}
		</main>
	)
}

export default Notifications