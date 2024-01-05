import React from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom"
import {useSelector} from "react-redux"

const ProtectedRoutes = () => {
    const location = useLocation()
    const user = useSelector((state) => state.user.username)
    return user !== null ? (<Outlet />
    ) : (<Navigate to="/login" state={{ from: location }} replace />)
}

export default ProtectedRoutes
