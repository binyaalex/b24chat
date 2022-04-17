import React, { useEffect } from 'react';

const Start = ({setPageInfo}) => {

	useEffect(() => {
		setPageInfo({header: 'Start', className: 'StartPage'})
	},[]);

	return (
		<div className='startPage' >
			<img className='startImg' src='' />
			<h1 className='startH1' > </h1>
			<h2 className='startH2' > </h2>
			<div className='startDates' >
				<div className='startDateUp' >
					<div className='day' > </div>
					<div className='month' > </div>
					<div className='year' > </div>
				</div>
				<div className='startDateChoosen' >
					<div className='day' > </div>
					<div className='month' > </div>
					<div className='year' > </div>
				</div>
				<div className='startDateDown' >
					<div className='day' > </div>
					<div className='month' > </div>
					<div className='year' > </div>
				</div>
			</div>
			<div className='startSubmit' > </div>
		</div>
	)
}

export default Start