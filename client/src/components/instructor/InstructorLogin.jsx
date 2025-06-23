import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { instructorLogin } from '../../api/instructor/auth.instructor'
import Login from '../../components/auth/Login'
import { useRecoilState } from 'recoil'
import { loginAtom } from '../../store/atoms/auth/loginAtom'
import { userLoggedIn, userFirstName, roleAtom } from '../../store/atoms/loggedInStateAtom'
import {allCoursesInstructor} from '../../store/atoms/instructor/allCourses.instructor'
import viewCourses from '../../api/instructor/previewCourses.instructor'

export default function InstructorLogin() {
    const navigate = useNavigate();
    const setUserLoggedIn = useSetRecoilState(userLoggedIn);
    const setUserName = useSetRecoilState(userFirstName)
    const setCourses = useSetRecoilState(allCoursesInstructor);
    const setRole = useSetRecoilState(roleAtom)
    const [loginData, setLoginData] = useRecoilState(loginAtom);

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await instructorLogin(loginData); //response from api call
        alert(response.message);
        if (response.token) {
            localStorage.setItem('token', response.token);
            setLoginData({ email: '', password: '' })
            setUserLoggedIn(true);
            setRole('instructor');
            setUserName(response.firstName)
            const courses = await viewCourses();
            setCourses(courses)
            navigate('/instructor/course/preview')
        }
    }
    return (

        <Login handleSubmit={handleSubmit} />
    )
}