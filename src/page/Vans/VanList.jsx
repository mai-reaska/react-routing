import { useEffect, useState } from "react"
import '../../server'
import { data } from "autoprefixer"
import { Link } from "react-router-dom"
function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch('/api/vans')
            .then(req => req.json())
            .then(data => setVans(data.vans))
    }, [])
    const vansElement = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name} />
                <div>
                    <h3>{van.name}</h3>
                    <p>{van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <>
            <div className="van-list-filter-buttons">
                <div className="van-list">
                    {vansElement}
                </div>
            </div>

        </>
    )
}
export default Vans