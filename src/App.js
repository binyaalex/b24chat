import './App.css';
import Head from './components/Head'
import FitnessSquareContainer from './components/FitnessSquareContainer'
import Footer from './components/Footer'

function App() {
	return (
		<div className='fitnessPageDad' >
			<div className='fitnessPage' >
				<Head text='fitness' />
				<FitnessSquareContainer img='url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)' text='yoga' />
				<Footer />
			</div>
		</div>
	)
}

export default App;
