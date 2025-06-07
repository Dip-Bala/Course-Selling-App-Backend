import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Signup from '../pages/user/signup.user'

export default function LandingPage(){
    return(
        <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    )
}