import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil'
import { userLoggedIn } from "../../store/atoms/user/login.user.atom"
// import screenSize from '../../store/atoms/screenSize.atom'

export default function Navbar() {
    const navigate = useNavigate();
    const [userIsLoggedIn, setUserIsLoggedIn] = useRecoilState(userLoggedIn);
    const userName = localStorage.getItem('firstName');
    return (
        <div className="flex justify-center shadow-md">
            <div className="flex sm:py-5 sm:px-10 items-center justify-between md:w-6xl sm:w-3xl w-2xl p-4 gap-5">
                <h2 className="font-mono sm:text-2xl font-semibold text-gray-900" onClick={() => navigate('/')}>Edurex</h2>
                {userIsLoggedIn ?
                    <div className="flex items-center gap-2 text-sm md:text-md font-semibold">
                        <p>Hi, {userName}</p>
                        <button className=" text-purple-800 border border-purple-800 p-2 sm:p-3 rounded-sm" onClick={() => setUserIsLoggedIn(false)}>Log out</button>
                    </div>
                    :
                    <div className="flex gap-2">
                        <button className="text-purple-500 bg-purple-100 sm:p-3 p-1 rounded-sm text-sm sm:text-md font-medium" onClick={() => navigate('/instructor/auth/signup')}>Be an Instructor</button>
                        <button className="border border-purple-700 rounded-sm text-purple-700 sm:p-3 p-1 text-sm sm:text-md font-medium" onClick={() => navigate('/user/login')}>Log in</button>
                        <button className="bg-purple-800  text-white sm:p-3 p-2 rounded-sm text-sm sm:text-md font-medium" onClick={() => navigate('/user/signup')}>Sign up</button>
                    </div>
                }
            </div> 
        </div>
    )
}