import React from 'react'
import { useRecoilState } from 'recoil'
import { createCourseAtom } from '../../store/atoms/createCourse.atom'
import createCourse from '../../api/course'
export default function CreateCourse() {
    const [courseData, setCourseData] = useRecoilState(createCourseAtom)
    function handleChange(e) {
        setCourseData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    const parsedCourseData = {
        ...courseData,
        price: Number(courseData.price), 
      };
    function handleSubmit(e) {
        e.preventDefault();
        //api function call
        console.log(courseData)
        const response = createCourse(parsedCourseData);
        console.log(response)

    }
    return (
        <div>
            <form className="flex flex-col justify-center items-center p-5 mt-5 gap-4 " onSubmit={handleSubmit}>
                <div className="flex flex-col w-[80%] gap-2  md:w-[60%]">
                    <label className="text-md font-semibold">Course Title</label>
                    <input className="border border-gray-400 p-2 rounded resize-none text-sm focus:outline-gray-900 hover:border-gray-700 placeholder-gray-900 .placeholder-opacity-100 md:p-4 md:text-md" name="title" placeholder="Title of your Course in 60 words" onChange={handleChange} >
                    </input>
                </div>
                
                <div className="flex flex-col w-[80%] gap-2 md:w-[60%]">
                    <label className="text-md font-semibold">Description</label>
                    <textarea className="border border-gray-400 p-2 rounded resize-none text-sm focus:outline-gray-900 hover:border-gray-700 placeholder-gray-900 .placeholder-opacity-100 md:p-4 md:text-md" name="description" placeholder="Describe the course for your students" onChange={handleChange} ></textarea>
              
                </div>
                
                <div className="flex flex-col w-[80%] gap-2 md:w-[60%]">
                    <label className="text-md font-semibold">Course Url</label>
                <input className="border border-gray-400 p-2 rounded text-sm focus:outline-gray-900 hover:border-gray-700 placeholder-gray-900 .placeholder-opacity-100 md:p-4 md:text-md" name="courseImg" placeholder="Course Url" onChange={handleChange} />
                </div>

                <div className="flex flex-col w-[80%] gap-2 md:w-[60%]">
                    <label className="text-md font-semibold">Price</label>
                <input className="border border-gray-400 p-2 rounded text-sm focus:outline-gray-900 hover:border-gray-700 placeholder-gray-900 .placeholder-opacity-100 md:p-4 md:text-md" name="price" placeholder="Price" onChange={handleChange} />
                </div>

                <div className="flex flex-col w-[80%] gap-2 md:w-[60%]">
                    <label className="text-md font-semibold">Category</label>
                <select className="border border-gray-400 p-2 rounded text-sm focus:outline-gray-900 hover:border-gray-700 placeholder-gray-900 .placeholder-opacity-100 md:p-4 md:text-md" value="select" name="category" onChange={handleChange}>
                    <option value="Select"></option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Artificial Intelligence">AI ML</option>
                    <option value="Deep Leaning">Machine Leaning</option>
                    <option value="Machine Leaning">Deep Leaning</option>
                    <option value="Web3">Web3</option>

                </select>
                </div>
                
                <div className="flex flex-col w-[80%] gap-2 md:w-[60%]">
                    <label className="text-md font-semibold">Language</label>
                <input className="border border-gray-400 p-2 rounded text-sm focus:outline-gray-900 hover:border-gray-700 placeholder-gray-900 .placeholder-opacity-100 md:p-4 md:text-md" name="language" placeholder="Language" onChange={handleChange} />
                </div>
                <button className="font-semibold text-md  border bg-purple-500 w-[60%] p-3 rounded-sm hover:bg-purple-700 hover:border-none text-white m-4" type="submit">Create</button>
            </form>
        </div>
    )
} 