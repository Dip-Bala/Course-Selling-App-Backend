// src/pages/LandingPage.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InstructorHome from './instructor/InstructorHome';
import CreateCourse from './instructor/CreateCourse';
import ViewCourse from './instructor/ViewCourse.Instructor';
import UserHome from './user/UserHome';
import InstructorPage from './instructor/InstructorPage';
import InstructorLogin from '../components/InstructorLogin';
import Signup from './user/signup.user';
import Login from './user/login.user';
import InstructorLayout from './instructor/InstructorLayout';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* User routes */}
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/login" element={<Login />} />

        {/* Instructor Auth */}
        <Route path="/instructor/signup" element={<InstructorPage />} />
        <Route path="/instructor/login" element={<InstructorLogin />} />

        {/* Instructor protected layout and pages */}
        <Route path="/instructor" element={<InstructorLayout />}>
          {/* <Route path="home" element={<InstructorHome />} /> */}
          <Route path="course/create" element={<CreateCourse />} />
          <Route path="course/preview" element={<ViewCourse />} />
        </Route>
      </Routes>
    </>
  );
}
