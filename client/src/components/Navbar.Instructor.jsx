import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSetRecoilState} from 'recoil'
import viewCourses from '../api/previewCourses.instructor'
import {allCoursesInstructor} from '../store/atoms/allCourses.instructor'

export default function NavbarInstructor(){
    const setCourses = useSetRecoilState(allCoursesInstructor);
    async function getCourses(){
        const data = await viewCourses();
        setCourses(data)
        navigate('/instructor')
    }
    const navigate = useNavigate();
    return(
        <div className="flex justify-center items-center gap-4 p-4 bg-blue-200">
            <button className="flex items-center bg-purple-400 text-white font-medium text-sm p-1 rounded-sm" onClick={()=> navigate('/instructor/course/create')}>
            <svg width="32px" height="30px" viewBox="-1.4 -1.4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Create Course
            </button>
            <button className="flex items-center bg-purple-400 text-white font-medium text-sm p-2 rounded-sm" onClick={getCourses}>
                View All Courses
            </button>
         </div>
    )
}

