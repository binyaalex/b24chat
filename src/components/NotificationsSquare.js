const NotificationsSquare = ({img, massage, date}) => {
	return (
		<section className='NotificationsSquare' >
			<div className='NotificationsImgDiv' >
				<img className='NotificationsImg' src={img} />
			</div>
			<div className='NotificationsTextDiv' >
				<h1 className='NotificationsTextMassage' >{massage}</h1>
				<date className='NotificationsTextDate' >{date}</date>
			</div>
			<button className='NotificationsBtn' >ok</button>
		</section>
	)
}

export default NotificationsSquare