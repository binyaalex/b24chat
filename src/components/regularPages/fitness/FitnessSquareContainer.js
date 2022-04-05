import './Fitness.css';
import React, { useEffect } from 'react';
import FitnessSquare from './FitnessSquare'

const FitnessSquareContainer = ({setPageInfo}) => {
	useEffect(() => {
		setPageInfo({header: 'Fitness', className: 'fitnessPage'})
	},[]);

	const containerArr = [
		{
			img: '/images/fitness/breath.jpg',
			text: 'breath'
		},
		{
			img: '/images/fitness/yoga.jpg',
			text: 'yoga'
		},
		{
			img: '/images/fitness/stretching.jpg',
			text: 'stretching'
		},
		{
			img: '/images/fitness/workout.jpg',
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