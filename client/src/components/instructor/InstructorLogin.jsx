import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { instructorLogin } from '../../api/instructor/auth.instructor'
import Login from '../../components/auth/Login'
import { useRecoilState } from 'recoil'
import { loginAtom } from '../../store/atoms/auth/loginAtom'
import { userLoggedIn, userFirstName } from '../../store/atoms/loggedInStateAtom'


export default function InstructorLogin() {
    const navigate = useNavigate();
    const setUserLoggedIn = useSetRecoilState(userLoggedIn);
    const setUserName = useSetRecoilState(userFirstName)

    const [loginData, setLoginData] = useRecoilState(loginAtom);

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await instructorLogin(loginData); //response from api call
        alert(response.message);
        if (response.token) {
            localStorage.setItem('firstName', response.firstName);
            localStorage.setItem('token', response.token);
            setLoginData({ email: '', password: '' })
            setUserLoggedIn(true);
            setUserName(response.firstName)
            navigate('/instructor/course/preview')
        }

    }
    return (

        <Login handleSubmit={handleSubmit} />
    )
}