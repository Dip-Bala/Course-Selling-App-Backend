import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLoggedIn } from "../store/atoms/login.user"
import { useRecoilState } from 'recoil'

export default function Navbar() {
    const navigate = useNavigate();
    const [userIsLoggedIn, setUserIsLoggedIn]= useRecoilState(userLoggedIn)
    return (
        <div className="flex p-3 items-center justify-between shadow-md">
            <h2 className="font-mono text-sm font-semibold">Edurex</h2>
            {userIsLoggedIn ?
                <div>
                  <p>Hi, user</p>
                  <button onClick={() => setUserIsLoggedIn(false)}>Log out</button>
                </div>
            :
            <div className="flex gap-4">
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/signup')}>Register</button>
            </div>
            }
        </div>
    )
}