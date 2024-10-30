import { useEffect, useState } from "react"
import { Link, useParams, NavLink, Outlet } from "react-router-dom"

export default function HostVansDetail() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const param = useParams()
    const [van, setVans] = useState([null])
    useEffect(() => {
        fetch(`/api/host/vans/${param.id}`)
            .then(req => req.json())
            .then(data => setVans(data.vans))
    }, [])
    return (
        <section>
            <Link to={'..'} relative="path" className="back-button">
                &larr; <span>Back to vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>

                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={van}/>
            </div>
        </section>
    )
}