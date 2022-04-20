import {
    Routes,
    Route
} from "react-router-dom";
import React from 'react';
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import '../../../assets/css/screen.css';
import Hospital from "../Hospital";
const HospitalPage = () => {
    
    return (
        <div className="PageDad">
            <div className="hospitalpages">
                <Header />
                <Banner />
                <Routes>
                    <Route path='/' element={<Hospital  />} />
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default HospitalPage