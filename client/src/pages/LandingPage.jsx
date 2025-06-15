// src/pages/LandingPage.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import InstructorHome from './instructor/InstructorHome';
import CreateCourse from './instructor/CreateCourse';
import ViewCourse from './instructor/ViewCourse.Instructor';
import UserLayout from './user/UserLayout';
import InstructorLogin from '../components/instructor/InstructorLogin';
import InstructorSignup from '../components/instructor/InstructorSignup';
import UserSignup from './user/signup.user';
import UserLogin from './user/login.user';
import InstructorLayout from './instructor/InstructorLayout';
import UserHome from './user/UserHome'
import UserPurchases from './user/UserPurchases'
import UserCourses from './user/UserCourses'
import RequireAuth from '../components/RequiredAuth'
import InstructorAuthLayout from '../pages/instructor/InstructorAuthLayout'


export default function LandingPage() {
  return (
    <div className="bg-purple-50">
      <Navbar />
      <Routes>
        {/* User routes */}
        <Route path="/user" element={
          <RequireAuth role="user">
          <UserLayout />
        </RequireAuth>
      }>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<UserHome />} />
          <Route path="purchases" element={<UserPurchases />} />
          <Route path="courses" element={<UserCourses />} />

        </Route>

        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />

        {/* Instructor Auth */}
        <Route path="/instructor/auth" element={<InstructorAuthLayout/>}>
        <Route index element={<Navigate to="signup" replace/>}/>
        <Route path="signup" element={<InstructorSignup />} />
        <Route path="login" element={<InstructorLogin />} />

        </Route>


        {/* Instructor protected layout and pages */}
        <Route path="/instructor" element={
           <RequireAuth role="instructor">
           <InstructorLayout />
         </RequireAuth>
        }>
          {/* <Route path="home" element={<InstructorHome />} /> */}
          <Route path="course/create" element={<CreateCourse />} />
          <Route path="course/preview" element={<ViewCourse />} />
        </Route>
      </Routes>
    </div>
  );
}


//default child set up
// In React Router, the index keyword is used inside a <Route> to indicate that this route is the default child route (i.e. the one that should render when the parent path is matched, but no further subpath is provided).