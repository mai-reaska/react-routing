import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch('/api/host/vans')
            .then(req => req.json())
            .then(data => setVans(data.vans))
    }, [])
    const hostElement = vans.map(van => (
        <Link to={`/host/vans/${van.id}`} key={van.id} className="host-van-link-wrapper">
            <div key={van.id} className="host-van-single">
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))
    return (
        <section>
            <h1 className="host-even-title">Your lest Even</h1>
            <div className="host-vans-list">
                {vans.length > 0 ? (
                    <section>
                        {hostElement}
                    </section>
                ) : (<h1>Loading.....</h1>)}
            </div>
        </section>
    )
}