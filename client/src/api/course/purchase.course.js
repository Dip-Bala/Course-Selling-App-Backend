import axios from 'axios'


export async function purchaseCourse(courseId){
    console.log("course Id api" + courseId)
    const token = localStorage.getItem('token')
    if(token){
        try{
            const data = await axios.post('/api/v1/course/purchase', 
                {courseId: courseId}, //body
                {
                withCredentials: true,
                headers:{
                    token: token,
                }
            })
            console.log(data)
            return data;
        }
        catch(e){
            console.log(e)
            return;
        }
    }
    return undefined;

}