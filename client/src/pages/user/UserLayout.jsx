import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarUser from '../../components/NavbarUser'
export default function UserHome(){
    return(
        <div className="flex ">
            <NavbarUser />
            <Outlet/>
        </div>
    )
}