import './App.css';
import Head from './components/Head'
import FitnessSquareContainer from './components/FitnessSquareContainer'
import Notifications from './components/Notifications'
import Footer from './components/Footer'

function App() {
	return (
		<div className='fitnessPageDad' >
			<div className='fitnessPage' >
				<Head text='fitness' />
				{/*<FitnessSquareContainer />*/}
				<Notifications />
				<Footer />
			</div>
		</div>
	)
}

export default App;
