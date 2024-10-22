import Navbar from "../page/Navbar.jsx"
import { Outlet } from "react-router-dom"
function HomeView() {
    return (
        <>
            <Navbar />
            <section>
                <Outlet />
            </section>
        </>
    )
}
export default HomeView