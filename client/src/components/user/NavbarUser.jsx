import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSetRecoilState } from 'recoil'
import {purchasedCourses} from '../../api/user/purchases.user'
import {getUserCourses} from '../../api/user/courses.user'
import {coursesUser } from '../../store/atoms/user/courses.user'
import {purchasedAtom} from '../../store/atoms/user/purchasedCourse.user'

export default function NavbarUser() {
    const navigate = useNavigate();
    const setUserCourses = useSetRecoilState(coursesUser);
    const setpurchasedCourses = useSetRecoilState(purchasedAtom);

    async function handleCourses(){
        const response = await getUserCourses();
        // console.log(response)
        setUserCourses(response);
        navigate('/user/courses')
    }

    async function handlePurchases(){
        const response = await purchasedCourses();
        // console.log(response)
        setpurchasedCourses(response);
        navigate('/user/purchases')
    }
    return (
        <div className="flex flex-col bg-blue-100 md:w-[20%] h-screen p-[2%] gap-5 items-start sm:w-[25%] font-medium ">
            {/* <UserHome/> */}
            <button className="flex items-center gap-2 p-2 rounded hover:bg-blue-200 transition-all"
            onClick={()=> navigate('/user/home')}
            >
                <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4a4a4a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#4a4a4a"></path> </g>
                </svg>
                Home
            </button>
            <button className="flex items-center gap-2 p-2 rounded hover:bg-blue-200 transition-all"
            onClick={handleCourses}>
                <svg className="w-5 h-5" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#4a4a4a" d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path> <path fill="#4a4a4a" d="M8 0l-8 4 8 5 8-5-8-4z"></path> <path fill="#4a4a4a" d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path> </g>
                </svg>
                Courses
            </button>
            <button className="flex items-center gap-2 p-2 rounded hover:bg-blue-200 transition-all"
            onClick={handlePurchases}
            >
            <svg className="w-5 h-5" fill="#4a4a4a" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#4a4a4a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 9a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 9z"></path></g></svg>
                Purchases
                </button>
        </div>
    )
}