import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../api/auth.user'
import { userLoggedIn } from '../../store/atoms/login.user.atom'

export default function Login() {
    const navigate = useNavigate();
    const setUserLoggedIn = useSetRecoilState(userLoggedIn)
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData(prev => {
            return ({
                ...prev,
                [e.target.name]: e.target.value
            })
        }
            // prev => ({ ...prev, [e.target.name]: e.target.value }));
        )
        console.log(formData)
    };
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await userLogin(formData); //response from api call
        alert(response.message);
        if (response.token) {
            localStorage.setItem('firstName', response.firstName);
            localStorage.setItem('user-token', response.token);
            setUserLoggedIn(true);
            navigate('/user/home')
        }

    }
    return (
        <div className="flex flex-col items-center justify-center p-30 gap-5 md:gap-8">
            <p className="sm:text-4xl text-2xl font-semibold text-gray-900 text-center">Log in to continue your learning journey</p>
            <form className="flex flex-col items-center justify-center w-[80%] sm:w-[60%] md:w-[30%]  " onSubmit={handleSubmit}>
                <input className="border border-gray-700 p-2 sm:p-3 w-[100%] text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2" name="email" placeholder="Email" required onChange={handleChange} />
                <input className="border border-gray-700 p-2 w-[100%] text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2 sm:p-3" name="password" placeholder="Password" required onChange={handleChange} />
                <button className="bg-purple-700 text-white font-semibold p-2 rounded-sm mt-5 w-[100%] sm:p-3" type="submit" >Log in</button>
            </form>
        </div>
    )
}