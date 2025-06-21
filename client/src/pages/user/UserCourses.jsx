import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { coursesUser } from '../../store/atoms/user/courses.user'
import {purchaseCourse} from '../../api/course/purchase.course'
import {getUserCourses} from '../../api/user/courses.user'
// import {coursesUser } from '../../store/atoms/user/courses.user'

export default function UserCourses() {
    
    const setUserCourses = useSetRecoilState(coursesUser);
    const courses = useRecoilValue(coursesUser);
    useEffect(()=> {
        const fetchCourses = async () => {
            try {
                const response = await getUserCourses();
                setUserCourses(response);
            } catch (error) {
                console.error("Failed to fetch user courses:", error);
            }
        };
        fetchCourses();
    }, [setUserCourses]);
    // console.log(typeof courses)

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 place-items-center auto-rows-fr justify-center items-center">
            {
                courses.map((course) => {
                   return  <CoursesComponent key={course._id} course={course} />
                })
            }
        </div>
    )
}

function CoursesComponent({ course }) {
    const navigate = useNavigate()
    async function handlePurchase(courseId){
        const data = await purchaseCourse(courseId);
        console.log("this got called"+ data)

        if(!data)navigate('/user/login')
        if(data.status === 200){
            alert("Congrats you've successfully purchased this course")
            
        }

    }
    
    return (
        <div className="flex flex-col w-80 min-h-[350px] shadow-md rounded-xs hover:shadow-md transition-all justify-between">
            <div className="aspect-photo">
                <img src={course.courseImg} alt={course.title} className="w-full h-full" />
            </div>
            <div className="flex flex-col p-4 gap-1">
            <h2 className="text-lg font-semibold">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.description}</p>
            <p className="text-sm">{course.category}</p>
            <p className="text-sm">{course.language}</p>
            <p className="text-sm font-semibold">$ {course.price}</p>
            <button className="bg-gray-600 text-white p-2 " onClick={() => handlePurchase(course._id)} >Purchase Now</button>

            </div>
        </div>
    )
}