const FitnessSquare = ({img, text}) => {
	return (
		<main className='fitnessSquare' style={{backgroundImage: img}} >
			<h1 className='fitnessSquareHeader' >{text}</h1>
		</main>
	)
}

export default FitnessSquare