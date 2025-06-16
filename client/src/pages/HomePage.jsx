import React from 'react'

export default function HomePage() {
    return (
        <div className="sm:px-[10%]">
            <div className="flex flex-col md:flex-row-reverse sm:gap-5 items-center justify-between pb-10 md:py-10">

                <div className="mix-blend-multiply w-xs sm:w-sm md:w-lg">
                    <img  src="/public/assets/girl-image.avif" />
                </div>

                <div className="flex flex-col items-center justify-center md:items-start sm:gap-8 md:w-[40%] text-center mx-8 gap-4 md:text-start ">

                    <h1 className="text-3xl md:text-6xl font-extrabold md:leading-15">
                        Learn and Grow without Limits.
                    </h1>
                    <p className="text-sm sm:text-lg text-gray-700 ">
                        Kickstart your tech career or upskill with Edurex's top quality courses in emerging software technologies.
                    </p>
                </div>
            </div>
            <div className="flex gap-2 text-xs sm:gap-5 items-center justify-between font-semibold text-gray-700 p-5 sm:p-10 sm:text-lg">
                {/* Add animation */}
                <button className="text-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">Web Development</button>
                <div className="text-center">App Development</div>
                <div className="text-center">DevOps</div>
                <div className="text-center">Web 3.0 and Blockchain</div>
                <div className="text-center">AI and ML</div>
            </div>
        </div>
    )
}