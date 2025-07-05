import { useEffect, useState } from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { getHostVans } from "../../../api"
export default function HostVanDetail() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

    const [vanDetails, setVanDetails] = useState({})

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try{
                const hostVans = await getHostVans(id)
                setVanDetails(hostVans)
            }
            catch(err){
                setError(err)
            }
            setLoading(false)
        }
        loadVans()
    }, [id])

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>There was an error: {error.message}</h1>
    }

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