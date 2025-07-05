import React from "react"
import { useState } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
import { getVan } from "../../api"
export default function VanDetails() {
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try{
                const van = await getVan(params.id)
                setVan(van)
            }
            catch(err){
                setError(err)
            }
            
            setLoading(false)
        }
        loadVans()
    }, [params.id])
    console.log(location.state)
    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-detail-container">
            {van ? (
                <>
                    <Link to={`..${search}`} relative="path" className="back-button">&larr; <span>Back to {type} vans</span></Link>
                    <div className="van-detail">
                        <img src={van.imageUrl} loading="lazy" />
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