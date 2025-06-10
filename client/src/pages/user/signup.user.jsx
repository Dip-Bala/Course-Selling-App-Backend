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
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-4xl font-semibold text-gray-900 ">Sign Up to Learn on Edurax</p>
      <form className="flex flex-col items-center justify-center h-[50%] w-[50%] " onSubmit={handleSubmit}>
        <div className="flex w-[60%] m-2">
          <input className="border border-gray-700 w-1/2 p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm mr-1" name="firstName" placeholder="First Name" onChange={handleChange} />
          <input className="border border-gray-700 w-1/2 p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm ml-1" name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>

        <input className="border border-gray-700 w-[60%] p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border border-gray-700 w-[60%] p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2" name="password" placeholder="Password" type="password" onChange={handleChange} />
        <button className="w-[60%] bg-purple-700 text-white font-semibold p-3 rounded-sm mt-5" type="submit">Sign Up</button>
      </form>
    </div>
  );
}
