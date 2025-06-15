import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarUser from '../../components/user/NavbarUser'
export default function UserHome(){
    return(
        <div className="flex ">
            <NavbarUser />
            <Outlet className="p-7 bg-amber-400 m-6"/>
        </div>
    )
}