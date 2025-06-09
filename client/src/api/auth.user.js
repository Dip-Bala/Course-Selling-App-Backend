import axios from 'axios'

export const userSignup = async (userData) => {
    try{
        const response = await axios.post('api/v1/user/signup', userData, {withCredentials: true});
        // console.log(response)
        return response.data.message;
    }catch(e){
        return e.response?.data?.error || 'Signup failed'
    }
}


export const userLogin = async (userData) => {

    try{
        const response = await axios.post('api/v1/user/login', userData, {withCredentials: true});
        return response.data;
    }catch(e){
        return { message: e.response?.data?.message || 'Login failed' }
    }
}