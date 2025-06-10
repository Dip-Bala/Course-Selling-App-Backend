import React from 'react'
import { useNavigate } from 'react-router-dom'
import InstructorSignup from '../../components/InstructorSignup'
export default function InstructorPage(){
    const navigate = useNavigate();
    return(
        <div className=" flex justify-center items-center bg-amber-50 p-20">
            <div className="flex flex-col py-20 px-20 w-[50%]">
                <h1 className="text-7xl font-semibold font-serif m-5">Come teach with us</h1>
                <p className=" m-5">Become an instructor --- help people learn and grow</p>
            </div>
            <div className="flex flex-col w-[60%] items-center gap-7">
            <InstructorSignup />
            <div className="">
                <p>Already have an account? <span className="font-semibold text-purple-800 underline underline-offset-3 cursor-pointer" onClick={() => navigate("/instructor/login")}>Log in</span></p>
            </div>
            </div>
           {/* <div className="flex flex-col p-10 mr-5 w-[50%] ">
            <button className="w-[60%] bg-purple-700 text-white font-semibold p-3 rounded-sm mt-5" onClick={() => navigate('/instructor/login')}>
                Login
            </button>
            <button className="w-[60%] bg-purple-700 text-white font-semibold p-3 rounded-sm mt-5" onClick={() => navigate('/instructor/login')}>
                SignUp
            </button>
           </div> */}
        </div>
    )
}