import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {RecoilRoot} from 'recoil'
import Navbar from '../components/Navbar'
import Signup from '../pages/user/signup.user'
import Login from '../pages/user/login.user'
import InstructorPage from './instructor/InstructorPage'
import InstructorLogin from '../components/InstructorLogin';
export default function LandingPage() {

  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<InstructorPage/>}/>
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/instructor" element={<InstructorPage/>} />
          <Route path="/instructor/login" element={<InstructorLogin/>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </RecoilRoot>
  )
}