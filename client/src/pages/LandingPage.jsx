import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {RecoilRoot} from 'recoil'
import Navbar from '../components/Navbar'
import Signup from '../pages/user/signup.user'
import Login from '../pages/user/login.user'
export default function LandingPage() {

  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </RecoilRoot>
  )
}