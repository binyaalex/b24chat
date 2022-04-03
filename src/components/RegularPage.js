import {
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react';
import Head from './Head'
import MyBaby from './MyBaby'
import FitnessSquareContainer from './FitnessSquareContainer'
import Notifications from './Notifications'
import Footer from './Footer'

const RegularPage = () => {
	const [pageInfo, setPageInfo] = useState({})
	console.log(pageInfo)

	return (
		<div className='PageDad' >
{/*			<div className='fitnessPage' >
				<Head text='fitness' />
	            	<Routes>
	            		<Route path='/fitness' element={<FitnessSquareContainer />} />
	            		<Route path='/notifications' element={<Notifications />} />
	            	</Routes>
				<Footer />
			</div>*/}
			<div className={pageInfo.className} >
				<Head text={pageInfo.header} />
	            	<Routes>
	            		<Route path='/mybaby' element={<MyBaby setPageInfo={setPageInfo} />} />
	            		<Route path='/fitness' element={<FitnessSquareContainer setPageInfo={setPageInfo} />} />
	            		<Route path='/notifications' element={<Notifications setPageInfo={setPageInfo} />} />
	            	</Routes>
				<Footer />
			</div>
		</div>
	)
}

export default RegularPage