import axios from 'axios'


export async function getUserCourses(){
    const token = localStorage.getItem('user-token')
    try{
        const data = await axios.get('/api/v1/course/preview')
        console.log(data.data.courses)
        return data.data.courses;
    }
    catch(e){
        console.log(e)
    }

}
