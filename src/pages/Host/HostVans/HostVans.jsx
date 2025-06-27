import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import VanCard from "./VanCard"
export default function HostVans() {
    const [vans, setVans] = useState([])

    const navigate = useNavigate()
    function handleClick(vanId) {
        navigate(vanId)
    }
    useEffect(()=>{
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])
    return(
        <div className="host-vans-container">
            <h4>Your Listed Vans</h4>
            <div className="host-vans-list">
                {vans.map(van => (
                    <VanCard key={van.id} van={van} handleClick={handleClick} />
                ))}
                </div>
        </div>
    )
}
