import './Fitness.css';
import React, { useEffect } from 'react';
import FitnessSquare from './FitnessSquare'

const FitnessSquareContainer = ({setPageInfo}) => {
	useEffect(() => {
		setPageInfo({header: 'Fitness', className: 'fitnessPage'})
	},[]);

	const containerArr = [
		{
			img: 'url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)',
			text: 'breath'
		},
		{
			img: 'url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)',
			text: 'yoga'
		},
		{
			img: 'url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)',
			text: 'stretching'
		},
		{
			img: 'url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)',
			text: 'workout'
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