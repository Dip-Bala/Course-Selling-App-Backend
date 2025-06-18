import React from 'react'
import { useRecoilValue } from 'recoil'
import { purchasedAtom } from '../../store/atoms/user/purchasedCourse.user'

export default function UserPurchases() {
    const purchases = useRecoilValue(purchasedAtom)
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 place-items-center auto-rows-fr justify-center items-center ">
            {
                purchases.map((p, index) => {
                    return p ? <PurchasedComponent key={index} p={p} /> : null
                })
            }
        </div>
    )
}

function PurchasedComponent({ p }) {
    return(
    <div className="flex flex-col w-80 min-h-[350px] shadow-md rounded-xs hover:shadow-md transition-all justify-between">
        <div className="aspect-photo bg-gray-200 rounded mb-3">
            <img src={p.courseImg} alt={p.title} className="w-full h-full" />
        </div>
        <div className="flex flex-col p-4 gap-1">
        <h2 className="text-lg font-semibold mb-1">{p.title}</h2>
        <p className="text-gray-600 text-sm">{p.description}</p>
        <p className="text-sm">{p.category}</p>
        <p className="text-sm">{p.language}</p>

        </div>
    </div>
    )
}