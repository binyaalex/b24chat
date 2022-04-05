const FitnessSquare = ({img, text}) => {
	return (
		<section className='fitnessSquare' style={{backgroundImage: img}} >
			<h1 className='fitnessSquareHeader' >{text}</h1>
		</section>
	)
}

export default FitnessSquare