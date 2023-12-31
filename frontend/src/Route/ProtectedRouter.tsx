import { ReactElement, ReactNode } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { axiosInstance } from "../services/authHeader";

interface AuthorizedProps{
    
}

const ProtectedRoute =({}:AuthorizedProps) =>{
    const isAuthenticated =!axiosInstance.defaults.headers.common["Authorization"];
    return isAuthenticated ? 
        <Outlet/>
    :
        <Navigate to="/unauthorized"/> 
    
}

export {ProtectedRoute}