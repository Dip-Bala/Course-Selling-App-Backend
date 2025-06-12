// src/pages/LandingPage.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InstructorHome from './instructor/InstructorHome';
import CreateCourse from './instructor/CreateCourse';
import ViewCourse from './instructor/ViewCourse.Instructor';
import UserLayout from './user/UserLayout';
import InstructorPage from './instructor/InstructorPage';
import InstructorLogin from '../components/InstructorLogin';
import Signup from './user/signup.user';
import Login from './user/login.user';
import InstructorLayout from './instructor/InstructorLayout';
import UserHome from './user/UserHome'
import UserPurchases from './user/UserPurchases'
import UserCourses from './user/UserCourses'
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* User routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<UserHome />} />
          <Route path="purchases" element={<UserPurchases />} />
          <Route path="courses" element={<UserCourses />} />

        </Route>

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


//default child set up
// In React Router, the index keyword is used inside a <Route> to indicate that this route is the default child route (i.e. the one that should render when the parent path is matched, but no further subpath is provided).