import {
    Routes,
    Route
} from "react-router-dom";
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import '../../../assets/css/screen.css';
import '../../../assets/css/appointement.css';
import Appointement from "../Appointement";
const AppointmentPage = () => {
    
    return (
        <div className="PageDad">
            <div className="hospitalpages">
                <Header />
                <Routes>
                    <Route path='/' element={<Appointement  />} />
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default AppointmentPage