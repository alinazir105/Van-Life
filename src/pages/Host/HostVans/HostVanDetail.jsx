import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
export default function HostVanDetail() {
    
    const {id} = useParams()

    const [vanDetails, setVanDetails] = useState({})

    useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setVanDetails(data.vans[0])
            })
            .catch(err => console.error("Error fetching van details:", err))
    }, [id])
    return(
        <div className="host-van-detail">
            <Link to="/host/vans" className="back-button">&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-info">
                <img src={vanDetails.imageUrl} alt={vanDetails.name} />
                <div className="host-van-detail-info-text">
                    <p className={`van-type ${vanDetails.type} selected`}>{vanDetails.type}</p>
                    <h2>{vanDetails.name}</h2>
                    <p><strong>${vanDetails.price}</strong>/day</p>
                </div>
            </div>
        </div>
    )
}