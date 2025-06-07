import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="flex p-3 items-center justify-between shadow-md">
            <h2 className="font-mono text-sm font-semibold">Edurex</h2>
            <div className="flex gap-4">
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/signup')}>Register</button>
            </div>
        </div>
    )
}