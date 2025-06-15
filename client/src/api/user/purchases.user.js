import axios from 'axios'

export async function purchasedCourses(){
    const token = localStorage.getItem('user-token')
    try{
        const data = await axios.get('/api/v1/user/purchased-courses',{
            withCredentials: true,
            headers:{
                token: token
            }
        })
        console.log(data.data)
        return data.data;
    }
    catch(e){
        console.log(e)
    }

}