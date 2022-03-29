import './App.css';
import Head from './components/Head'
import FitnessSquareContainer from './components/FitnessSquareContainer'

function App() {
	return (
		<>
			<Head text='fitness' />
			<FitnessSquareContainer img='url(https://www.onebody.co.il/wp-content/uploads/2020/07/yoga_1.jpg)' text='yoga' />
		</>
	)
}

export default App;
