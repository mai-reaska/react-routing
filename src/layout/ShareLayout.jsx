import Navbar from "../page/Navbar"
import { Outlet } from "react-router-dom"
function ShareLayout() {
    return (
        <>
            <Navbar />
            <section>
                <Outlet />
            </section>
        </>

    )
}
export default ShareLayout