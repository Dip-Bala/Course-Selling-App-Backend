import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { userLoggedIn, userFirstName, roleAtom } from '../../store/atoms/loggedInStateAtom'
import { Menu, X } from 'lucide-react' // or use Heroicons if you prefer

export default function Navbar() {
  const navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useRecoilState(userLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userName = useRecoilValue(userFirstName)
  const [role, setRole] = useRecoilState(roleAtom);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserIsLoggedIn(false);
    setRole('')
    navigate('/')
  };
  const handleLogo = () => {
    // console.log(role)
    if(role === "instructor")navigate('/instructor')
    else if(role === "user") navigate('/user')
    else navigate('/')
  }
  // console.log(userIsLoggedIn)
  return (
    <div className="flex justify-center shadow-md">
      <div className="flex sm:py-5 sm:px-10 items-center justify-between w-full max-w-7xl p-5 gap-5 relative">

        {/* Brand */}
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-gray-900 cursor-pointer" onClick={handleLogo}>
          Edurex
        </h2>

        {/* Hamburger (Only on Mobile) */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <X className="cursor-pointer bg-purple-100 shadow-md rounded" onClick={() => setIsMenuOpen(false)} />
          ) : (
            <button className="cursor-pointer bg-purple-100 shadow-md rounded p-2" onClick={() => setIsMenuOpen(true)} ><Menu/></button>
            
          )}
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex items-center gap-2 text-sm md:text-md font-semibold ">
          {userIsLoggedIn ? (
            <>
              <p>Hi, {userName}</p>
              <button className="text-purple-800 border border-purple-800 p-2 sm:p-3 rounded-sm" onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <>
              <button className="text-purple-500 bg-purple-100 sm:p-3 p-1 rounded-sm font-medium cursor-pointer hover:border hover:border-purple-600 " onClick={() => navigate('/instructor/auth/signup')}>Be an Instructor</button>
              <button className="border border-purple-700 rounded-sm text-purple-700 sm:p-3 p-1 font-medium cursor-pointer hover:bg-purple-600 hover:text-white" onClick={() => navigate('/user/login')}>Log in</button>
              <button className="bg-purple-700 text-white sm:p-3 p-2 rounded-sm font-medium cursor-pointer hover:bg-purple-100 hover:border hover:border-purple-700 hover:text-purple-700" onClick={() => navigate('/user/signup')}>Sign up</button>
            </>
          )}
        </div>

        {/* Collapsible Menu (Mobile Only) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
            {userIsLoggedIn ? (
              <>
                <p>Hi, {userName}</p>
                <button className="text-purple-800 border border-purple-800 p-2 rounded-sm cursor-pointer hover:border hover:bg-purple-600 hover:text-white " onClick={handleLogout}>Log out</button>
              </>
            ) : (
              <>
                <button className="text-purple-500 bg-purple-100 p-2 rounded-sm font-medium w-10/12 cursor-pointer hover:border hover:border-purple-600 " onClick={() => navigate('/instructor/auth/signup')}>Be an Instructor</button>
                <button className="border border-purple-700 rounded-sm text-purple-700 p-2 font-medium w-10/12 cursor-pointer hover:bg-purple-600 hover:text-white" onClick={() => navigate('/user/login')}>Log in</button>
                <button className="bg-purple-800 text-white p-2 rounded-sm font-medium w-10/12 cursor-pointer hover:bg-purple-100 hover:border hover:border-purple-700 hover:text-purple-700" onClick={() => navigate('/user/signup')}>Sign up</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
