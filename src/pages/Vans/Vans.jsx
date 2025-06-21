import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
export default function Vans() {
    const [vans, setVans] = useState([])
    
    useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])
 
    const vansList = vans.map(van =>{
        return(
            <div className="van" key={van.id}>
                <Link to={`/vans/${van.id}`} className="van-link"
                aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}>
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="van-info">
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                </div>
                <p className=
                    {`van-type ${van.type == "simple" ? "simple" : 
                                van.type == "rugged" ? "rugged" : 
                                van.type == "luxury" ? "luxury" : ""}`}
                    >
                    {van.type}
                </p>
                </Link>
            </div>
        )
    })
    return(
        <main className="vans">
            <h1 className="vans-title">Explore our vans</h1>
            <section className="vans-list">
                {vansList}
            </section>
        </main>
    )
}


