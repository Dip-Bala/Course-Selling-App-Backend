import React from 'react'
import { useRecoilState } from 'recoil'
import { createCourseAtom } from '../../store/atoms/instructor/createCourse.atom'
import createCourse from '../../api/instructor/course'
import { useNavigate } from 'react-router-dom'
import CourseForm from '../../components/instructor/CourseForm'

export default function CreateCourse() {
    const navigate = useNavigate();
    function handleChange(e) {
        setCourseData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        //api function call
        console.log(courseData)
        const response = createCourse(parsedCourseData);
        console.log(response)
        alert('you have successfully added a new course')
        setCourseData({
            title : '',
        description : '',
        courseImg : '',
        price : 0,
        category: '',
        language : ''
        });
        navigate('/instructor/course/preview')
    }
    return (
        <div>
            <CourseForm handleSubmit={handleSubmit}/>
        </div>
    )
} 