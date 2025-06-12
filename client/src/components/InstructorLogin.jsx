import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { instructorLogin } from '../api/auth.instructor'
import { instructorLoggedIn } from '../store/atoms/login.instructor.atom'

export default function Login() {
    const navigate = useNavigate();
    const setUserLoggedIn = useSetRecoilState(instructorLoggedIn)
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData(prev => {
            return ({
                ...prev,
                [e.target.name]: e.target.value
            })
        }
        )
        console.log(formData)
    };
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
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-4xl font-semibold text-gray-900 ">Log in to continue your learning journey</p>
            <form className="flex flex-col items-center justify-center h-[50%] w-[50%] " onSubmit={handleSubmit}>
                <input className="border border-gray-700 w-[60%] p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2" name="email" placeholder="Email" required onChange={handleChange} />
                <input className="border border-gray-700 w-[60%] p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2" name="password" placeholder="Password" required onChange={handleChange} />
                <button className="w-[60%] bg-purple-700 text-white font-semibold p-3 rounded-sm mt-5" type="submit" >Log in</button>
            </form>
        </div>
    )
}