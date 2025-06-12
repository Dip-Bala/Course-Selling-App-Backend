import React from 'react'
import { useRecoilValue } from 'recoil'
import { purchasedAtom } from '../../store/atoms/purchasedCourse.user'

export default function UserPurchases() {
    const purchases = useRecoilValue(purchasedAtom)
    // console.log("purchase" + purchases)
    return (
        <div className="flex flex-col p-[5%] sm:grid sm:grid-cols-2 sm:p-[3%] lg:grid-cols-3 md:gap-8 max-h-min">
            {
                purchases.map((p, index) => {
                    return <PurchasedComponent key={index} p={p} />
                })
            }
        </div>
    )
}

function PurchasedComponent({ p }) {
    return(
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-all">
        <div className="aspect-photo bg-gray-200 rounded mb-3">
            {/* Replace with actual image URL if available */}
            <img src={p.courseImg} alt={p.title} className="w-full h-full" />
        </div>
        <h2 className="text-lg font-semibold mb-1">{p.title}</h2>
        <p className="text-gray-600 text-sm">{p.description}</p>
        <p className="text-sm">{p.category}</p>
        <p className="text-sm">{p.language}</p>
    </div>
    )
}