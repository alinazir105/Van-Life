import { useEffect, useState } from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
export default function HostVanDetail() {

    const { id } = useParams()

    const [vanDetails, setVanDetails] = useState({})

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data =>setVanDetails(data.vans))
            .catch(err => console.error("Error fetching van details:", err))
    }, [id])
    return (
        <div>
            <div className="host-van-detail">
                <Link to=".." relative="path" className="back-button">&larr; <span>Back to all vans</span></Link>
                <div className="host-van-detail-info">
                    <div className="host-van-detail-info-container">
                        <img src={vanDetails.imageUrl} alt={vanDetails.name} />
                        <div className="host-van-detail-info-text">
                            <p className={`van-type ${vanDetails.type} selected`}>{vanDetails.type}</p>
                            <h2>{vanDetails.name}</h2>
                            <p><strong>${vanDetails.price}</strong>/day</p>
                        </div>
                    </div>
                    <div className="host-van-detail-tabs host-nav">
                        <NavLink to="." end className={({ isActive }) => isActive ? "active-link" : ""}>Details</NavLink>
                        <NavLink to="pricing" className={({ isActive }) => isActive ? "active-link" : ""}>Pricing</NavLink>
                        <NavLink to="photos" className={({ isActive }) => isActive ? "active-link" : ""}>Photos</NavLink>
                    </div>
                    <Outlet context={vanDetails} />
                </div>
            </div>
        </div>
    )
}