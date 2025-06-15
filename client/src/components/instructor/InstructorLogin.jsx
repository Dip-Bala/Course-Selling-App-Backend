import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { instructorLogin } from '../../api/instructor/auth.instructor'
import { instructorLoggedIn } from '../../store/atoms/instructor/login.instructor.atom'
import Login from '../../components/auth/Login'

export default function InstructorLogin() {
    const navigate = useNavigate();
    const setUserLoggedIn = useSetRecoilState(instructorLoggedIn)
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await instructorLogin(formData); //response from api call
        alert(response.message);
        if (response.token) {
            localStorage.setItem('firstName', response.firstName);
            localStorage.setItem('instructor-token', response.token);
            setUserLoggedIn(true);
            navigate('/instructor/course/preview')
        }

    }
    return (
        
        <Login handleSubmit={handleSubmit}/>
    )
}