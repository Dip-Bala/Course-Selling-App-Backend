import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {loginAtom} from '../../store/atoms/auth/loginAtom'

export default function Login({handleSubmit}) {
    const setLoginData = useSetRecoilState(loginAtom);

    const handleChange = (e) => {
        setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <form className="flex flex-col items-center justify-center w-xs md:w-md" onSubmit={handleSubmit}>
        <input className="border border-gray-700 p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2 w-full" name="email" placeholder="Email" required onChange={handleChange} />
        <input className="border border-gray-700 w-full p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2" name="password" placeholder="Password" required onChange={handleChange} />
        <button className="w-full bg-purple-700 text-white font-semibold p-3 rounded-sm mt-5 hover:bg-purple-600" type="submit" >Log in</button>
    </form>
    )
}