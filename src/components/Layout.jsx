import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createContext, useState } from "react"

const IsLoggedInContext = createContext()

export default function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <div className="site-wrapper">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </IsLoggedInContext.Provider>
    )
}

export { IsLoggedInContext }
