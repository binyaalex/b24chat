import FitnessSquare from './FitnessSquare'

const FitnessSquareContainer = () => {
	const containerArr = [
		{
			img: 'url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)',
			text: 'yoga'
		},
		{
			img: 'url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)',
			text: 'yoga'
		},
		{
			img: 'url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)',
			text: 'yoga'
		},
		{
			img: 'url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)',
			text: 'yoga'
		},
	]

	return (
		<main className='fitnessSquareContainer' >
			{
				containerArr.map((el, i) => {
					return (
						<FitnessSquare img={el.img} text={el.text} /> 
					)
				})
			}
		</main>
	)
}

export default FitnessSquareContainer