// frontend/src/pages/Signup.jsx
import { useState } from 'react';
import { userSignup } from '../../api/auth.user';

export default function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '', firstName: '', lastName: ''});

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await userSignup(formData);
      alert('Signup successful!');
      console.log(data);
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
