const FitnessSquare = ({img, text}) => {
	return (
		<div className='fitnessSquare'>
			<img className='fitnessSquareImg' src={img} />
			<h1 className='fitnessSquareHeader' >{text}</h1>
		</div>
	)
}

export default FitnessSquare