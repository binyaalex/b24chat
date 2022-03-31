const NotificationsSquare = ({img, text}) => {
	return (
		<section className='NotificationsSquare' >
			<div className='NotificationsImgDiv' >
				<img className='NotificationsImg' src='https://cdn5.vectorstock.com/i/1000x1000/77/54/doctor-vector-677754.jpg' />
			</div>
			<div className='NotificationsTextDiv' >
				<h1 className='NotificationsTextHeader' >Congratulations! your baby is 6 weeks old today!</h1>
				<date className='NotificationsTextDate' >Today, 11:00 am</date>
			</div>
			<button className='NotificationsBtn' >ok</button>
		</section>
	)
}

export default NotificationsSquare