const NotificationsSquare = ({img, massageBeforeBold, bold, massageAfterBold, date}) => {
	console.log(massageAfterBold)
	return (
		<section className='NotificationsSquare' >
			<div className='NotificationsImgDiv' >
				<img className='NotificationsImg' src={img} />
			</div>
			<div className='NotificationsTextDiv' >
				<h1 className='NotificationsTextMassage' >{massageBeforeBold} <span className='NotificationsTextMassageSpan'>{bold}</span> {massageAfterBold}</h1>
				<date className='NotificationsTextDate' >{date}</date>
			</div>
			<button className='NotificationsBtn' >ok</button>
		</section>
	)
}

export default NotificationsSquare