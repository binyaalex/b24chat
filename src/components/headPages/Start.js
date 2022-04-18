import './Start.css';
import './Dates.css';
import React, { useEffect } from 'react';
import Dates from './Dates';

const Start = ({setPageInfo}) => {

	useEffect(() => {
		setPageInfo({header: 'התחלה', className: 'StartPage'})
	},[]);

	return (
		<div className='startPage' >
			<img className='startImg' src='/images/start/congrats.png' />
			<h1 className='startH1' >מזל טוב!! בשעה טובה</h1>
			<h2 className='startH2' >בחרי תאריך</h2>
			<div className='startDates' >
				<div className='date startDateUp' >
					<div className='day' >27</div>
					<div className='month' >ינואר</div>
					<div className='year' >2021</div>
				</div>
				<div className='date startDateChoosen' >
					<div className='day' >28</div>
					<div className='month' >פברואר</div>
					<div className='year' >2022</div>
				</div>
				<div className='date startDateDown' >
					<div className='day' >01</div>
					<div className='month' >מרץ</div>
					<div className='year' ></div>
				</div>
			</div>
			<button className='startSubmit' >שלחי</button>
			<Dates />
		</div>
	)
}

export default Start