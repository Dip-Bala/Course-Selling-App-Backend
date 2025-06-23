import React, { useState } from 'react'
import axios from 'axios'
// import { allCoursesInstructor } from '../../store/atoms/instructor/allCourses.instructor'
// import { useRecoilValue } from 'recoil'


export default function CourseComponent({ course }) {
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        title: course.title,
        description: course.description,
        category: course.category,
        price: course.price,
        language: course.language,
        courseImg: course.courseImg
    })
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    async function handleSave(courseId) {
        try{
            const response = await axios.put(`/api/v1/admin/course/content`, formData, {
                withCredentials: true,
                headers: {
                    token: localStorage.getItem('token'), 
                    courseId: course._id
                }
            }
        )
        alert("course updated")
        console.log(response);
        setIsEditing(false)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="flex flex-col rounded shadow-sm text-gray-700">
            {
                !isEditing ? (
                    <div className="">
                        <img className="w-fit" src={course.courseImg} />
                        <div className="flex flex-col px-4 py-2 gap-1">
                            <h2 className="text-xl font-bold sm:text-2xl ">{course.title}</h2>
                            <p className="text-md text-gray-600 font-medium">{course.description}</p>
                            <p className="text-md text-gray-600 font-medium"><span className="text-gray-900">Category: </span>{course.category}</p>
                            <p className="text-md text-gray-600 font-medium"><span className="text-gray-900">Language: </span> {course.language}</p>
                            <p className="text-md text-gray-600 font-medium"><span className="text-gray-900">$ </span>{course.price}</p>
                            <button className=" p-2 cursor-pointer" onClick={()=> {setIsEditing(true)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                            </button>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="flex flex-col gap-3 p-4 text-md font-semibold  hover:bg-purple-100">
                            <p>Editing..</p>
                            <input className="border-b border-gray-300 p-1 hover:bg-gray-50 focus:rounded-sm hover:rounded-sm " name="title" value={formData.title} onChange={handleChange} />
                            <textarea className="border-b border-gray-300 p-1 hover:bg-gray-50 focus:rounded-sm hover:rounded-sm  text-gray-600" name="description" value={formData.description} onChange={handleChange} />
                            <input className="border-b border-gray-300 p-1 hover:bg-gray-50 focus:rounded-sm hover:rounded-sm " name="courseImg" value={formData.courseImg} onChange={handleChange} />
                            <input className="border-b border-gray-300 p-1 hover:bg-gray-50 focus:rounded-sm hover:rounded-sm " name="category" value={formData.category} onChange={handleChange} />
                            <input className="border-b border-gray-300 p-1 hover:bg-gray-50 focus:rounded-sm hover:rounded-sm " name="language" value={formData.language} onChange={handleChange} />
                            <input className="border-b border-gray-300 p-1 hover:bg-gray-50 focus:rounded-sm hover:rounded-sm " name="price" value={formData.price} onChange={handleChange} />
                            <button className="border border-gray-700 hover:bg-gray-700 hover:text-white px-3 py-1 rounded" onClick={handleSave}>Save</button>

                        </div>
                    )
            }

        </div>
    )
}