import React from 'react'
import axios from 'axios'
import { allCoursesInstructor } from '../../store/atoms/instructor/allCourses.instructor'
import { useRecoilValue } from 'recoil'

export default function ViewCourse() {
    const courses = useRecoilValue(allCoursesInstructor);
    console.log(courses);
    return (
        <div className="grid grid-cols-1 justify-center items-center gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 m-10 ">
            {
                courses.map((course, index) => {
                    return <CourseComponent key={index} course={course} />
                })
            }
        </div>
    )
}

function CourseComponent({ course }) {
    async function handleEdit(courseId) {
        console.log("Handle edit got called");
        console.log(courseId)
    }
    return (
        <div className="flex flex-col rounded shadow-sm text-gray-700 ">
            {/* <div className="w-[50%]"> */}
            <img className="w-fit" src={course.courseImg} />
            {/* </div> */}
            <div className="flex flex-col px-4 py-2 gap-1">
                <h2 className="text-xl font-bold sm:text-2xl ">{course.title}</h2>
                <p className="text-md text-gray-600 font-medium">{course.description}</p>
                <p className="text-md text-gray-600 font-medium"><span className="text-gray-900">Category: </span>{course.category}</p>
                <p className="text-md text-gray-600 font-medium"><span className="text-gray-900">Language: </span> {course.language}</p>
                <p className="text-md text-gray-600 font-medium"><span className="text-gray-900">$ </span>{course.price}</p>
                <button className=" p-2 cursor-pointer" onClick={() => {handleEdit(course._id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                    </button>
            </div>
        </div>
    )
}