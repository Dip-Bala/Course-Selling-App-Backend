import React from 'react'

export default function Footer() {
    return (
        <div className="bg-gray-600 text-gray-50 text-md">
            <div className="">
                <div className="flex items-end justify-end gap-4 p-5 border-b">
                    <p>Follow us</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="fafafa" stroke="#fafafa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </button>
                    <buttton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fafafa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </buttton>
                </div>
                <div className="flex p-5 justify-center">
                    <div>
                        Edurex
                    </div>
                    <div>
                        © 2025 Edurex
                    </div>
                </div>
            </div>
        </div>
    )
}