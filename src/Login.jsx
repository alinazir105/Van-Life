import React, { useContext } from "react"
import { useNavigate, useLocation, replace } from "react-router-dom"
import { loginUser } from "./api.js"
import { IsLoggedInContext } from "./components/Layout.jsx"
export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const {isLoggedIn, setIsLoggedIn} = useContext(IsLoggedInContext)

    const location = useLocation()
    const navigate = useNavigate()

    const redirectPath = location?.state?.from?.pathname || "/host"

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                console.log(data)
                // localStorage.setItem("loggedin", true)
                setIsLoggedIn(true)
                navigate(redirectPath, {replace : true})
                setError(null)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {
                location.state?.message &&
                <h3 className="login-error">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            {
                error?.message &&
                <h3 className="login-error">{error.message}</h3>
            }
            
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )

}