import './App.css';
import RegularPage from './components/regularPages/RegularPage'
import HeadPage from './components/headPages/HeadPage'
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
            <Route path='/headpage/*' element={<HeadPage />} />
        </Routes>
    </BrowserRouter>
	)
}

export default App;
