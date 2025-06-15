import React from 'react';
import NavbarInstructor from '../../components/instructor/Navbar.Instructor';
import { Outlet } from 'react-router-dom';

export default function InstructorLayout() {
  return (
    <div>
      <NavbarInstructor />
      <Outlet /> 
    </div>
  );
}
