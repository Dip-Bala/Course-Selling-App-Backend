import React from 'react'
import {signupAtom} from '../../store/atoms/auth/signupAtom.js'
import {useSetRecoilState} from 'recoil'

export default function SignupComponent({handleSubmit}){
    const setSignupData = useSetRecoilState(signupAtom);

    const handleChange = (e) => {
        setSignupData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
    <form className="flex flex-col items-center justify-center " onSubmit={handleSubmit}>
        <div className="flex m-2 w-[100%]">
          <input className="border border-gray-700 w-1/2 p-2 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm mr-1 sm:p-3" name="firstName" placeholder="First Name" onChange={handleChange} />
          <input className="border border-gray-700 w-1/2 p-2 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm ml-1 sm:p-3" name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>

        <input className="border border-gray-700 p-2 w-[100%] text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2 sm:p-3" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border border-gray-700 p-2 w-[100%] text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2 sm:p-3" name="password" placeholder="Password" type="password" onChange={handleChange} />
        <button className="bg-purple-700 text-white font-semibold p-2 rounded-sm mt-5 w-[100%] sm:p-3" type="submit">Sign Up</button>
      </form>
      )
}