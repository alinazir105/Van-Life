import { Navigate, Outlet, useLocation } from "react-router-dom";
import { IsLoggedInContext } from "./Layout";
import { useContext } from "react";
export default function AuthRequired(){

    // const isLoggedIn = localStorage.getItem("loggedin")
    const {isLoggedIn, setIsLoggedIn} = useContext(IsLoggedInContext)
    const location = useLocation()
    return isLoggedIn ? 
        <Outlet /> : 
        <Navigate 
            to="/login" 
            replace={true} 
            state={{
                    from: location,
                    message: "You must login first"
                    }} /> 
}