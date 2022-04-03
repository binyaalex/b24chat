const NotificationsSquare = ({img, massageBeforeBold, bold, massageAfterBold, date, btn}) => {
	console.log(massageAfterBold)
	return (
		<section className='NotificationsSquare' >
			<div className='NotificationsImgDiv' >
				<img className='NotificationsImg' src={img} />
			</div>
			<div className='NotificationsTextDiv' >
				<h1 className='NotificationsTextMassage' >
					{massageBeforeBold} 
					<span className='NotificationsTextMassageSpan'>{bold}</span>
					 {massageAfterBold}
				</h1>
				<date className='NotificationsTextDate' >{date}</date>
				<button className='NotificationsBtn' >{btn}</button>
			</div>
		</section>
	)
}

export default NotificationsSquare