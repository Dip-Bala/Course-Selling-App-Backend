// frontend/src/pages/Signup.jsx
import React from 'react'
import {useRecoilState, useSetRecoilState} from 'recoil'
import { instructorSignup } from '../../api/instructor/auth.instructor';
import SignupComponent from '../../components/auth/Signup'
import {signupAtom} from '../../store/atoms/auth/signupAtom.js'
import { useNavigate } from 'react-router-dom'
import {instructorSignedupAtom} from '../../store/atoms/instructor/instructorSignedup'
import InstructorSignup from '../../components/instructor/InstructorSignup'


export default function InstructorAuthLayout() {
  const navigate = useNavigate();
    const [signedup, setSignedup] = useRecoilState(instructorSignedupAtom)
  const setSignupData = useSetRecoilState(signupAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await instructorSignup(formData);
    alert(data);
    if (data === "Signup successful" || data.includes("success")) {
      setSignupData({ email: '', password: '', firstName: '', lastName: '' });
      navigate('/instructor');
    }
  };

  return (
          <div className="flex flex-col justify-center items-center bg-amber-50 py-20">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="lg:text-6xl sm:text-4xl text-3xl font-semibold font-serif">Come teach with us</h1>
                        <p className="">Become an instructor --- help people learn and grow</p>
                    </div>
                    <InstructorSignup/>
            </div>
    
  );
}

