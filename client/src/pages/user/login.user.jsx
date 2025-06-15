import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../api/user/auth.user'
import { userLoggedIn } from '../../store/atoms/user/login.user.atom'
import Login from '../../components/auth/Login'
export default function LoginUser() {
    const navigate = useNavigate();
    const setUserLoggedIn = useSetRecoilState(userLoggedIn)
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await userLogin(formData); //response from api call
        alert(response.message);
        if (response.token) {
            localStorage.setItem('firstName', response.firstName);
            localStorage.setItem('user-token', response.token);
            setUserLoggedIn(true);
            navigate('/user')
        }

    }
    return (
        <div className="flex flex-col items-center justify-center p-30 gap-5 md:gap-8">
            <p className="sm:text-4xl text-2xl font-semibold text-gray-900 text-center">Log in to continue your learning journey</p>
           <Login handleSubmit={handleSubmit} />
        </div>
    )
}