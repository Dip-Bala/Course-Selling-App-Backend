import axios from 'axios'

export default async function createCourse(courseData) {
    const token = localStorage.getItem('instructor-token');
    console.log(token)
    try {
        const response = await axios.post('/api/v1/admin/course/create', courseData,
            {
                withCredentials: true,
                headers: {
                    token: token
                }
            }
        )
        console.log(response)
    } catch (e) {
        console.error(e.response?.data || e.message);
        throw e;
    }
}