import axios from 'axios'

export default async function viewCourses() {
    const token = localStorage.getItem('instructor-token');
    try {
        const response = await axios.get('/api/v1/admin/courses',
            {
                withCredentials: true,
                headers: {
                    token: token
                }
            }
        )
        return response.data;
    } catch (e) {
        console.error(e.response?.data || e.message);
        throw e;
    }
}