export default function VanCard({van, handleClick}){
    return (
        <div className="van-card" onClick={()=> handleClick(van.id)}>
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    )
}