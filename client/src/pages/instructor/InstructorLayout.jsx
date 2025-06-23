import React from 'react';
import NavbarInstructor from '../../components/instructor/Navbar.Instructor';
import { Outlet } from 'react-router-dom';

export default function InstructorLayout() {
  return (
    <div className="flex justify-between ">
      <NavbarInstructor />
      <div className="w-full  bg-white/30 ">
      <Outlet /> 
      </div>
    </div>
  );
}
