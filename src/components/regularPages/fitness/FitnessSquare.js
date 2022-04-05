const FitnessSquare = ({img, text}) => {
	return (
		<div className='fitnessSquare'>
		{/*<section className='fitnessSquare' style={{backgroundImage: img}} >
			<h1 className='fitnessSquareHeader' >{text}</h1>
		</section>*/}
			<img className='fitnessSquareImg' src={img} />
			<h1 className='fitnessSquareHeader' >{text}</h1>
		</div>
	)
}

export default FitnessSquare