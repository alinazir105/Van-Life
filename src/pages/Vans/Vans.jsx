import { useState,useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])
 
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans   

    const vansList = displayedVans.map(van =>{
        return(
            <div className="van" key={van.id}>
                <Link 
                to={van.id} 
                state={
                    { 
                        search: `?${searchParams.toString()}`,
                        type: typeFilter 
                    }
                } 
                className="van-link"
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

    const handleFilterChange = (key, value) =>{
        setSearchParams(prevParams =>{
            if(value === null){
                prevParams.delete(key)
            }
            else{
                prevParams.set(key,value)
            }
            return prevParams
        })
    }
    return(
        <main className="vans">
            <h1 className="vans-title">Explore our vans</h1>
            <div className="van-list-filter-buttons">
                <button 
                    onClick={()=>handleFilterChange("type", "simple")} 
                    className={`van-type-filter simple ${typeFilter === "simple" ? "selected" : ""}`}
                    >
                    Simple
                </button>

                <button 
                    onClick={()=>handleFilterChange("type", "luxury")} 
                    className={`van-type-filter luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                    >
                    Luxury
                </button>
                
                <button 
                    onClick={()=>handleFilterChange("type", "rugged")} 
                    className={`van-type-filter rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                    >
                    Rugged
                </button>

                {typeFilter && <button onClick={()=>handleFilterChange("type", null)} 
                                    className="van-type-filter clear-filters"
                                    >
                                    Clear Filters
                                </button>}
            </div>

            <section className="vans-list">
                {vansList}
            </section>
        </main>
    )
}


