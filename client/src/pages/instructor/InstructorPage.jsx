import React from 'react'
import { useNavigate } from 'react-router-dom'
import InstructorSignup from '../../components/InstructorSignup'
export default function InstructorPage(){
    const navigate = useNavigate();
    return(
        <div className="flex justify-center items-center bg-amber-50 p-[5%]">
        <div className="flex flex-col sm:flex-row md:w-6xl md:gap-5 sm:gap-3 sm:p-5">
            <div className="flex flex-col sm:w-[50%] w-screen justify-center items-center">
                <h1 className="md:text-6xl sm:text-4xl font-semibold font-serif sm:m-5 text-3xl ">Come teach with us</h1>
                <p className=" m-5">Become an instructor --- help people learn and grow</p>
            </div>
            <div className="flex flex-col sm:w-[60%] items-center gap-7">
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
        </div>
    )
}