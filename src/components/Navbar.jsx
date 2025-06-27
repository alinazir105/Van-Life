import { NavLink } from "react-router-dom"
export default function Navbar() {
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
            </nav>
        </header>
    )
}