import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <header className="navbar">
            <Link className="logo" to="/">#VANLIFE</Link>
            <nav className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}