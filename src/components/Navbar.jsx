import { NavLink, Link } from "react-router-dom"
import avatarIcon from "../assets/avatar-icon.png"
import { useContext, useState } from "react"
import { IsLoggedInContext } from "./Layout"
export default function Navbar() {
    // localStorage.getItem("loggedin")
    const {isLoggedIn, setIsLoggedIn} = useContext(IsLoggedInContext)

    function handleClick (){
        localStorage.removeItem("loggedin")
        setIsLoggedIn(null)
    }
    return (
        <header className="navbar">
            <NavLink
                className="logo"
                to=".">
                #VANLIFE
            </NavLink>

            <nav className="nav-links">
                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : ""}
                    to="about">
                    About
                </NavLink>

                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : ""}
                    to="vans">
                    Vans
                </NavLink>

                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : ""}
                    to="host">
                    Host
                </NavLink>

                {
                    !isLoggedIn && 
                    <Link to="login" className="login-link">
                        <img 
                            src={avatarIcon} 
                            className="login-icon"
                        />
                    </Link>
                    }
                {
                    isLoggedIn &&    
                    <button onClick={handleClick}>
                        Logout
                    </button>
                }
            </nav>
        </header>
    )
}