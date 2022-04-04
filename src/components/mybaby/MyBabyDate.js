const MyBabyDate = ({day, month}) => {
	return (
		<date className='MyBabyDate' >
			<day className='MyBabyDateDay' >{day}</day>
			<month className='MyBabyDateMonth' >{month}</month>
			<line className='MyBabyDateLine' >|</line>
		</date>	
	)
}

export default MyBabyDate