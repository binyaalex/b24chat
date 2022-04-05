import './App.css';
import RegularPage from './components/regularPages/RegularPage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
	return (
    <BrowserRouter>
        <Routes>
            <Route path='/regularpage/*' element={<RegularPage />} />
        </Routes>
    </BrowserRouter>
	)
}

export default App;
