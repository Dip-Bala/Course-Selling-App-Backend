// frontend/src/pages/Signup.jsx
import { useState } from 'react';
import { userSignup } from '../../api/auth.user';

export default function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '', firstName: '', lastName: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await userSignup(formData);
    alert(data);
  };

  return (
    <div className="flex flex-col items-center justify-center p-20 gap-5 md:gap-8 ">
      <p className="sm:text-4xl text-2xl font-semibold text-gray-900 text-center">Sign Up to Learn on Edurax</p>
      <form className="flex flex-col items-center justify-center w-[80%] sm:w-[60%] md:w-[40%] " onSubmit={handleSubmit}>
        <div className="flex m-2 w-[100%]">
          <input className="border border-gray-700 w-1/2 p-2 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm mr-1 sm:p-3" name="firstName" placeholder="First Name" onChange={handleChange} />
          <input className="border border-gray-700 w-1/2 p-2 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm ml-1 sm:p-3" name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>

        <input className="border border-gray-700 p-2 w-[100%] text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2 sm:p-3" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border border-gray-700 p-2 w-[100%] text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2 sm:p-3" name="password" placeholder="Password" type="password" onChange={handleChange} />
        <button className="bg-purple-700 text-white font-semibold p-2 rounded-sm mt-5 w-[100%] sm:p-3" type="submit">Sign Up</button>
      </form>
    </div>
  );
}
