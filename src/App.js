import './App.css';
import RegularPage from './components/regularPages/RegularPage'
import HeadPage from './components/headPages/HeadPage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HospitalPage from './components/hospitalPage/Layouts/HospitalPage';
import AppointmentPage from './components/appointmentPage/Layouts/AppointmentPage';
import DoctorPage from './components/appointmentPage/Layouts/DoctorPage';

function App() {
	return (
    <BrowserRouter>
        <Routes>
            <Route path='/regularpage/*' element={<RegularPage />} />
            <Route path='/headpage/*' element={<HeadPage />} />
            <Route path='/hospital/*' element={<HospitalPage />} />
            <Route path='/appointment/*' element={<AppointmentPage />} />
            <Route path='/doctor/*' element={<DoctorPage />} />
        </Routes>
    </BrowserRouter>
	)
}

export default App;
