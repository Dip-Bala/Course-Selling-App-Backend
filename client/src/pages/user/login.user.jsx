import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../api/user/auth.user'
import { userLoggedIn, userFirstName, roleAtom } from '../../store/atoms/loggedInStateAtom'
import Login from '../../components/auth/Login'
import { useRecoilState } from 'recoil'
import {loginAtom} from '../../store/atoms/auth/loginAtom'

export default function LoginUser() {
    const navigate = useNavigate();
    const setUserName = useSetRecoilState(userFirstName)
    const setUserLoggedIn = useSetRecoilState(userLoggedIn)
    const setRole = useSetRecoilState(roleAtom)
    const [loginData, setLoginData] = useRecoilState(loginAtom);
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await userLogin(loginData); //response from api call
        alert(response.message);
        if (response.token) {
            localStorage.setItem('token', response.token);
            setLoginData({email: '', password: ''})
            setUserLoggedIn(true);
            setRole('user');
            setUserName(response.firstName)
            navigate('/user')
        }

    }
    return (
        <div className="flex flex-col items-center justify-center gap-5 md:gap-8 py-40 md:py-50">
            <p className="sm:text-4xl text-2xl font-semibold text-gray-900 text-center">Log in to continue your learning journey</p>
           <Login handleSubmit={handleSubmit} />
        </div>
    )
}