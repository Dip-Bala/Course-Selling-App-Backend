import axios from 'axios'

export const instructorSignup = async (instructorData) => {
    try{
        const response = await axios.post('/api/v1/admin/signup', instructorData, {withCredentials: true});
        // console.log(response)
        return response.data.message;
    }catch(e){
        return e.response?.data?.error || 'Signup failed'
    }
}


export const instructorLogin = async (instructorData) => {

    try{
        const response = await axios.post('/api/v1/admin/login', instructorData, {withCredentials: true});
        console.log(response)

        return response.data;
    }catch(e){
        return { message: e.response?.data?.message || 'Login failed' }
    }
}