// frontend/src/pages/Signup.jsx
import { useState } from 'react';
import { userSignup } from '../../api/user/auth.user';
import SignupComponent from '../../components/auth/Signup';
import { signupAtom } from '../../store/atoms/auth/signupAtom.js'
import { useSetRecoilState } from 'recoil'

export default function UserSignup() {
  const setSignupData = useSetRecoilState(signupAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await userSignup(formData);
    if (data === "Signup successful" || data.includes("success")) {
      setSignupData({ email: '', password: '', firstName: '', lastName: '' });
      navigate('/user');
    }
  };


  return (
    <div className="flex flex-col items-center justify-center gap-5 md:gap-8 ">
      <div className="w-[100%] md:w-[40%] p-10 m-10 md:p-10">
        <p className="sm:text-4xl text-2xl font-semibold text-gray-900 text-center mb-4">Sign Up to Learn on Edurax</p>
        <SignupComponent handleSubmit={handleSubmit} />

      </div>
    </div>
  );
}
