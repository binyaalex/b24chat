import {
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react';
import Head from '../repeats/head/Head'
import Start from './Start'

const HeadPage = () => {
	const [pageInfo, setPageInfo] = useState({})
	console.log(pageInfo)

	return (
		<div className='PageDad' >
			<div className='headPage' >
				<Head text={pageInfo.header} />
				<div className='variablePage' >
	            	<Routes>
	            		<Route path='/start' element={<Start setPageInfo={setPageInfo} />} />
	            	</Routes>
				</div>
			</div>
		</div>
	)
}

export default HeadPage