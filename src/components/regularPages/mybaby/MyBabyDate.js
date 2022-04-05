const MyBabyDate = ({num, day, month}) => {

	const className = 'MyBabyDate MyBabyDate' + num
	console.log(className)

	return (
		<date className={className}>
			<day className='MyBabyDateDay' >{day}</day>
			<month className='MyBabyDateMonth' >{month}</month>
			<line className='MyBabyDateLine' >|</line>
		</date>	
	)
}

export default MyBabyDate