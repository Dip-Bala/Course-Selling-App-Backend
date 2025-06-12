// frontend/src/pages/Signup.jsx
import { useState } from 'react';
import { instructorSignup } from '../api/auth.instructor';

export default function InstructorSignup() {
  const [formData, setFormData] = useState({ email: '', password: '', firstName: '', lastName: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await instructorSignup(formData);
    alert(data);
    if (data === "Signup successful" || data.includes("success")) {
      // Reset form
      setFormData({ email: '', password: '', firstName: '', lastName: '' });
      // Navigate to homepage
      navigate('/instructor');
    }
  };

  return (
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <div className="flex w-full m-2">
          <input className="border border-gray-700 w-1/2 sm:p-3 p-2 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm mr-1" name="firstName" placeholder="First Name" onChange={handleChange} />
          <input className="border border-gray-700 w-1/2 p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm ml-1" name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>

        <input className="border border-gray-700 w-full p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border border-gray-700 w-full p-3 text-gray-900 text-sm font-semibold hover:bg-gray-50 focus:outline-purple-900 focus:border-none focus:font-light placeholder-gray-900 .placeholder-opacity-100 rounded-sm m-2" name="password" placeholder="Password" type="password" onChange={handleChange} />
        <button className="w-full bg-purple-700 text-white font-semibold p-3 rounded-sm mt-5 cursor-pointer" type="submit">Sign Up</button>
      </form>
  );
}
