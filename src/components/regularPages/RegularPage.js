import {
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react';
import Head from '../repeats/head/Head'
import MyBaby from './mybaby/MyBaby'
import FitnessSquareContainer from './fitness/FitnessSquareContainer'
import Notifications from './notifications/Notifications'
import Footer from '../repeats/footer/Footer'

const RegularPage = () => {
	const [pageInfo, setPageInfo] = useState({})
	console.log(pageInfo)

	return (
		<div className='PageDad' >
			<div className='regularPage' >
				<Head text={pageInfo.header} />
            	<Routes>
            		<Route path='/mybaby' element={<MyBaby setPageInfo={setPageInfo} />} />
            		<Route path='/fitness' element={<FitnessSquareContainer setPageInfo={setPageInfo} />} />
            		<Route path='/notifications' element={<Notifications setPageInfo={setPageInfo} />} />
            	</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default RegularPage