// frontend/src/pages/Signup.jsx
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { instructorSignup } from '../../api/instructor/auth.instructor';
import SignupComponent from '../../components/auth/Signup'
import { signupAtom } from '../../store/atoms/auth/signupAtom.js'
import { useNavigate } from 'react-router-dom'
import { instructorSignedupAtom } from '../../store/atoms/instructor/instructorSignedup'
import InstructorLogin from '../../components/instructor/InstructorLogin'


export default function InstructorSignup() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useRecoilState(signupAtom);
  const [signup, setSignup] = useRecoilState(instructorSignedupAtom)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await instructorSignup(signupData);
    alert(data);
    if (data === "Signup successful" || data.includes("success")) {
      setSignupData({ email: '', password: '', firstName: '', lastName: '' });
      setSignup(false);
      navigate('/instructor/auth/login');
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex w-full justify-center gap-4 m-4">
      <button className={`w-[40%] border border-gray-900 text-gray-800 font-semibold p-2 rounded-sm mt-5 cursor-pointer hover:bg-gray-100 ${signup ? 'bg-gray-100 border-gray-900 text-gray-800 hover:bg-gray-200 hover:text-gray-800 ' : 'bg-purple-700 text-white border-none hover:bg-purple-600'}
    `} onClick={() => {
        setSignup(false);
        navigate('/instructor/auth/login')
      }}>
        Login
      </button>
      <button className={`w-[40%] font-semibold p-2 rounded-sm mt-5 cursor-pointer ${signup ? 'bg-purple-700 text-white hover:bg-purple-600' : 'bg-gray-100 border border-gray-900 text-gray-800 hover:bg-gray-100'}
    `} onClick={() => {
        setSignup(true);
        navigate('/instructor/auth/signup')
      }}>
        SignUp
      </button>
    </div>
  {
      signup ?
        <SignupComponent handleSubmit={handleSubmit} />
        :
        <InstructorLogin />
    }

</div >
    
  );
}
