import './Start.css';
import React, { useEffect } from 'react';

const Start = ({setPageInfo}) => {

	useEffect(() => {
		setPageInfo({header: 'Start', className: 'StartPage'})
	},[]);

	return (
		<div className='startPage' >
			<img className='startImg' src='/images/start/congrats.png' />
			<h1 className='startH1' >congreatulations</h1>
			<h2 className='startH2' >Choose a start date</h2>
			<div className='startDates' >
				<div className='date startDateUp' >
					<div className='day' >27</div>
					<div className='month' >feb</div>
					<div className='year' >2021</div>
				</div>
				<div className='date startDateChoosen' >
					<div className='day' >28</div>
					<div className='month' >feb</div>
					<div className='year' >2022</div>
				</div>
				<div className='date startDateDown' >
					<div className='day' >01</div>
					<div className='month' >mar</div>
					<div className='year' ></div>
				</div>
			</div>
			<button className='startSubmit' >submit</button>
		</div>
	)
}

export default Start