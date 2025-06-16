import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { coursesUser } from '../../store/atoms/user/courses.user'
import {purchaseCourse} from '../../api/course/purchase.course'


export default function UserCourses() {
    const courses = useRecoilValue(coursesUser);
    // console.log(typeof courses)
    return (
        <div className="flex flex-col p-[5%] sm:grid sm:grid-cols-2 sm:p-[3%] lg:grid-cols-3 md:gap-8 max-h-min">
            {
                courses.map((course) => {
                   return  <CoursesComponent key={course._id} course={course} />
                })
            }
        </div>
    )
}

function CoursesComponent({ course }) {
    async function handlePurchase(courseId){
        const data = await purchaseCourse(courseId);
        if(data.status === 200){
            alert("Congrats you've successfully purchased this course")
        }
    }
    return (
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-all">
            <div className="aspect-photo bg-gray-200 rounded mb-3">
                <img src={course.courseImg} alt={course.title} className="w-full h-full" />
            </div>
            <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.description}</p>
            <p className="text-sm">{course.category}</p>
            <p className="text-sm">{course.language}</p>
            <p className="text-sm">$ {course.price}</p>
            <button className="bg-black text-white p-2 " onClick={() => handlePurchase(course._id)} >Purchase Now</button>
        </div>
    )
}