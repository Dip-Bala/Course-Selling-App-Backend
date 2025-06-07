import axios from 'axios'

export const userSignup = async (userData) => {
    try{
        const response = await axios.post('/user/signup', userData, {withCredentials: true});
        return response;
    }catch(e){
        console.log(e)
    }
}


export const userLogin = async (userData) => {
    try{
        const response = await axios.post('/user/login', userData, {withCredentials: true});
        return response;
    }catch(e){
        console.log(e)
    }
}