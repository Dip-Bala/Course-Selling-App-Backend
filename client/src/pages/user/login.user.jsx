import React, {useState} from 'react'
import {useSetRecoilState} from 'recoil'
import {userLogin} from '../../api/auth.user'
import {userLoggedIn} from '../../store/atoms/login.user'

export default function Login(){
    const setUserLoggedIn = useSetRecoilState(userLoggedIn)

    const [formData, setFormData] = useState({email: '', password: ''});

    const handleChange = (e) => {
        setFormData(prev => {
            return({
                ...prev,
                [e.target.name] : e.target.value
            })
        }
        // prev => ({ ...prev, [e.target.name]: e.target.value }));
        )
        console.log(formData)
      };
    async function handleSubmit(e){
        e.preventDefault();
        const response = await userLogin(formData); //response from api call
        alert(response.message);
        if (response.token) {
        localStorage.setItem('token', response.token);
        setUserLoggedIn(true); 
        }
       
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" required onChange={handleChange}/>
            <input name="password" placeholder="Password" required onChange={handleChange}/>
            <button type="submit" >Log in</button>
        </form>
    )
}