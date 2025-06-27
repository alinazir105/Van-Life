import React from "react"
import { useParams, useLocation, Link } from "react-router-dom"

export default function VanDetails() {
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    return (
        <div className="van-detail-container">
            {van ? (
                <>
                    <Link to={`..${search}`} relative="path" className="back-button">&larr; <span>Back to {type} vans</span></Link>
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <div className="van-detail-info">
                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                            <h2>{van.name}</h2>
                            <p className="van-price"><span>${van.price}</span>/day</p>
                            <p  className="van-description">{van.description}</p>
                            <button className="link-button">Rent this van</button>
                        </div>  
                    </div>
                </>
            ) : <h2>Loading...</h2>}
        </div>
    )
}