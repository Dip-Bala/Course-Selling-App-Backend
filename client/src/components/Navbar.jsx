import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLoggedIn } from "../store/atoms/login.user"
import { useRecoilState } from 'recoil'

export default function Navbar() {
    const navigate = useNavigate();
    const [userIsLoggedIn, setUserIsLoggedIn]= useRecoilState(userLoggedIn);

    const userName = localStorage.getItem('firstName');
    return (
        <div className="flex py-5 px-10 items-center justify-between shadow-md">
            <h2 className="font-mono text-2xl font-semibold text-gray-900" onClick={() => navigate('/')}>Edurex</h2>
            {userIsLoggedIn ?
                <div>
                  <p>Hi, {userName}</p>
                  <button onClick={() => setUserIsLoggedIn(false)}>Log out</button>
                </div>
            :
            <div className="flex gap-4">
                <button className="text-purple-500 bg-purple-100 p-2 rounded-sm" onClick={() => navigate('/instructor')}>Be an Instructor</button>
                <button className="border border-purple-700 px-3 rounded-sm text-purple-700 font-medium" onClick={() => navigate('/user/login')}>Log in</button>
                <button className="bg-purple-800 px-3 rounded-sm text-white font-medium"  onClick={() => navigate('/user/signup')}>Sign up</button>
            </div>
            }
        </div>
    )
}