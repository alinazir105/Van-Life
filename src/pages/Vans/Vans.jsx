import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"
export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try{
                const vans = await getVans()
                setVans(vans)
            }
            catch(err){
                setError(err)
            }
            setLoading(false)
        }

        fetchData()
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vansList = displayedVans.map(van => {
        return (
            <div className="van" key={van.id}>
                <Link
                    to={van.id}
                    state={
                        {
                            search: `?${searchParams.toString()}`, //e.g: ?type=simple
                            type: typeFilter
                        }
                    }
                    className="van-link"
                    aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
                >
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

    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            }
            else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if(loading){
        return <h2 aria-live="polite">Loading...</h2>
    }

    if(error){
        return <h2 aria-live="assertive">There was an Error: {error.message}</h2>
    }

    return (
        <main className="vans">
            <h1 className="vans-title">Explore our vans</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type-filter simple ${typeFilter === "simple" ? "selected" : ""}`}
                >
                    Simple
                </button>

                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type-filter luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >
                    Luxury
                </button>

                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type-filter rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >
                    Rugged
                </button>

                {typeFilter && <button onClick={() => handleFilterChange("type", null)}
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


