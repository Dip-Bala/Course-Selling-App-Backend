import React from 'react'
import { allCoursesInstructor } from '../../store/atoms/instructor/allCourses.instructor'
import { useRecoilValue } from 'recoil'
import CourseComponent from '../../components/instructor/CourseComponent'

export default function ViewCourse() {
    const courses = useRecoilValue(allCoursesInstructor);
    // console.log(courses);
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

