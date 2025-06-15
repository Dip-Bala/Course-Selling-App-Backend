import React from 'react'
import {allCoursesInstructor} from '../../store/atoms/instructor/allCourses.instructor'
import {useRecoilValue} from 'recoil'

export default function ViewCourse(){
    const courses = useRecoilValue(allCoursesInstructor);
    console.log(courses);
    return(
        <div className="flex flex-col justify-center items-center gap-4 p-4">
            {
                courses.map((course, index)=>{
                    return <CourseComponent key={index} course={course}/>
                })
            }
        </div>
    )
} 

function CourseComponent({course}){
    async function handleEdit(){

    }
    return(
        <div className="flex w-[90%] items-center justify-between gap-4 p-4 rounded-md bg-gray-100 text-gray-700 sm:p-6">
             <div className="w-[50%]">
            <img className="flex " src={course.courseImg}/>
            </div>
            <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4 sm:text-2xl">{course.title}</h2>
            <p className="text-sm">{course.description}</p>
            <p className="text-sm">{course.category}</p>
            <p className="text-sm">{course.language}</p>
            <p className="text-sm">$ {course.price}</p>
            <button className="bg-black text-white p-2" onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
}