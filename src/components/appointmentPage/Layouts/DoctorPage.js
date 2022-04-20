import {
    Routes,
    Route
} from "react-router-dom";
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import '../../../assets/css/doctor.css';
import Doctor from "../Doctor";
const DoctorPage = () => {
    
    return (
        <div className="PageDad">
            <div className="main doctorpage">
                <Routes>
                    <Route path='/' element={<Doctor  />} />
                </Routes>
            </div>
        </div>
    )
}

export default DoctorPage