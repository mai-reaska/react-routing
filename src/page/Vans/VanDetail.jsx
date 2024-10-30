import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function VanDetail() {
    const vanId  = useParams()
    const [van, setVans] = useState([null])
    useEffect(() => {
        fetch(`/api/vans/${vanId.id}`)
            .then(req => req.json())
            .then(data => setVans(data.vans))
    }, [vanId.id])
    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>
                                {van.type}
                    </i>
                    <h3>{van.name}</h3>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>loading</h2>}
        </div>
    )
}
export default VanDetail