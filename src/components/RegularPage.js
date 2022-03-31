import {
  Routes,
  Route
} from "react-router-dom";
import Head from './Head'
import FitnessSquareContainer from './FitnessSquareContainer'
import Notifications from './Notifications'
import Footer from './Footer'

const RegularPage = () => {
	return (
		<div className='fitnessPageDad' >
			<div className='fitnessPage' >
				<Head text='fitness' />
            	<Routes>
            		<Route path='/fitness' element={<FitnessSquareContainer />} />
            		<Route path='/notifications' element={<Notifications />} />
            	</Routes>
				<Footer />
			</div>
		</div>
	)
}

export default RegularPage