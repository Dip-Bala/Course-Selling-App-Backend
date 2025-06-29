import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSetRecoilState} from 'recoil'
import viewCourses from '../../api/instructor/previewCourses.instructor'
import {allCoursesInstructor} from '../../store/atoms/instructor/allCourses.instructor'

export default function NavbarInstructor(){
    const setCourses = useSetRecoilState(allCoursesInstructor);
    const navigate = useNavigate();

    async function getCourses(){
        const data = await viewCourses();
        setCourses(data)
        navigate('/instructor/course/preview')
    }
    return(
        <div className="flex flex-col gap-4 p-4 w-48 border-r">
            <button className="flex items-center text-gray-900 font-medium text-sm rounded-sm focus:bg-purple-200 p-2 transition-all" 
            onClick={()=> navigate('/instructor/course/create')}>
            Create Course
            </button>


            <button className="flex items-center text-gray-900 font-medium text-sm rounded-sm focus:bg-purple-200 p-2" onClick={getCourses}>
                View All Courses
            </button>
         </div>
    )
}


//  <svg width="32px" height="30px" viewBox="-1.4 -1.4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> 